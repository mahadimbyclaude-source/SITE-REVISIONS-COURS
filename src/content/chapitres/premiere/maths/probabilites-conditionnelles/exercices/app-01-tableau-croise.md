---
titre: Probabilités à partir d’un tableau
type: application
notion: Probabilités conditionnelles (tableau)
difficulte: Facile
ordre: 1

enonce: |
  Dans un lycée de $400$ élèves, on a relevé le sexe et le régime (demi-pensionnaire ou externe) :

  | | Demi-pensionnaire | Externe | Total |
  | --- | --- | --- | --- |
  | Filles | $150$ | $90$ | $240$ |
  | Garçons | $70$ | $90$ | $160$ |
  | Total | $220$ | $180$ | $400$ |

  On choisit un élève au hasard. On note $F$ « c’est une fille » et $D$ « il est demi-pensionnaire ».

  1. Calculer $P(F)$, $P(D)$ et $P(F \cap D)$.
  2. Calculer $P_F(D)$ puis $P_D(F)$. Interpréter chaque résultat par une phrase.

indices:
  - |
    Piste générale : $P(F \cap D)$ se lit sur la case « filles demi-pensionnaires ».
  - |
    Plus précis : $P_F(D) = \dfrac{P(F \cap D)}{P(F)}$ revient à diviser les effectifs : parmi les filles, combien sont demi-pensionnaires.

correction: |
  L'élève est choisi au hasard parmi $400$ : on est dans une situation d'équiprobabilité, donc la probabilité d'un événement est l'effectif correspondant divisé par $400$.

  **1.** Il y a $240$ filles, $220$ demi-pensionnaires et $150$ filles demi-pensionnaires. Donc

  $$
  P(F) = \frac{240}{400} = \frac{3}{5}, \qquad P(D) = \frac{220}{400} = \frac{11}{20}, \qquad P(F \cap D) = \frac{150}{400} = \frac{3}{8}.
  $$

  **2.** Par définition de la probabilité conditionnelle :

  $$
  P_F(D) = \frac{P(F \cap D)}{P(F)} = \frac{150}{240} = \frac{5}{8}, \qquad P_D(F) = \frac{P(F \cap D)}{P(D)} = \frac{150}{220} = \frac{15}{22}.
  $$

  *Interprétation.* $P_F(D) = \dfrac{5}{8}$ : parmi les filles, $\dfrac{5}{8}$ sont demi-pensionnaires. $P_D(F) = \dfrac{15}{22}$ : parmi les demi-pensionnaires, $\dfrac{15}{22}$ sont des filles. Les deux résultats sont différents : en général, $P_F(D) \neq P_D(F)$.
---
