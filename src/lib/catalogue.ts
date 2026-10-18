// Classes, matières et onglets connus du site.
// Une classe ou une matière devient « disponible » dès qu'elle contient au moins
// un chapitre dans src/content/chapitres : sinon la page « Bientôt disponible » s'affiche.

export const SITE = {
  nom: 'Révisions Spé',
  description:
    'Cours, fiches de révision et exercices corrigés de spécialité, de la Première à la Terminale.',
};

export interface Classe {
  slug: string;
  nom: string;
  accroche: string;
}

export const CLASSES: Classe[] = [
  { slug: 'premiere', nom: 'Première', accroche: 'Spécialité, programme de 1re générale' },
  { slug: 'terminale', nom: 'Terminale', accroche: 'Spécialité, programme de terminale générale' },
];

export interface Matiere {
  slug: string;
  nom: string;
  court: string;
}

export const MATIERES: Matiere[] = [
  { slug: 'maths', nom: 'Mathématiques', court: 'Maths' },
  { slug: 'physique-chimie', nom: 'Physique-chimie', court: 'Physique-chimie' },
];

export type OngletId = 'cours' | 'fiche' | 'application' | 'controle';

export interface Onglet {
  id: OngletId;
  /** Segment d'URL ('' pour le cours, à la racine du chapitre). */
  slug: string;
  nom: string;
}

export const ONGLETS: Onglet[] = [
  { id: 'cours', slug: '', nom: 'Cours' },
  { id: 'fiche', slug: 'fiche', nom: 'Fiche de révision' },
  { id: 'application', slug: 'exercices-application', nom: 'Exercices d’application' },
  { id: 'controle', slug: 'exos-controle', nom: 'Exos type contrôle' },
];

export const DIFFICULTES = ['Facile', 'Moyen', 'Difficile', 'Très difficile'] as const;
export type Difficulte = (typeof DIFFICULTES)[number];

export function classeParSlug(slug: string) {
  return CLASSES.find((c) => c.slug === slug);
}

export function matiereParSlug(slug: string) {
  return MATIERES.find((m) => m.slug === slug);
}

export function urlClasse(classe: string) {
  return `/${classe}/`;
}

export function urlMatiere(classe: string, matiere: string) {
  return `/${classe}/${matiere}/`;
}

export function urlChapitre(classe: string, matiere: string, chapitre: string, onglet: OngletId = 'cours') {
  const slug = ONGLETS.find((o) => o.id === onglet)!.slug;
  return `/${classe}/${matiere}/${chapitre}/${slug ? `${slug}/` : ''}`;
}

export function formaterDuree(minutes: number) {
  if (minutes < 60) return `${minutes} min`;
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return m ? `${h} h ${String(m).padStart(2, '0')}` : `${h} h`;
}
