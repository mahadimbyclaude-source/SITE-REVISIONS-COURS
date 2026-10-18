---
titre: Résoudre des inéquations
type: application
notion: Inéquations avec exponentielle
difficulte: Facile
ordre: 4

enonce: |
  Résoudre dans $\R$ les inéquations suivantes.

  1. $\mathrm{e}^{3x} \geq \mathrm{e}^{x + 4}$
  2. $\mathrm{e}^{-x + 1} < 1$
  3. $(x - 3)\mathrm{e}^{x} > 0$

indices:
  - |
    Piste générale : la fonction exponentielle est strictement croissante, donc $\mathrm{e}^a \leq \mathrm{e}^b$ équivaut à $a \leq b$ (le sens de l’inégalité ne change pas).
  - |
    Plus précis : $1 = \mathrm{e}^{0}$. Pour la 3, l’exponentielle est strictement positive donc le signe du produit est celui de $x - 3$.

correction: |
  **1.** $3x \geq x + 4$ équivaut à $2x \geq 4$, soit $x \geq 2$. Solutions : $\interfo{2}{+\infty}$.

  **2.** $\mathrm{e}^{-x + 1} < \mathrm{e}^{0}$ équivaut à $-x + 1 < 0$, soit $x > 1$. Solutions : $\interoo{1}{+\infty}$.

  **3.** Comme $\mathrm{e}^{x} > 0$, le produit a le signe de $x - 3$ : il est strictement positif pour $x > 3$. Solutions : $\interoo{3}{+\infty}$.
---
