---
titre: Un maximum avec exponentielle décroissante
type: application
notion: Tableau de variations
difficulte: Moyen
ordre: 6

enonce: |
  Soit $f(x) = x\,\mathrm{e}^{-x}$ définie sur $\R$.

  1. Montrer que $f'(x) = (1 - x)\,\mathrm{e}^{-x}$.
  2. Dresser le tableau de variations de $f$.
  3. Donner le maximum de $f$ sous forme exacte.

indices:
  - |
    Piste générale : $u(x) = x$ et $v(x) = \mathrm{e}^{-x}$, avec $v'(x) = -\mathrm{e}^{-x}$.
  - |
    Plus précis : $f'(x) = \mathrm{e}^{-x} - x\,\mathrm{e}^{-x}$. Factorise par $\mathrm{e}^{-x}$.

correction: |
  **1.** $f'(x) = 1 \times \mathrm{e}^{-x} + x \times \left(-\mathrm{e}^{-x}\right) = (1 - x)\,\mathrm{e}^{-x}$.

  **2.** Comme $\mathrm{e}^{-x} > 0$, $f'(x)$ a le signe de $1 - x$. On a $f(1) = \mathrm{e}^{-1} = \dfrac{1}{\mathrm{e}}$.

  $$
  \begin{array}{c|ccccc}
  x & -\infty & & 1 & & +\infty \\ \hline
  f'(x) & & + & 0 & - & \\ \hline
  f & & \nearrow & \frac{1}{\mathrm{e}} & \searrow &
  \end{array}
  $$

  **3.** Le maximum de $f$ est $f(1) = \dfrac{1}{\mathrm{e}}$ (environ $0{,}37$).
---
