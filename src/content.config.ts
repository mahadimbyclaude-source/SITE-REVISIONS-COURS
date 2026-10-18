// Collections de contenu.
//
// Arborescence : src/content/chapitres/<classe>/<matiere>/<chapitre>/
//   cours.mdx              → onglet « Cours » (son frontmatter décrit le chapitre)
//   fiche.mdx              → onglet « Fiche de révision »
//   exercices/<nom>.md     → un fichier par exercice ; le champ `type` choisit l'onglet
//
// Ajouter un chapitre = créer un dossier avec ces fichiers. Rien d'autre à modifier.
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const BASE = './src/content/chapitres';

// Identifiant = chemin relatif sans extension, ex. « premiere/maths/derivation/cours ».
const idDepuisChemin = ({ entry }: { entry: string }) =>
  entry.replace(/\\/g, '/').replace(/\.mdx?$/, '');

const cours = defineCollection({
  loader: glob({ pattern: '*/*/*/cours.{md,mdx}', base: BASE, generateId: idDepuisChemin }),
  schema: z.object({
    titre: z.string(),
    ordre: z.number().int(),
    description: z.string(),
  }),
});

const fiches = defineCollection({
  loader: glob({ pattern: '*/*/*/fiche.{md,mdx}', base: BASE, generateId: idDepuisChemin }),
  schema: z.object({
    titre: z.string().optional(),
  }),
});

// Texte Markdown pouvant contenir du LaTeX ($…$ et $$…$$).
const markdown = z.string().trim().min(1);

const champsCommuns = {
  titre: z.string(),
  ordre: z.number().int().optional(),
  enonce: markdown,
  indices: z
    .array(markdown)
    .min(2, 'Il faut au moins deux indices progressifs (piste générale, puis plus précis).'),
  correction: markdown,
};

const exerciceApplication = z.object({
  ...champsCommuns,
  type: z.literal('application'),
  // Une seule méthode du chapitre, regroupée par notion dans l'onglet.
  notion: z.string(),
  difficulte: z.enum(['Facile', 'Moyen'], {
    errorMap: () => ({ message: 'Exercice d’application : difficulté « Facile » ou « Moyen ».' }),
  }),
  chapitres_mobilises: z.array(z.string()).optional(),
  duree_estimee: z.number().int().positive().optional(),
});

const exerciceControle = z.object({
  ...champsCommuns,
  type: z.literal('controle'),
  difficulte: z.enum(['Moyen', 'Difficile', 'Très difficile'], {
    errorMap: () => ({
      message: 'Exo type contrôle : difficulté « Moyen », « Difficile » ou « Très difficile ».',
    }),
  }),
  // Slugs de chapitres (ex. « second-degre ») ou texte libre (ex. « Fonctions (Seconde) »).
  chapitres_mobilises: z.array(z.string()).min(1),
  // En minutes.
  duree_estimee: z.number().int().positive(),
});

const exercices = defineCollection({
  loader: glob({ pattern: '*/*/*/exercices/*.{md,mdx}', base: BASE, generateId: idDepuisChemin }),
  schema: z.discriminatedUnion('type', [exerciceApplication, exerciceControle]),
});

export const collections = { cours, fiches, exercices };
