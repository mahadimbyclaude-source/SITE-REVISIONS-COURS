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
  **1.** $P(F) = \dfrac{240}{400} = \dfrac{3}{5}$, $P(D) = \dfrac{220}{400} = \dfrac{11}{20}$ et $P(F \cap D) = \dfrac{150}{400} = \dfrac{3}{8}$.

  **2.** $P_F(D) = \dfrac{P(F \cap D)}{P(F)} = \dfrac{150}{240} = \dfrac{5}{8}$ : parmi les filles, $\dfrac{5}{8}$ sont demi-pensionnaires.

  $P_D(F) = \dfrac{P(F \cap D)}{P(D)} = \dfrac{150}{220} = \dfrac{15}{22}$ : parmi les demi-pensionnaires, $\dfrac{15}{22}$ sont des filles.

  Les deux résultats sont différents : $P_F(D) \neq P_D(F)$.
---
