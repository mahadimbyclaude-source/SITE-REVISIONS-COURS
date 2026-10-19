---
titre: Le dé choisit l’urne
type: controle
difficulte: Difficile
duree_estimee: 35
chapitres_mobilises:
  - probabilites-conditionnelles
ordre: 3

enonce: |
  On dispose de deux urnes. L’urne $U_1$ contient $3$ boules rouges et $2$ boules blanches. L’urne $U_2$ contient $1$ boule rouge et $4$ boules blanches. On lance un dé équilibré à $6$ faces : si on obtient $6$, on choisit l’urne $U_1$, sinon on choisit l’urne $U_2$. On tire ensuite une boule dans l’urne choisie. On note $R$ « la boule tirée est rouge ».

  1. Construire l’arbre pondéré.
  2. Calculer $P(R)$.
  3. La boule tirée est rouge. Quelle est la probabilité qu’elle provienne de $U_1$ ?
  4. On remet la boule dans son urne puis on tire une seconde boule dans la **même** urne. Calculer la probabilité d’obtenir deux boules rouges.

indices:
  - |
    Piste générale : $P(U_1) = \dfrac{1}{6}$, $P_{U_1}(R) = \dfrac{3}{5}$ et $P_{U_2}(R) = \dfrac{1}{5}$.
  - |
    Pour la question 4 : une fois l’urne choisie, les deux tirages avec remise sont indépendants. Dans $U_1$, la probabilité de deux rouges est $\left(\dfrac{3}{5}\right)^2$.

correction: |
  **1.** *Arbre pondéré.* Le dé est équilibré : $P(U_1) = \dfrac{1}{6}$ (on obtient $6$) et $P(U_2) = \dfrac{5}{6}$. Deuxième niveau :

  - après $U_1$ (3 rouges, 2 blanches) : $R$ avec $\dfrac{3}{5}$ et $\overline{R}$ avec $\dfrac{2}{5}$ ;
  - après $U_2$ (1 rouge, 4 blanches) : $R$ avec $\dfrac{1}{5}$ et $\overline{R}$ avec $\dfrac{4}{5}$.

  **2.** Les événements $U_1$ et $U_2$ forment une partition de l'univers. D'après la formule des probabilités totales,

  $$
  P(R) = P(U_1) \times P_{U_1}(R) + P(U_2) \times P_{U_2}(R) = \frac{1}{6} \times \frac{3}{5} + \frac{5}{6} \times \frac{1}{5} = \frac{3}{30} + \frac{5}{30} = \frac{8}{30} = \frac{4}{15}.
  $$

  **3.** On cherche $P_R(U_1)$ :

  $$
  P_R(U_1) = \frac{P(U_1 \cap R)}{P(R)} = \frac{\frac{3}{30}}{\frac{8}{30}} = \frac{3}{8}.
  $$

  **4.** On remet la boule dans son urne : une fois l'urne choisie, les deux tirages sont indépendants. Soit $RR$ l'événement « deux boules rouges ». D'après les probabilités totales,

  $$
  P(RR) = P(U_1) \times \left(\frac{3}{5}\right)^2 + P(U_2) \times \left(\frac{1}{5}\right)^2 = \frac{1}{6} \times \frac{9}{25} + \frac{5}{6} \times \frac{1}{25} = \frac{9}{150} + \frac{5}{150} = \frac{14}{150} = \frac{7}{75}.
  $$
---
