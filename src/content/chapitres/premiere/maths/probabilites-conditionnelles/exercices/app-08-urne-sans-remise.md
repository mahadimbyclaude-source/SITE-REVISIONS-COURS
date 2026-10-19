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
  **1.** *Arbre pondéré.* Au premier tirage, l'urne contient $8$ boules : $P(R_1) = \dfrac{5}{8}$ et $P(\overline{R_1}) = \dfrac{3}{8}$. Le tirage est sans remise, donc l'urne contient $7$ boules au second tirage :

  - après une boule rouge, il reste $4$ rouges et $3$ vertes : $P_{R_1}(R_2) = \dfrac{4}{7}$ et $P_{R_1}(\overline{R_2}) = \dfrac{3}{7}$ ;
  - après une boule verte, il reste $5$ rouges et $2$ vertes : $P_{\overline{R_1}}(R_2) = \dfrac{5}{7}$ et $P_{\overline{R_1}}(\overline{R_2}) = \dfrac{2}{7}$.

  **2.** Tirer deux boules rouges correspond à l'événement $R_1 \cap R_2$ :

  $$
  P(R_1 \cap R_2) = P(R_1) \times P_{R_1}(R_2) = \frac{5}{8} \times \frac{4}{7} = \frac{20}{56} = \frac{5}{14}.
  $$

  **3.** Les événements $R_1$ et $\overline{R_1}$ forment une partition, donc d'après la formule des probabilités totales :

  $$
  P(R_2) = P(R_1) \, P_{R_1}(R_2) + P(\overline{R_1}) \, P_{\overline{R_1}}(R_2) = \frac{5}{8} \times \frac{4}{7} + \frac{3}{8} \times \frac{5}{7} = \frac{20}{56} + \frac{15}{56} = \frac{35}{56} = \frac{5}{8}.
  $$

  **4.** Deux boules de même couleur : soit deux rouges, soit deux vertes. On a $P(R_1 \cap R_2) = \dfrac{20}{56}$ et

  $$
  P\left(\overline{R_1} \cap \overline{R_2}\right) = \frac{3}{8} \times \frac{2}{7} = \frac{6}{56}.
  $$

  Ces deux événements sont incompatibles, donc la probabilité cherchée vaut $\dfrac{20}{56} + \dfrac{6}{56} = \dfrac{26}{56} = \dfrac{13}{28}$.
---
