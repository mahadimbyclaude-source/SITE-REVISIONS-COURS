---
titre: Tangentes horizontales
type: application
notion: Tangente horizontale
difficulte: Moyen
ordre: 9

enonce: |
  Soit $f(x) = x^3 - 6x^2 + 9x$ définie sur $\R$ et $\mathcal{C}$ sa courbe représentative.

  1. Calculer $f'(x)$ et le factoriser.
  2. Déterminer les points de $\mathcal{C}$ où la tangente est horizontale.
  3. Donner l’équation de chacune de ces tangentes.

indices:
  - |
    Piste générale : une tangente horizontale a un coefficient directeur nul, donc on résout $f'(x) = 0$.
  - |
    Plus précis : $f'(x) = 3x^2 - 12x + 9 = 3(x^2 - 4x + 3)$. Cherche les racines de $x^2 - 4x + 3$.

correction: |
  **1.** $f'(x) = 3x^2 - 12x + 9 = 3(x - 1)(x - 3)$.

  **2.** $f'(x) = 0$ équivaut à $x = 1$ ou $x = 3$. On a $f(1) = 1 - 6 + 9 = 4$ et $f(3) = 27 - 54 + 27 = 0$. Les points sont $A(1\,;\,4)$ et $B(3\,;\,0)$.

  **3.** La tangente en un point d’abscisse $a$ où $f'(a) = 0$ a pour équation $y = f(a)$ : $y = 4$ en $A$ et $y = 0$ en $B$.
---
