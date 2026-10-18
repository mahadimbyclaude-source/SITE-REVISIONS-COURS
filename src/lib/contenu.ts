// Assemble les collections en chapitres : cours + fiche + exercices.
import { getCollection, type CollectionEntry } from 'astro:content';

export type Exercice = CollectionEntry<'exercices'>;

export interface Chapitre {
  classe: string;
  matiere: string;
  slug: string;
  titre: string;
  description: string;
  numero: number;
  cours: CollectionEntry<'cours'>;
  fiche?: CollectionEntry<'fiches'>;
  application: Exercice[];
  controle: Exercice[];
}

export function decouperId(id: string) {
  const [classe, matiere, chapitre, ...reste] = id.split('/');
  return { classe, matiere, chapitre, fichier: reste.join('/') };
}

const cleChapitre = (id: string) => {
  const { classe, matiere, chapitre } = decouperId(id);
  return `${classe}/${matiere}/${chapitre}`;
};

function trierExercices(a: Exercice, b: Exercice) {
  const oa = a.data.ordre ?? Number.MAX_SAFE_INTEGER;
  const ob = b.data.ordre ?? Number.MAX_SAFE_INTEGER;
  return oa - ob || a.id.localeCompare(b.id);
}

/** Tous les chapitres, triés par classe, matière puis ordre. */
export async function tousLesChapitres(): Promise<Chapitre[]> {
  const [cours, fiches, exercices] = await Promise.all([
    getCollection('cours'),
    getCollection('fiches'),
    getCollection('exercices'),
  ]);

  const chapitres = cours
    .map((entree): Chapitre => {
      const { classe, matiere, chapitre } = decouperId(entree.id);
      const cle = cleChapitre(entree.id);
      const exos = exercices.filter((e) => cleChapitre(e.id) === cle).sort(trierExercices);
      return {
        classe,
        matiere,
        slug: chapitre,
        titre: entree.data.titre,
        description: entree.data.description,
        numero: 0,
        cours: entree,
        fiche: fiches.find((f) => cleChapitre(f.id) === cle),
        application: exos.filter((e) => e.data.type === 'application'),
        controle: exos.filter((e) => e.data.type === 'controle'),
      };
    })
    .sort(
      (a, b) =>
        a.classe.localeCompare(b.classe) ||
        a.matiere.localeCompare(b.matiere) ||
        a.cours.data.ordre - b.cours.data.ordre,
    );

  // Numérotation des chapitres au sein de chaque classe/matière.
  const compteurs = new Map<string, number>();
  for (const c of chapitres) {
    const cle = `${c.classe}/${c.matiere}`;
    const n = (compteurs.get(cle) ?? 0) + 1;
    compteurs.set(cle, n);
    c.numero = n;
  }
  return chapitres;
}

export async function chapitresDe(classe: string, matiere?: string) {
  return (await tousLesChapitres()).filter(
    (c) => c.classe === classe && (matiere === undefined || c.matiere === matiere),
  );
}

/** Résout « second-degre » en titre de chapitre ; un texte libre est conservé tel quel. */
export function nommerChapitresMobilises(slugs: string[], chapitres: Chapitre[]) {
  return slugs.map((s) => {
    const c = chapitres.find((ch) => ch.slug === s);
    return c ? { titre: c.titre, chapitre: c } : { titre: s, chapitre: undefined };
  });
}

export function ancreExercice(exo: Exercice) {
  return decouperId(exo.id).fichier.replace(/^exercices\//, '');
}

export function slugifier(texte: string) {
  return texte
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}
