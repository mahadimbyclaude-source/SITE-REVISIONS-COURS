---
titre: Écrire l’équation d’une tangente
type: application
notion: Équation d’une tangente
difficulte: Facile
ordre: 2
enonce: |
  Soit $f$ la fonction définie sur $\R$ par $f(x) = x^3 - 2x$, et $\mathcal{C}_f$ sa courbe représentative.

  1. Déterminer une équation de la tangente à $\mathcal{C}_f$ au point d’abscisse $1$.
  2. Même question au point d’abscisse $0$.
indices:
  - |
    Il te faut deux nombres : l’ordonnée du point, $f(a)$, et le coefficient directeur de la tangente, $f'(a)$.
  - |
    $f'(x) = 3x^2 - 2$. Remplace ensuite dans $y = f'(a)(x - a) + f(a)$.
correction: |
  $f$ est dérivable sur $\R$ et $f'(x) = 3x^2 - 2$.

  **1.** $f(1) = 1 - 2 = -1$ et $f'(1) = 3 - 2 = 1$.

  $$
  y = 1 \times (x - 1) + (-1) \iff y = x - 2.
  $$

  **2.** $f(0) = 0$ et $f'(0) = -2$, donc la tangente a pour équation $y = -2(x - 0) + 0$, soit $y = -2x$.
---
