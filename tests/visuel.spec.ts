// Test visuel : chaque page du site construit est ouverte dans un vrai navigateur
// (mobile et ordinateur), avec tous les indices et toutes les corrections dépliés.
// On vérifie qu'aucune formule ne s'affiche en LaTeX brut, que KaTeX a bien rendu
// chaque formule, que rien ne déborde horizontalement, puis on enregistre une capture
// pleine page dans test-results/captures/ pour relecture.
import { readdirSync } from 'node:fs';
import path from 'node:path';
import { expect, test, type Page } from '@playwright/test';
import { FORMULAIRE_RETOURS } from '../src/lib/catalogue';

const DIST = path.resolve('dist');

function pages(dossier = DIST): string[] {
  return readdirSync(dossier, { withFileTypes: true }).flatMap((e) => {
    if (e.isDirectory()) return e.name === 'pagefind' || e.name === '_astro' ? [] : pages(path.join(dossier, e.name));
    if (e.name !== 'index.html') return [];
    const rel = path.relative(DIST, dossier).split(path.sep).join('/');
    return [rel ? `/${rel}/` : '/'];
  });
}

const LATEX_BRUT = /\\[a-zA-Z]{2,}|\$|⟦|⟧/;

async function toutDeplier(page: Page) {
  // Indices : un clic par indice, jusqu'à ce que le bouton soit désactivé.
  for (const bouton of await page.locator('.btn-indice').all()) {
    while (await bouton.isEnabled()) await bouton.click();
  }
  // Corrections, démonstrations, sommaire.
  await page.evaluate(() => document.querySelectorAll('details').forEach((d) => (d.open = true)));
}

const liste = pages();
test('le site construit contient des pages', () => {
  expect(liste.length, 'Lancer « npm run build » avant le test visuel.').toBeGreaterThan(0);
});

