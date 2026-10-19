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
  **1.** La fonction $f = \dfrac{u}{v}$ est dérivable sur $\R$ car $v(x) = x^2 + 1 > 0$. Avec $u(x) = x$, $u'(x) = 1$, $v(x) = x^2 + 1$ et $v'(x) = 2x$, la formule $\left(\dfrac{u}{v}\right)' = \dfrac{u'v - uv'}{v^2}$ donne

  $$
  f'(x) = \frac{1 \times (x^2 + 1) - x \times 2x}{(x^2 + 1)^2} = \frac{1 - x^2}{(x^2 + 1)^2}.
  $$

  **2.** Le dénominateur $(x^2 + 1)^2$ est strictement positif : $f'(x)$ a le signe du numérateur $1 - x^2 = (1 - x)(1 + x)$. C'est un trinôme de coefficient dominant négatif et de racines $-1$ et $1$ : il est positif entre les racines et négatif à l'extérieur. Donc $f'(x) < 0$ pour $x < -1$ ou $x > 1$, et $f'(x) > 0$ pour $-1 < x < 1$.

  **3.** On calcule $f(-1) = \dfrac{-1}{2} = -\dfrac{1}{2}$ et $f(1) = \dfrac{1}{2}$.

  $$
  \begin{array}{c|ccccccc}
  x & -\infty & & -1 & & 1 & & +\infty \\ \hline
  f'(x) & & - & 0 & + & 0 & - & \\ \hline
  f & & \searrow & -\frac{1}{2} & \nearrow & \frac{1}{2} & \searrow &
  \end{array}
  $$
---
