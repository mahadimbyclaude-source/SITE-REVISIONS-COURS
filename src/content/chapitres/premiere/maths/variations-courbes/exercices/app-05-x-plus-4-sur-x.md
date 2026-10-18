---
titre: Un minimum sur un intervalle ouvert
type: application
notion: Quotient, minimum
difficulte: Moyen
ordre: 5

enonce: |
  Soit $f(x) = x + \dfrac{4}{x}$ définie sur $\interoo{0}{+\infty}$.

  1. Montrer que $f'(x) = \dfrac{x^2 - 4}{x^2}$.
  2. Dresser le tableau de variations de $f$.
  3. En déduire que, pour tout $x > 0$, on a $x + \dfrac{4}{x} \geq 4$.

indices:
  - |
    Piste générale : la dérivée de $\dfrac{4}{x}$ est $-\dfrac{4}{x^2}$. Mets ensuite tout au même dénominateur.
  - |
    Plus précis : sur $\interoo{0}{+\infty}$, $x^2 > 0$ et $x + 2 > 0$. Le signe de $f'(x)$ est celui de $x - 2$.

correction: |
  **1.** $f'(x) = 1 - \dfrac{4}{x^2} = \dfrac{x^2 - 4}{x^2}$.

  **2.** $x^2 - 4 = (x - 2)(x + 2)$ et, sur $\interoo{0}{+\infty}$, $x + 2 > 0$ et $x^2 > 0$. Le signe de $f'(x)$ est donc celui de $x - 2$. On a $f(2) = 2 + 2 = 4$.

  $$
  \begin{array}{c|ccccc}
  x & 0 & & 2 & & +\infty \\ \hline
  f'(x) & & - & 0 & + & \\ \hline
  f & & \searrow & 4 & \nearrow &
  \end{array}
  $$

  **3.** Le minimum de $f$ sur $\interoo{0}{+\infty}$ est $f(2) = 4$. Donc $f(x) \geq 4$ pour tout $x > 0$.
---