for (const url of liste) {
  test(`rendu des formules : ${url}`, async ({ page }, info) => {
    await page.goto(url);
    await page.evaluate(() => document.fonts.ready);

    // 0. Avant toute action : corrections fermées, indices masqués, et un clic
    //    sur « Indice » n'affiche qu'un seul indice. Durée affichée sur les exos type contrôle.
    for (const exo of await page.locator('article.exo').all()) {
      await expect(exo.locator('details.correction')).not.toHaveAttribute('open', /.*/);
      await expect(exo.locator('.correction-contenu')).toBeHidden();
      await expect(exo.locator('.indice:visible')).toHaveCount(0);
    }
    const premierBouton = page.locator('.btn-indice').first();
    if (await premierBouton.count()) {
      const exo = page.locator('article.exo').filter({ has: premierBouton });
      await premierBouton.click();
      await expect(exo.locator('.indice:visible')).toHaveCount(1);
    }
    if (url.endsWith('/exos-controle/')) {
      for (const exo of await page.locator('article.exo').all()) {
        await expect(exo.locator('.exo-meta')).toContainText('Durée estimée');
      }
    }

    await toutDeplier(page);

    // 1. Aucune erreur de syntaxe KaTeX.
    await expect(page.locator('.katex-error')).toHaveCount(0);

    // 2. Aucun LaTeX brut dans le texte visible (indices et corrections dépliés).
    const texte = await page.evaluate(() => document.body.innerText);
    const brut = texte.match(LATEX_BRUT);
    expect(brut, `LaTeX brut visible : « ${texte.slice(Math.max(0, (brut?.index ?? 0) - 40), (brut?.index ?? 0) + 40)} »`).toBeNull();

    // 3. Chaque formule a un rendu visuel non vide, avec les polices KaTeX.
    const vides = await page.evaluate(() =>
      [...document.querySelectorAll<HTMLElement>('.katex-html')]
        .filter((el) => el.getBoundingClientRect().width === 0)
        .map((el) => el.closest('.katex')?.querySelector('annotation')?.textContent ?? '?'),
    );
    expect(vides, 'Formules sans rendu visuel').toEqual([]);
    // Les flèches et accents dessinés en SVG (\vec, \overrightarrow, \widehat…) sont visibles.
    const svgVides = await page.evaluate(() =>
      [...document.querySelectorAll<SVGElement>('.katex-html svg')]
        .filter((el) => el.getBoundingClientRect().width === 0)
        .map((el) => el.closest('.katex')?.querySelector('annotation')?.textContent ?? '?'),
    );
    expect(svgVides, 'Accents ou flèches KaTeX invisibles').toEqual([]);
    if (await page.locator('.katex').count()) {
      expect(await page.evaluate(() => document.fonts.check('16px KaTeX_Main'))).toBe(true);
    }

    // 4. Les formules larges défilent dans leur cadre : la page ne déborde pas.
    const debordement = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
    expect(debordement, 'La page déborde horizontalement').toBeLessThanOrEqual(0);

    // 5. Lien vers le formulaire de retours : dans le pied de page, et sous chaque exercice,
    //    nouvel onglet sécurisé, « Page concernée » préremplie avec l'URL complète.
    const urlPage = new URL(page.url());
    const pageCourante = urlPage.origin + urlPage.pathname;
    const verifierLien = async (lien: ReturnType<Page['locator']>, attendu: string) => {
      await expect(lien).toHaveAttribute('target', '_blank');
      await expect(lien).toHaveAttribute('rel', 'noopener noreferrer');
      const href = new URL((await lien.getAttribute('href'))!);
      expect(href.origin + href.pathname).toBe(FORMULAIRE_RETOURS.url);
      expect(href.searchParams.get(FORMULAIRE_RETOURS.champs.page)).toBe(attendu);
    };
    const pied = page.locator('footer a[data-retour]');
    await expect(pied).toHaveCount(1);
    await expect(pied).toHaveText(/Signaler une erreur ou faire une suggestion/);
    await verifierLien(pied, pageCourante);
    for (const exo of await page.locator('article.exo').all()) {
      const lien = exo.locator('a[data-retour]');
      await expect(lien).toHaveCount(1);
      await expect(lien).toHaveText(/Une erreur dans cet exercice\s?\?\s?Signale-la/);
      await verifierLien(lien, `${pageCourante}#${await exo.getAttribute('id')}`);
    }

    const nom = url === '/' ? 'accueil' : url.replace(/^\/|\/$/g, '').replace(/\//g, '__');
    await page.screenshot({ path: `test-results/captures/${info.project.name}/${nom}.png`, fullPage: true });
  });
}

test.describe('parcours : accueil, puis page de la classe', () => {
  test('accueil : le choix de la classe vient d’abord, sans bandeau ni liste de chapitres', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('.encart-en-avant')).toHaveCount(0);
    await expect(page.locator('.chapitres-compacts')).toHaveCount(0);
    const titres = (await page.locator('main h2').allInnerTexts()).map((t) => t.trim());
    expect(titres).toEqual(['Choisis ta classe', 'Comment travailler un chapitre', 'S’entraîner sur de vrais sujets']);

    // Terminale : carte inactive, « Bientôt disponible », sans lien.
    const terminale = page.locator('main .carte', { hasText: 'Terminale' });
    await expect(terminale).toContainText('Bientôt disponible');
    expect(await terminale.evaluate((el) => el.tagName)).not.toBe('A');
    await expect(page.locator('main a[href="/terminale/"]')).toHaveCount(0);

    // Menu du haut inchangé.
    await expect(page.locator('header a[href="/annales/"]')).toBeVisible();
    await expect(page.locator('header [data-ouvrir-recherche]')).toBeVisible();
  });

  test('clic sur Première : titre, bandeau, puis liste numérotée des chapitres', async ({ page }) => {
    await page.goto('/');
    const carte = page.locator('main a.carte', { hasText: 'Première' });
    const nbChapitres = Number((await carte.innerText()).match(/(\d+) chapitres? en ligne/)![1]);
    await carte.click();

    await expect(page).toHaveURL(/\/premiere\/$/);
    await expect(page.locator('h1')).toHaveText('Première · Spécialité');
    const encart = page.locator('.encart-en-avant');
    await expect(encart).toContainText('Prépare l’épreuve anticipée de maths');
    await expect(encart.getByRole('link', { name: 'Réviser les automatismes' })).toBeVisible();
    await expect(encart.getByRole('link', { name: 'Voir les sujets zéro' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Chapitres de Première · Maths' })).toBeVisible();

    // Ordre : titre, bandeau, liste.
    const dansLOrdre = await page.evaluate(() => {
      const els = ['h1', '.encart-en-avant', '.chapitres-compacts'].map((s) => document.querySelector(s)!);
      return els.every((el, i) => i === 0 || Boolean(els[i - 1].compareDocumentPosition(el) & Node.DOCUMENT_POSITION_FOLLOWING));
    });
    expect(dansLOrdre).toBe(true);

    // Autant de chapitres que sur la carte de l'accueil, numérotés 1, 2, 3…
    await expect(page.locator('.chapitres-compacts > li')).toHaveCount(nbChapitres);
    const numeros = (await page.locator('.chapitres-compacts .chapitre-numero').allInnerTexts()).map(Number);
    expect(numeros).toEqual(Array.from({ length: nbChapitres }, (_, i) => i + 1));
    const automatismes = page.locator('.chapitre-compact', { hasText: 'Automatismes' });
    await expect(automatismes).toHaveClass(/chapitre-compact--en-avant/);
    await expect(automatismes).toContainText('Sans calculatrice');

    // Le bouton « retour » du navigateur ramène à l'accueil.
    await page.goBack();
    await expect(page).toHaveURL(/\/$/);
    await expect(page.getByRole('heading', { name: 'Choisis ta classe' })).toBeVisible();
  });

  test('téléphone 390 px : rien ne déborde sur l’accueil et la page Première', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    for (const url of ['/', '/premiere/']) {
      await page.goto(url);
      const debordement = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
      expect(debordement, url).toBeLessThanOrEqual(0);
    }
  });

  test('page de chapitre : le fil d’Ariane ramène à la page Première', async ({ page }) => {
    await page.goto('/premiere/maths/derivation/');
    await page.locator('.fil a', { hasText: 'Première' }).click();
    await expect(page).toHaveURL(/\/premiere\/$/);
    await expect(page.locator('h1')).toHaveText('Première · Spécialité');
  });
});

test.describe('recherche', () => {
  async function chercher(page: Page, requete: string) {
    await page.goto('/premiere/maths/derivation/');
    await page.locator('[data-ouvrir-recherche]').first().click();
    await page.locator('#recherche-champ').fill(requete);
    await expect(page.locator('.recherche-etat')).not.toBeEmpty();
  }

  test('résultats avec chapitre, onglet, extrait et formules rendues', async ({ page }, info) => {
    await chercher(page, 'discriminant');
    const resultats = page.locator('.resultat');
    await expect(resultats.first()).toBeVisible();
    await expect(resultats.first().locator('.resultat-chapitre')).not.toBeEmpty();
    await expect(resultats.first().locator('.resultat-onglet')).not.toBeEmpty();
    await expect(resultats.first().locator('.resultat-extrait').first()).not.toBeEmpty();
    expect(await page.locator('.recherche-resultats .katex').count()).toBeGreaterThan(0);
    const texte = await page.locator('.recherche-resultats').innerText();
    expect(texte).not.toMatch(LATEX_BRUT);
    await page.screenshot({ path: `test-results/captures/${info.project.name}/recherche.png` });
  });

  // Quand un mot est absent de l'index, Pagefind se rabat sur le plus long préfixe connu
  // (« litres » → « lit ») : on vérifie donc que le mot lui-même n'apparaît dans aucun extrait.
  async function textesResultats(page: Page) {
    await page.waitForTimeout(300);
    return (await page.locator('.recherche-resultats').innerText()).toLowerCase();
  }

  test('témoin : un mot de l’énoncé est bien trouvé', async ({ page }) => {
    // « carton » apparaît dans l'énoncé de l'exercice de la boîte.
    await chercher(page, 'carton');
    expect(await textesResultats(page)).toContain('carton');
  });

  for (const [requete, chapitre] of [
    ['exponentielle', 'Fonction exponentielle'],
    ['produit scalaire', 'Produit scalaire'],
    ['trigonométrie', 'Trigonométrie'],
    ['probabilités conditionnelles', 'Probabilités conditionnelles'],
    ['automatismes', 'Automatismes'],
    ['courbes représentatives', 'Variations et courbes représentatives'],
  ]) {
    test(`la recherche « ${requete} » trouve le chapitre ${chapitre}`, async ({ page }) => {
      await chercher(page, requete);
      await expect(page.locator('.resultat-chapitre', { hasText: chapitre }).first()).toBeVisible();
    });
  }

  test('les corrections ne sont pas indexées', async ({ page }) => {
    // « litres » n'apparaît que dans une correction.
    await chercher(page, 'litres');
    expect(await textesResultats(page)).not.toContain('litres');
  });

  test('les indices ne sont pas indexés', async ({ page }) => {
    // « barre » n'apparaît que dans un indice.
    await chercher(page, 'barre');
    expect(await textesResultats(page)).not.toContain('barre');
  });
});
