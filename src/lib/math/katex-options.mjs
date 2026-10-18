// Options KaTeX partagées entre le rendu au build (rehype-katex)
// et le rendu des extraits de recherche dans le navigateur.

export const katexMacros = {
  // Ensembles de nombres
  '\\R': '\\mathbb{R}',
  '\\N': '\\mathbb{N}',
  '\\Z': '\\mathbb{Z}',
  '\\Q': '\\mathbb{Q}',
  // Intervalles à la française : o = ouvert, f = fermé.
  // \interoo{-\infty}{-1}  →  ]-∞ ; -1[
  '\\interff': '\\mathopen{[}#1\\,;\\,#2\\mathclose{]}',
  '\\interoo': '\\mathopen{]}#1\\,;\\,#2\\mathclose{[}',
  '\\interof': '\\mathopen{]}#1\\,;\\,#2\\mathclose{]}',
  '\\interfo': '\\mathopen{[}#1\\,;\\,#2\\mathclose{[}',
};

export const katexOptions = {
  macros: katexMacros,
  // Les accents dans \text{...} sont normaux en français : on ne les signale pas.
  strict: (code) => (code === 'unicodeTextInMathMode' ? 'ignore' : 'warn'),
};
