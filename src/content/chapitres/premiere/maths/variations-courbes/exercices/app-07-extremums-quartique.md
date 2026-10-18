---
titre: Une fonction de degré 4
type: application
notion: Extremums, signe de la dérivée
difficulte: Moyen
ordre: 7

enonce: |
  Soit $f(x) = x^4 - 2x^2$ définie sur $\R$.

  1. Montrer que $f'(x) = 4x(x - 1)(x + 1)$.
  2. Dresser le tableau de signes de $f'(x)$ puis le tableau de variations de $f$.
  3. Déterminer les extremums locaux de $f$.

indices:
  - |
    Piste générale : $f'(x) = 4x^3 - 4x$. Factorise par $4x$ puis reconnais une identité remarquable.
  - |
    Plus précis : le tableau de signes a trois facteurs ($4x$, $x - 1$, $x + 1$) et donc quatre intervalles.

correction: |
  **1.** $f'(x) = 4x^3 - 4x = 4x(x^2 - 1) = 4x(x - 1)(x + 1)$.

  **2.** Racines de $f'$ : $-1$, $0$ et $1$. On calcule le signe sur chaque intervalle, par exemple pour $x > 1$ les trois facteurs sont positifs. On a $f(-1) = f(1) = -1$ et $f(0) = 0$.

  $$
  \begin{array}{c|ccccccccc}
  x & -\infty & & -1 & & 0 & & 1 & & +\infty \\ \hline
  f'(x) & & - & 0 & + & 0 & - & 0 & + & \\ \hline
  f & & \searrow & -1 & \nearrow & 0 & \searrow & -1 & \nearrow &
  \end{array}
  $$

  **3.** $f$ admet un minimum local égal à $-1$ en $x = -1$ et en $x = 1$ (c’est même le minimum global), et un maximum local égal à $0$ en $x = 0$.
---
