---
titre: Variations d’un quotient
type: application
notion: Quotient et signe de la dérivée
difficulte: Moyen
ordre: 4

enonce: |
  Soit $f(x) = \dfrac{x}{x^2 + 1}$ définie sur $\R$.

  1. Montrer que $f'(x) = \dfrac{1 - x^2}{(x^2 + 1)^2}$.
  2. Étudier le signe de $f'(x)$.
  3. Dresser le tableau de variations de $f$.

indices:
  - |
    Piste générale : applique la formule $\left(\dfrac{u}{v}\right)' = \dfrac{u'v - uv'}{v^2}$ avec $u(x) = x$ et $v(x) = x^2 + 1$.
  - |
    Plus précis : le dénominateur $(x^2 + 1)^2$ est toujours strictement positif. Le signe vient donc de $1 - x^2 = (1 - x)(1 + x)$.

correction: |
  **1.** Avec $u(x) = x$, $u'(x) = 1$, $v(x) = x^2 + 1$ et $v'(x) = 2x$ :

  $$
  f'(x) = \frac{1 \times (x^2 + 1) - x \times 2x}{(x^2 + 1)^2} = \frac{1 - x^2}{(x^2 + 1)^2}.
  $$

  **2.** Le dénominateur est strictement positif. Le numérateur $1 - x^2$ est un trinôme de coefficient dominant négatif, de racines $-1$ et $1$ : il est positif entre les racines et négatif à l’extérieur.

  **3.** $f(-1) = -\dfrac{1}{2}$ et $f(1) = \dfrac{1}{2}$.

  $$
  \begin{array}{c|ccccccc}
  x & -\infty & & -1 & & 1 & & +\infty \\ \hline
  f'(x) & & - & 0 & + & 0 & - & \\ \hline
  f & & \searrow & -\frac{1}{2} & \nearrow & \frac{1}{2} & \searrow &
  \end{array}
  $$
---
