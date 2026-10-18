---
titre: Sommet et tableau de variations
type: application
notion: Forme canonique
difficulte: Facile
ordre: 2
enonce: |
  On considère la fonction $h$ définie sur $\R$ par $h(x) = -x^2 + 4x - 1$.

  1. Calculer les coordonnées du sommet $S$ de la parabole représentant $h$.
  2. Dresser le tableau de variations de $h$.
  3. En déduire que, pour tout réel $x$, $h(x) \leq 3$.
indices:
  - |
    Le sommet a pour coordonnées $(\alpha\,;\,\beta)$. Le signe de $a$ indique si la parabole est tournée vers le haut ou vers le bas.
  - |
    $\alpha = -\dfrac{b}{2a}$ avec $a = -1$ et $b = 4$. Comme $a < 0$, $h$ est d’abord croissante puis décroissante : $\beta$ est un maximum.
correction: |
  **1.** $a = -1$, $b = 4$, donc $\alpha = -\dfrac{4}{2 \times (-1)} = 2$ et $\beta = h(2) = -4 + 8 - 1 = 3$.

  Le sommet est $S(2\,;\,3)$, et $h(x) = -(x - 2)^2 + 3$.

  **2.** Comme $a = -1 < 0$, la parabole est tournée vers le bas :

  $$
  \begin{array}{|c|ccccc|}
  \hline
  x & -\infty & & 2 & & +\infty \\
  \hline
   & & & 3 & & \\
  h & & \nearrow & & \searrow & \\
   & & & & & \\
  \hline
  \end{array}
  $$

  **3.** D’après le tableau, $h$ admet un maximum égal à $3$, atteint en $x = 2$. Donc $h(x) \leq 3$ pour tout réel $x$.

  Autre justification : $h(x) = 3 - (x - 2)^2$ et un carré est toujours positif, donc $h(x) \leq 3$.
---
