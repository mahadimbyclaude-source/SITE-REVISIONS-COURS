---
titre: Extremums d’une fonction polynôme
type: application
notion: Extremums locaux
difficulte: Moyen
ordre: 3

enonce: |
  Soit $f(x) = 2x^3 - 9x^2 + 12x + 1$ sur $\R$.

  1. Montrer que $f'(x) = 6(x - 1)(x - 2)$.
  2. Dresser le tableau de variations de $f$.
  3. Donner les extremums locaux de $f$ et les points où ils sont atteints.

indices:
  - |
    Piste générale : calcule $f'(x) = 6x^2 - 18x + 12$ puis factorise par $6$.
  - |
    Plus précis : $x^2 - 3x + 2 = (x - 1)(x - 2)$. Le signe de $f'$ est celui d’un trinôme de coefficient dominant positif.

correction: |
  **1.** La fonction $f$ est dérivable sur $\R$ et $f'(x) = 6x^2 - 18x + 12 = 6(x^2 - 3x + 2)$. Or $x^2 - 3x + 2$ a pour racines $1$ et $2$, donc $x^2 - 3x + 2 = (x - 1)(x - 2)$ et

  $$
  f'(x) = 6(x - 1)(x - 2).
  $$

  **2.** Le trinôme $f'$ a un coefficient dominant positif : il est positif à l'extérieur des racines $1$ et $2$ et négatif entre elles. On calcule $f(1) = 2 - 9 + 12 + 1 = 6$ et $f(2) = 16 - 36 + 24 + 1 = 5$.

  $$
  \begin{array}{c|ccccccc}
  x & -\infty & & 1 & & 2 & & +\infty \\ \hline
  f'(x) & & + & 0 & - & 0 & + & \\ \hline
  f & & \nearrow & 6 & \searrow & 5 & \nearrow &
  \end{array}
  $$

  **3.** La dérivée s'annule en changeant de signe en $1$ (de $+$ à $-$) et en $2$ (de $-$ à $+$). Donc $f$ admet un **maximum local** égal à $6$ atteint en $x = 1$, et un **minimum local** égal à $5$ atteint en $x = 2$.
---
