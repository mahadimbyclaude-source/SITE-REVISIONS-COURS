---
titre: Démontrer une inégalité
type: application
notion: Inégalité par étude de fonction
difficulte: Moyen
ordre: 10

enonce: |
  1. Soit $f(x) = x + \dfrac{1}{x}$ sur $\interoo{0}{+\infty}$. Dresser le tableau de variations de $f$ et en déduire que, pour tout $x > 0$, on a $x + \dfrac{1}{x} \geq 2$.
  2. Soit $g(x) = x^3 - 3x + 2$ sur $\interfo{0}{+\infty}$. Étudier les variations de $g$ et en déduire que, pour tout $x \geq 0$, on a $x^3 \geq 3x - 2$.

indices:
  - |
    Piste générale : pour montrer $h(x) \geq 0$ sur un intervalle, on étudie les variations de $h$ et on cherche son minimum.
  - |
    Plus précis : $f'(x) = \dfrac{x^2 - 1}{x^2}$ et $g'(x) = 3(x - 1)(x + 1)$. Dans les deux cas, le minimum est atteint en $x = 1$.

correction: |
  Pour démontrer une inégalité du type $h(x) \geq m$ sur un intervalle, on dresse le tableau de variations de $h$ et on détermine son minimum.

  **1.** La fonction $f$ est dérivable sur $\interoo{0}{+\infty}$ et

  $$
  f'(x) = 1 - \frac{1}{x^2} = \frac{x^2 - 1}{x^2} = \frac{(x - 1)(x + 1)}{x^2}.
  $$

  Sur $\interoo{0}{+\infty}$, $x + 1 > 0$ et $x^2 > 0$, donc $f'(x)$ a le signe de $x - 1$. La fonction $f$ est décroissante sur $\interof{0}{1}$ puis croissante sur $\interfo{1}{+\infty}$, avec $f(1) = 1 + 1 = 2$.

  $$
  \begin{array}{c|ccccc}
  x & 0 & & 1 & & +\infty \\ \hline
  f'(x) & & - & 0 & + & \\ \hline
  f & & \searrow & 2 & \nearrow &
  \end{array}
  $$

  Le minimum de $f$ est $2$, donc pour tout $x > 0$, $x + \dfrac{1}{x} \geq 2$.

  **2.** La fonction $g$ est dérivable sur $\interfo{0}{+\infty}$ et $g'(x) = 3x^2 - 3 = 3(x - 1)(x + 1)$. Sur $\interfo{0}{+\infty}$, $x + 1 > 0$, donc $g'(x)$ a le signe de $x - 1$. La fonction $g$ est décroissante sur $\interff{0}{1}$ puis croissante sur $\interfo{1}{+\infty}$. Son minimum est $g(1) = 1 - 3 + 2 = 0$.

  Ainsi $g(x) \geq 0$ pour tout $x \geq 0$, c'est-à-dire $x^3 - 3x + 2 \geq 0$, soit

  $$
  x^3 \geq 3x - 2.
  $$
---
