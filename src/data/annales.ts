// Liens vers les sources officielles. Aucun PDF n'est copié sur le site :
// les sujets restent hébergés par Éduscol (ministère) et l'APMEP.
// Liens vérifiés en octobre 2026.

export interface LienAnnale {
  titre: string;
  source: 'Éduscol' | 'APMEP';
  description: string;
  url: string;
  format?: 'PDF';
}

export interface SectionAnnales {
  classe: string;
  titre: string;
  intro: string;
  liens: LienAnnale[];
}

export const ANNALES: SectionAnnales[] = [
  {
    classe: 'premiere',
    titre: 'Première — épreuve anticipée de mathématiques',
    intro:
      'Depuis la session 2026, tous les élèves de Première passent une épreuve anticipée de mathématiques (2 h, sans calculatrice) : une partie d’automatismes sous forme de QCM, puis des exercices. Les sujets zéro montrent le format attendu.',
    liens: [
      {
        titre: 'Sujet zéro n° 1 — enseignement de spécialité',
        source: 'Éduscol',
        description: 'Sujet officiel de la voie générale, spécialité mathématiques.',
        url: 'https://eduscol.education.gouv.fr/sites/default/files/document/sujet-specialite-1pdf-112050.pdf',
        format: 'PDF',
      },
      {
        titre: 'Sujet zéro n° 2 — enseignement de spécialité',
        source: 'Éduscol',
        description: 'Second sujet officiel de la voie générale, spécialité mathématiques.',
        url: 'https://eduscol.education.gouv.fr/sites/default/files/document/sujet-specialite-2pdf-112053.pdf',
        format: 'PDF',
      },
      {
        titre: 'Présentation officielle de l’épreuve anticipée',
        source: 'Éduscol',
        description:
          'Objectifs, programme, définition de l’épreuve et tous les sujets zéro (spécialité, enseignement spécifique, voie technologique).',
        url: 'https://eduscol.education.gouv.fr/5688/epreuve-anticipee-de-mathematiques-aux-baccalaureats-general-et-technologique#chapitre-ancre3',
      },
      {
        titre: 'Sujets zéro et sujets 2026 corrigés',
        source: 'APMEP',
        description: 'Les sujets zéro et les sujets de la session 2026, avec des corrigés rédigés par des professeurs.',
        url: 'https://www.apmep.fr/Epreuve-anticipee-2026',
      },
    ],
  },
  {
    classe: 'terminale',
    titre: 'Terminale — épreuve de spécialité mathématiques',
    intro:
      'Les annales du bac de spécialité depuis la réforme de 2021, classées par année et par centre d’examen.',
    liens: [
      {
        titre: 'Annales de spécialité depuis 2021',
        source: 'APMEP',
        description: 'Tous les sujets de spécialité mathématiques, avec corrigés, de 2021 à aujourd’hui.',
        url: 'https://www.apmep.fr/Annales-Terminale-Generale#Enseignement-de-specialite-depuis-2021',
      },
      {
        titre: 'Session 2026',
        source: 'APMEP',
        description: 'Sujets et corrigés de la dernière session.',
        url: 'https://www.apmep.fr/Annee-2026',
      },
      {
        titre: 'Session 2025',
        source: 'APMEP',
        description: 'Sujets et corrigés de la session 2025.',
        url: 'https://www.apmep.fr/Annee-2025',
      },
      {
        titre: 'Les épreuves terminales du baccalauréat général',
        source: 'Éduscol',
        description: 'Définition officielle des épreuves de spécialité et textes de référence.',
        url: 'https://eduscol.education.gouv.fr/5706/les-epreuves-terminales-du-baccalaureat-general',
      },
    ],
  },
];
