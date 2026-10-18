// Vérifie le site construit (dist/) : aucune formule ne doit s'afficher en LaTeX brut.
//
//   npm run check:formules        (lancé automatiquement à la fin de npm run build)
//
// Contrôles, page par page :
//  1. aucune erreur KaTeX (.katex-error : syntaxe LaTeX invalide) ;
//  2. dans le texte visible hors formules : pas de « $ », pas de commande LaTeX (\frac…),
//     pas de puissance « x^2 », pas de fraction écrite avec une barre oblique (2/3, (x+1)/(x-1)),
//     pas de nombre décimal avec un point (0.25 au lieu de 0,25) ;
//  3. dans le code LaTeX des formules : pas de barre oblique pour une fraction (utiliser \frac),
//     pas de point décimal ;
//  4. indices et corrections exclus de l'index de recherche (data-pagefind-ignore).
import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import { parse } from 'node-html-parser';

const DIST = path.resolve(process.argv[2] ?? 'dist');

async function fichiersHtml(dossier) {
  const entrees = await readdir(dossier, { withFileTypes: true });
  const fichiers = await Promise.all(
    entrees.map((e) => {
      const chemin = path.join(dossier, e.name);
      if (e.isDirectory()) return e.name === 'pagefind' || e.name === '_astro' ? [] : fichiersHtml(chemin);
      return e.name.endsWith('.html') ? [chemin] : [];
    }),
  );
  return fichiers.flat();
}

const extrait = (texte, index, rayon = 40) =>
  texte
    .slice(Math.max(0, index - rayon), index + rayon)
    .replace(/\s+/g, ' ')
    .trim();

function chercher(texte, regex, message, problemes) {
  for (const m of texte.matchAll(new RegExp(regex.source, regex.flags.includes('g') ? regex.flags : regex.flags + 'g'))) {
    problemes.push(`${message} : « ${extrait(texte, m.index)} »`);
  }
}

const REGLES_TEXTE = [
  [/\$/, 'Délimiteur $ non rendu (formule mal fermée ?)'],
  [/\\[a-zA-Z]{2,}/, 'Commande LaTeX affichée en brut'],
  [/[A-Za-z0-9)]\^[\w{(-]/, 'Puissance écrite hors LaTeX'],
  [/(?:[0-9)²³]\s?\/\s?[0-9A-Za-z(]|[0-9A-Za-z)²³]\s?\/\s?[0-9(])/, 'Fraction écrite avec une barre oblique (utiliser \\frac)'],
  [/\d\.\d/, 'Nombre décimal avec un point (utiliser la virgule)'],
];

// Le texte écrit dans \text{…} ou \mathrm{…} (unités comme km/h ou m/s) n'est pas une fraction.
const sansTexte = (tex) =>
  tex.replace(/\\(?:text|textrm|mathrm|operatorname|mbox)\s*\{[^{}]*\}/g, (groupe) => groupe.replace(/\//g, '∕'));

const REGLES_TEX = [
  [/[\w)}]\s*\/\s*[\w({\\]/, 'Fraction avec une barre oblique dans une formule (utiliser \\frac)', sansTexte],
  [/\d\.\d/, 'Point décimal dans une formule (utiliser la virgule : 0,25)', (tex) => tex],
];

const fichiers = await fichiersHtml(DIST);
if (fichiers.length === 0) {
  console.error(`Aucune page HTML dans ${DIST} : lancer d'abord « astro build ».`);
  process.exit(1);
}

let total = 0;
let nbFormules = 0;
for (const fichier of fichiers) {
  const html = await readFile(fichier, 'utf8');
  const racine = parse(html, { comment: false, blockTextElements: { script: true, style: true } });
  const problemes = [];

  // 1. Erreurs KaTeX
  for (const err of racine.querySelectorAll('.katex-error')) {
    problemes.push(`Erreur KaTeX : « ${err.textContent.trim()} » (${err.getAttribute('title') ?? 'syntaxe'})`);
  }

  // 3. Code LaTeX des formules
  const sources = racine.querySelectorAll('annotation[encoding="application/x-tex"]');
  nbFormules += sources.length;
  for (const source of sources) {
    const tex = source.textContent;
    for (const [regex, message, preparer] of REGLES_TEX) chercher(preparer(tex), regex, message, problemes);
  }

  // 4. Indices et corrections hors index
  for (const bloc of racine.querySelectorAll('.indices, .correction')) {
    if (!bloc.hasAttribute('data-pagefind-ignore')) {
      problemes.push(`Bloc « ${bloc.classNames} » indexé par la recherche (data-pagefind-ignore manquant)`);
    }
  }

  // 2. Texte visible hors formules
  const corps = racine.querySelector('body');
  if (corps) {
    for (const el of corps.querySelectorAll('script, style, noscript, svg, code, pre, .katex, .katex-display, .tex-index')) {
      el.remove();
    }
    const texte = corps.textContent;
    for (const [regex, message] of REGLES_TEXTE) chercher(texte, regex, message, problemes);
  }

  if (problemes.length) {
    total += problemes.length;
    console.error(`\n✗ ${path.relative(DIST, fichier)}`);
    for (const p of problemes) console.error(`   - ${p}`);
  }
}

if (total > 0) {
  console.error(`\n${total} problème(s) de rendu des formules dans ${fichiers.length} page(s).`);
  process.exit(1);
}
console.log(`✓ Formules : ${nbFormules} formules KaTeX vérifiées dans ${fichiers.length} pages, aucun LaTeX brut.`);
