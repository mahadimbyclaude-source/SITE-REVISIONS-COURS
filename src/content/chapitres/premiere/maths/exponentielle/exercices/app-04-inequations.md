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
  La fonction exponentielle est strictement croissante sur $\R$ : $\mathrm{e}^{a} \leq \mathrm{e}^{b}$ équivaut à $a \leq b$, et le sens de l'inégalité est conservé.

  **1.** $\mathrm{e}^{3x} \geq \mathrm{e}^{x+4}$ équivaut à $3x \geq x + 4$, soit $2x \geq 4$, c'est-à-dire $x \geq 2$.

  $S = \interfo{2}{+\infty}$.

  **2.** On écrit $1 = \mathrm{e}^{0}$ : l'inéquation devient $\mathrm{e}^{-x+1} < \mathrm{e}^{0}$, qui équivaut à $-x + 1 < 0$, soit $x > 1$.

  $S = \interoo{1}{+\infty}$.

  **3.** Pour tout réel $x$, $\mathrm{e}^{x} > 0$, donc le produit $(x - 3)\mathrm{e}^{x}$ a le même signe que $x - 3$. Il est strictement positif si et seulement si $x > 3$.

  $S = \interoo{3}{+\infty}$.
---
