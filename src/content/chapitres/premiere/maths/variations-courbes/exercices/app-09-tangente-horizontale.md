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
  **1.** La fonction $f$ est dérivable sur $\R$ et $f'(x) = 3x^2 - 12x + 9 = 3(x^2 - 4x + 3)$. Le trinôme $x^2 - 4x + 3$ a pour racines $1$ et $3$, donc

  $$
  f'(x) = 3(x - 1)(x - 3).
  $$

  **2.** La tangente à $\mathcal{C}$ au point d'abscisse $a$ est horizontale si et seulement si son coefficient directeur $f'(a)$ est nul. On résout $f'(x) = 0$ : $x = 1$ ou $x = 3$. On calcule $f(1) = 1 - 6 + 9 = 4$ et $f(3) = 27 - 54 + 27 = 0$.

  Les points où la tangente est horizontale sont $A(1\,;\,4)$ et $B(3\,;\,0)$.

  **3.** L'équation de la tangente au point d'abscisse $a$ est $y = f'(a)(x - a) + f(a)$. Avec $f'(a) = 0$, elle se réduit à $y = f(a)$ :

  - en $A$ : $y = 4$ ;
  - en $B$ : $y = 0$ (l'axe des abscisses).
---
