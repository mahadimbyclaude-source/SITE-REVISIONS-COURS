// Test visuel : chaque page du site construit est ouverte dans un vrai navigateur
// (mobile et ordinateur), avec tous les indices et toutes les corrections dépliés.
// On vérifie qu'aucune formule ne s'affiche en LaTeX brut, que KaTeX a bien rendu
// chaque formule, que rien ne déborde horizontalement, puis on enregistre une capture
// pleine page dans test-results/captures/ pour relecture.
import { readdirSync } from 'node:fs';
import path from 'node:path';
import { expect, test, type Page } from '@playwright/test';

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
    if (await page.locator('.katex').count()) {
      expect(await page.evaluate(() => document.fonts.check('16px KaTeX_Main'))).toBe(true);
    }

    // 4. Les formules larges défilent dans leur cadre : la page ne déborde pas.
    const debordement = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
    expect(debordement, 'La page déborde horizontalement').toBeLessThanOrEqual(0);

    const nom = url === '/' ? 'accueil' : url.replace(/^\/|\/$/g, '').replace(/\//g, '__');
    await page.screenshot({ path: `test-results/captures/${info.project.name}/${nom}.png`, fullPage: true });
  });
}

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
