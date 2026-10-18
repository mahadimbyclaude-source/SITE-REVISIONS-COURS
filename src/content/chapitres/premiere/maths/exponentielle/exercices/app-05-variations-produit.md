---
titre: Variations d’un produit avec exponentielle
type: application
notion: Tableau de variations
difficulte: Moyen
ordre: 5

enonce: |
  Soit $f(x) = (x - 1)\mathrm{e}^{x}$ définie sur $\R$.

  1. Montrer que $f'(x) = x\,\mathrm{e}^{x}$.
  2. Dresser le tableau de variations de $f$.
  3. En déduire que $f(x) \geq -1$ pour tout réel $x$.

indices:
  - |
    Piste générale : dérive le produit $u(x) = x - 1$, $v(x) = \mathrm{e}^{x}$.
  - |
    Plus précis : $f'(x) = \mathrm{e}^{x} + (x - 1)\mathrm{e}^{x} = \mathrm{e}^{x}\,(1 + x - 1)$. Le signe de $f'$ est celui de $x$ car $\mathrm{e}^{x} > 0$.

correction: |
  **1.** $f'(x) = 1 \times \mathrm{e}^{x} + (x - 1) \times \mathrm{e}^{x} = \mathrm{e}^{x}(1 + x - 1) = x\,\mathrm{e}^{x}$.

  **2.** Comme $\mathrm{e}^{x} > 0$, $f'(x)$ a le signe de $x$. On a $f(0) = -1$.

  $$
  \begin{array}{c|ccccc}
  x & -\infty & & 0 & & +\infty \\ \hline
  f'(x) & & - & 0 & + & \\ \hline
  f & & \searrow & -1 & \nearrow &
  \end{array}
  $$

  **3.** Le minimum de $f$ sur $\R$ est $f(0) = -1$, donc $f(x) \geq -1$ pour tout $x$.
---
