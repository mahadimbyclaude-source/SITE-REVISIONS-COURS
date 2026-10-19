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
  **1.** L'exponentielle est strictement croissante donc $\mathrm{e}^{a} = \mathrm{e}^{b}$ équivaut à $a = b$. Ainsi $2x - 1 = x + 3$, soit $x = 4$.

  $S = \{4\}$.

  **2.** De même, $x^2 = 4x - 3$ équivaut à $x^2 - 4x + 3 = 0$. Le discriminant est $\Delta = 16 - 12 = 4 > 0$, d'où les racines $\dfrac{4 - 2}{2} = 1$ et $\dfrac{4 + 2}{2} = 3$.

  $S = \{1\,;\,3\}$.

  **3.** Un produit est nul si et seulement si l'un de ses facteurs est nul. Or $\mathrm{e}^{x} > 0$ pour tout réel $x$, donc il ne s'annule jamais. L'équation équivaut à $x - 2 = 0$.

  $S = \{2\}$.

  **4.** Pour tout réel $x$, $\mathrm{e}^{x} > 0$, donc $\mathrm{e}^{x}$ ne peut pas être égal à $-3$.

  L'équation n'a **aucune solution** : $S = \varnothing$.
---
