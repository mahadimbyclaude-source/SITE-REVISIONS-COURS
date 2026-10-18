---
titre: Résoudre des équations
type: application
notion: Équations avec exponentielle
difficulte: Facile
ordre: 3

enonce: |
  Résoudre dans $\R$ les équations suivantes.

  1. $\mathrm{e}^{2x - 1} = \mathrm{e}^{x + 3}$
  2. $\mathrm{e}^{x^2} = \mathrm{e}^{4x - 3}$
  3. $(x - 2)\mathrm{e}^{x} = 0$
  4. $\mathrm{e}^{x} = -3$

indices:
  - |
    Piste générale : $\mathrm{e}^a = \mathrm{e}^b$ équivaut à $a = b$.
  - |
    Plus précis : pour la 2, tu obtiens un trinôme $x^2 - 4x + 3 = 0$. Pour la 3, un produit est nul si l’un des facteurs est nul, et $\mathrm{e}^{x}$ n’est jamais nul. Pour la 4, pense au signe de l’exponentielle.

correction: |
  **1.** $2x - 1 = x + 3$ donc $x = 4$. Ensemble des solutions : $\{4\}$.

  **2.** $x^2 = 4x - 3$ équivaut à $x^2 - 4x + 3 = 0$. On a $\Delta = 16 - 12 = 4$, les racines sont $\dfrac{4 - 2}{2} = 1$ et $\dfrac{4 + 2}{2} = 3$. Ensemble des solutions : $\{1\,;\,3\}$.

  **3.** $\mathrm{e}^{x} > 0$ pour tout $x$, donc le produit est nul si et seulement si $x - 2 = 0$. Solution : $\{2\}$.

  **4.** $\mathrm{e}^{x} > 0$ pour tout réel $x$, donc l’équation n’a **aucune solution**.
---
