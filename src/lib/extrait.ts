// Côté navigateur : transforme un extrait Pagefind en HTML où chaque formule
// ⟦…⟧ (copie LaTeX indexée) est rendue par KaTeX. Une formule coupée par le bord
// de l'extrait est retirée plutôt qu'affichée en LaTeX brut.
import type katexType from 'katex';
import { katexOptions } from './math/katex-options.mjs';
import { DEBUT_FORMULE, FIN_FORMULE } from './math/constantes.mjs';

const JETONS = new RegExp(`(<mark>|</mark>|${DEBUT_FORMULE}|${FIN_FORMULE})`);

function decoderEntites(s: string) {
  return s
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#0?39;/g, "'")
    .replace(/&amp;/g, '&');
}

export function rendreExtrait(extrait: string, katex: typeof katexType): string {
  let sortie = '';
  let tex = '';
  let dansFormule = false;
  let marqueOuverte = false;

  for (const jeton of extrait.split(JETONS)) {
    if (jeton === '<mark>' || jeton === '</mark>') {
      marqueOuverte = jeton === '<mark>';
      if (!dansFormule) sortie += jeton;
    } else if (jeton === DEBUT_FORMULE) {
      if (marqueOuverte) sortie += '</mark>';
      dansFormule = true;
      tex = '';
    } else if (jeton === FIN_FORMULE) {
      if (!dansFormule) {
        // L'extrait commence au milieu d'une formule : on jette le début.
        sortie = marqueOuverte ? '… <mark>' : '… ';
        continue;
      }
      dansFormule = false;
      try {
        sortie += katex.renderToString(decoderEntites(tex), {
          ...katexOptions,
          macros: { ...katexOptions.macros },
          throwOnError: true,
          displayMode: false,
        });
      } catch {
        sortie += '…';
      }
      if (marqueOuverte) sortie += '<mark>';
    } else if (dansFormule) {
      tex += jeton;
    } else {
      sortie += jeton;
    }
  }

  if (dansFormule) sortie += ' …'; // formule coupée en fin d'extrait
  if (marqueOuverte && !dansFormule) sortie += '</mark>';
  return sortie;
}
