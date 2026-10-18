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
  **1.** Premier niveau : $U_1$ ($\dfrac{1}{6}$) et $U_2$ ($\dfrac{5}{6}$). Après $U_1$ : $R$ ($\dfrac{3}{5}$) et $\overline{R}$ ($\dfrac{2}{5}$). Après $U_2$ : $R$ ($\dfrac{1}{5}$) et $\overline{R}$ ($\dfrac{4}{5}$).

  **2.** $U_1$ et $U_2$ forment une partition :

  $$
  P(R) = \frac{1}{6} \times \frac{3}{5} + \frac{5}{6} \times \frac{1}{5} = \frac{3}{30} + \frac{5}{30} = \frac{8}{30} = \frac{4}{15}.
  $$

  **3.** $P_R(U_1) = \dfrac{P(U_1 \cap R)}{P(R)} = \dfrac{\frac{3}{30}}{\frac{8}{30}} = \dfrac{3}{8}$.

  **4.** Sachant l’urne, les tirages avec remise sont indépendants :

  $$
  P(\text{deux rouges}) = \frac{1}{6} \times \left(\frac{3}{5}\right)^2 + \frac{5}{6} \times \left(\frac{1}{5}\right)^2 = \frac{9}{150} + \frac{5}{150} = \frac{14}{150} = \frac{7}{75}.
  $$
---
