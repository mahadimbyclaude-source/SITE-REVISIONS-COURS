// Plugins remark/rehype utilisés partout : pages Markdown/MDX (via astro.config.mjs)
// et champs Markdown du frontmatter des exercices (via src/lib/markdown.ts).
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import { SKIP, visit } from 'unist-util-visit';
import { katexOptions } from './katex-options.mjs';
import { DEBUT_FORMULE, FIN_FORMULE } from './constantes.mjs';

const NON_TEXTE = new Set(['code', 'pre', 'script', 'style', 'kbd', 'samp']);

function aClasse(node, nom) {
  const cls = node.properties?.className;
  return Array.isArray(cls) && cls.includes(nom);
}

/** Espaces fines insécables avant « : ; ! ? » et à l'intérieur des guillemets. */
export function rehypeTypoFr() {
  return (tree) => {
    visit(tree, (node) => {
      if (node.type === 'element' && NON_TEXTE.has(node.tagName)) return SKIP;
      if (node.type !== 'text') return;
      node.value = node.value
        .replace(/[  ]([:;!?»])/g, ' $1')
        .replace(/«[  ]/g, '« ');
    });
  };
}

/** Virgule décimale dans les formules : 0,25 → 0{,}25 (pas d'espace après la virgule). */
export function rehypeVirguleDecimale() {
  return (tree) => {
    visit(tree, 'element', (node) => {
      if (!aClasse(node, 'language-math')) return;
      for (const enfant of node.children) {
        if (enfant.type === 'text') {
          enfant.value = enfant.value.replace(/(\d),(?=\d)/g, '$1{,}');
        }
      }
      return SKIP;
    });
  };
}

function texteDe(node) {
  if (node.type === 'text') return node.value;
  return (node.children ?? []).map(texteDe).join('');
}

function sourceTex(node) {
  let source;
  visit(node, 'element', (el) => {
    if (el.tagName === 'annotation' && el.properties?.encoding === 'application/x-tex') {
      source = texteDe(el);
      return false;
    }
  });
  return source?.trim();
}

/** Empêche un retour à la ligne entre une formule et la ponctuation qui la suit. */
function lierPonctuation(suivant) {
  if (suivant?.type === 'text' && /^[.,;:!?)\]»…]/.test(suivant.value)) {
    suivant.value = '⁠' + suivant.value; // gluon de mots (WORD JOINER)
  }
}

/**
 * Après KaTeX : le rendu visuel est exclu de l'index Pagefind et remplacé, pour la
 * recherche, par une copie masquée du code LaTeX (⟦…⟧) que la barre de recherche
 * re-rend avec KaTeX dans les extraits. Les tableaux (\begin{array}…) ne sont pas indexés.
 */
export function rehypeIndexFormules() {
  return (tree) => {
    visit(tree, 'element', (node, index, parent) => {
      if (!aClasse(node, 'katex-display') && !aClasse(node, 'katex')) return;
      node.properties.dataPagefindIgnore = 'all';
      if (!aClasse(node, 'katex-display') && parent && typeof index === 'number') {
        lierPonctuation(parent.children[index + 1]);
      }
      const tex = sourceTex(node);
      if (!parent || typeof index !== 'number' || !tex || /\\begin\{/.test(tex)) return SKIP;
      parent.children.splice(index + 1, 0, {
        type: 'element',
        tagName: 'span',
        properties: { className: ['tex-index'], ariaHidden: 'true' },
        children: [{ type: 'text', value: DEBUT_FORMULE + tex.replace(/\s+/g, ' ') + FIN_FORMULE }],
      });
      return [SKIP, index + 2];
    });
  };
}

/** Les tableaux Markdown défilent horizontalement sur petit écran. */
export function rehypeTableauxDefilants() {
  return (tree) => {
    visit(tree, 'element', (node, index, parent) => {
      if (node.tagName !== 'table' || !parent || typeof index !== 'number') return;
      if (parent.type === 'element' && aClasse(parent, 'tableau-defilant')) return SKIP;
      parent.children[index] = {
        type: 'element',
        tagName: 'div',
        properties: { className: ['tableau-defilant'] },
        children: [node],
      };
      return SKIP;
    });
  };
}

export const remarkPlugins = [remarkMath];

export const rehypePlugins = [
  rehypeTypoFr,
  rehypeVirguleDecimale,
  [rehypeKatex, katexOptions],
  rehypeIndexFormules,
  rehypeTableauxDefilants,
];
