---
titre: Tirages sans remise
type: application
notion: Arbre sans remise
difficulte: Moyen
ordre: 8

enonce: |
  Une urne contient $5$ boules rouges et $3$ boules vertes. On tire successivement et **sans remise** deux boules. On note $R_1$ « la première est rouge » et $R_2$ « la seconde est rouge ».

  1. Construire l’arbre pondéré.
  2. Calculer la probabilité de tirer deux boules rouges.
  3. Calculer $P(R_2)$.
  4. Calculer la probabilité de tirer deux boules de la même couleur.

indices:
  - |
    Piste générale : après un premier tirage sans remise, l’urne contient $7$ boules.
  - |
    Plus précis : $P_{R_1}(R_2) = \dfrac{4}{7}$ et $P_{\overline{R_1}}(R_2) = \dfrac{5}{7}$.

correction: |
  **1.** $P(R_1) = \dfrac{5}{8}$ et $P(\overline{R_1}) = \dfrac{3}{8}$. Après une rouge, l’urne contient $4$ rouges et $3$ vertes : $P_{R_1}(R_2) = \dfrac{4}{7}$ et $P_{R_1}(\overline{R_2}) = \dfrac{3}{7}$. Après une verte, l’urne contient $5$ rouges et $2$ vertes : $P_{\overline{R_1}}(R_2) = \dfrac{5}{7}$ et $P_{\overline{R_1}}(\overline{R_2}) = \dfrac{2}{7}$.

  **2.** $P(R_1 \cap R_2) = \dfrac{5}{8} \times \dfrac{4}{7} = \dfrac{20}{56} = \dfrac{5}{14}$.

  **3.** Par les probabilités totales :

  $$
  P(R_2) = \frac{5}{8} \times \frac{4}{7} + \frac{3}{8} \times \frac{5}{7} = \frac{20}{56} + \frac{15}{56} = \frac{35}{56} = \frac{5}{8}.
  $$

  **4.** Deux boules de même couleur : deux rouges ou deux vertes. $P(\overline{R_1} \cap \overline{R_2}) = \dfrac{3}{8} \times \dfrac{2}{7} = \dfrac{6}{56}$. Ces deux événements sont incompatibles, donc la probabilité cherchée vaut $\dfrac{20}{56} + \dfrac{6}{56} = \dfrac{26}{56} = \dfrac{13}{28}$.
---
