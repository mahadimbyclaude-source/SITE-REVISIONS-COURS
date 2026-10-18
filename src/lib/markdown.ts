// Rendu des champs Markdown du frontmatter (énoncé, indices, correction)
// avec exactement les mêmes plugins que les pages Markdown/MDX.
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import katex from 'katex';
import { katexOptions } from './math/katex-options.mjs';
import { rehypePlugins, remarkPlugins } from './math/plugins.mjs';

const processeur = unified()
  .use(remarkParse)
  .use(remarkGfm)
  .use(remarkPlugins)
  .use(remarkRehype, { allowDangerousHtml: true })
  .use(rehypePlugins)
  .use(rehypeStringify, { allowDangerousHtml: true });

export async function rendreMarkdown(source: string): Promise<string> {
  return String(await processeur.process(source));
}

/** Rendu d'un texte court (titre…) sans paragraphe englobant : « Suite $(u_n)$ ». */
export async function rendreMarkdownEnLigne(source: string): Promise<string> {
  return (await rendreMarkdown(source)).trim().replace(/^<p>([\s\S]*)<\/p>$/, '$1');
}

export const echapperHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);

/** Texte de titre dont les formules sont notées ⟦LaTeX⟧ (sommaire) → HTML avec KaTeX. */
export function rendreTitreAvecFormules(texte: string): string {
  return echapperHtml(texte).replace(/⟦([\s\S]*?)⟧/g, (_, tex: string) =>
    katex.renderToString(tex.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&'), {
      ...katexOptions,
      macros: { ...katexOptions.macros },
      throwOnError: false,
    }),
  );
}
