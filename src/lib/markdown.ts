// Rendu des champs Markdown du frontmatter (énoncé, indices, correction)
// avec exactement les mêmes plugins que les pages Markdown/MDX.
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
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
