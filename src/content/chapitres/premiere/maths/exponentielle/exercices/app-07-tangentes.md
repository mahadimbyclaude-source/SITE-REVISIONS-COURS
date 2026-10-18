---
titre: Équations de tangentes
type: application
notion: Tangente
difficulte: Moyen
ordre: 7

enonce: |
  1. Soit $f(x) = \mathrm{e}^{2x}$. Déterminer l’équation de la tangente à la courbe de $f$ au point d’abscisse $1$.
  2. Soit $g(x) = (x + 1)\mathrm{e}^{x}$. Déterminer l’équation de la tangente à la courbe de $g$ au point d’abscisse $0$.

indices:
  - |
    Piste générale : la tangente en $a$ a pour équation $y = f'(a)(x - a) + f(a)$.
  - |
    Plus précis : $f'(x) = 2\mathrm{e}^{2x}$ et $g'(x) = (x + 2)\mathrm{e}^{x}$. Pense à $\mathrm{e}^{0} = 1$.

correction: |
  **1.** $f(1) = \mathrm{e}^{2}$ et $f'(x) = 2\mathrm{e}^{2x}$ donc $f'(1) = 2\mathrm{e}^{2}$. La tangente a pour équation

  $$
  y = 2\mathrm{e}^{2}(x - 1) + \mathrm{e}^{2} = 2\mathrm{e}^{2}x - \mathrm{e}^{2}.
  $$

  **2.** $g(0) = 1 \times \mathrm{e}^{0} = 1$ et $g'(x) = \mathrm{e}^{x} + (x + 1)\mathrm{e}^{x} = (x + 2)\mathrm{e}^{x}$ donc $g'(0) = 2$. La tangente a pour équation $y = 2(x - 0) + 1 = 2x + 1$.
---
