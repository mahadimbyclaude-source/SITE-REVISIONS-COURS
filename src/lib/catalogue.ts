// Classes, matières et onglets connus du site.
// Une classe ou une matière devient « disponible » dès qu'elle contient au moins
// un chapitre dans src/content/chapitres : sinon la page « Bientôt disponible » s'affiche.

export const SITE = {
  nom: 'Révisions Spé',
  description:
    'Cours, fiches de révision et exercices corrigés de spécialité, de la Première à la Terminale.',
};

/**
 * Formulaire Google Forms des retours (erreurs, suggestions) : seul endroit à modifier
 * si le formulaire change. Les identifiants « entry.… » se lisent dans le lien obtenu
 * avec « Obtenir le lien prérempli » dans Google Forms.
 */
export const FORMULAIRE_RETOURS = {
  url: 'https://docs.google.com/forms/d/e/1FAIpQLSd7geBET-iemZMgvvz0GgEIUE_S8GBp-hFfcmFjrF_TB9hTIA/viewform',
  champs: {
    page: 'entry.338519344', // « Page concernée »
    type: 'entry.1769937456', // « Type »
  },
  typeErreurExercice: 'Erreur dans un exercice', // option exacte du champ « Type »
};

/** Lien vers le formulaire, prérempli avec la page concernée (et le type pour un exercice). */
export function lienRetour(page: string, { erreurExercice = false } = {}) {
  const url = new URL(FORMULAIRE_RETOURS.url);
  url.searchParams.set('usp', 'pp_url');
  if (erreurExercice) {
    url.searchParams.set(FORMULAIRE_RETOURS.champs.type, FORMULAIRE_RETOURS.typeErreurExercice);
  }
  url.searchParams.set(FORMULAIRE_RETOURS.champs.page, page);
  return url.toString();
}

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

/**
 * Chapitres mis en avant sur l'accueil et dans la liste des chapitres.
 * Clé : « classe/matière/chapitre ».
 */
export const CHAPITRES_EN_AVANT: Record<
  string,
  { etiquette: string; titre: string; accroche: string; bouton: string; lienSecondaire?: { texte: string; url: string } }
> = {
  'premiere/maths/automatismes': {
    etiquette: 'Épreuve anticipée · sans calculatrice',
    titre: 'Prépare l’épreuve anticipée de maths',
    accroche:
      'Calcul, pourcentages, fonctions, statistiques, probabilités : les réflexes à maîtriser sans calculatrice pour la partie automatismes de l’épreuve de fin de Première.',
    bouton: 'Réviser les automatismes',
    lienSecondaire: { texte: 'Voir les sujets zéro', url: '/annales/#premiere' },
  },
};

export function miseEnAvant(chapitre: { classe: string; matiere: string; slug: string }) {
  return CHAPITRES_EN_AVANT[`${chapitre.classe}/${chapitre.matiere}/${chapitre.slug}`];
}

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
