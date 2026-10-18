---
titre: Dérivée et variations d’un trinôme
type: application
notion: Variations par la dérivée
difficulte: Facile
ordre: 1

enonce: |
  Soit $f$ la fonction définie sur $\R$ par $f(x) = -2x^2 + 8x - 3$.

  1. Calculer $f'(x)$.
  2. Étudier le signe de $f'(x)$.
  3. Dresser le tableau de variations de $f$.
  4. Quel est le maximum de $f$ ?

indices:
  - |
    Piste générale : $f'(x)$ est une fonction affine, son signe change en sa racine.
  - |
    Plus précis : $f'(x) = -4x + 8$ s’annule en $x = 2$. Le coefficient directeur $-4$ est négatif.

correction: |
  **1.** $f'(x) = -4x + 8$.

  **2.** $-4x + 8 > 0$ équivaut à $x < 2$. Donc $f'(x) > 0$ sur $\interof{-\infty}{2}$, $f'(2) = 0$ et $f'(x) < 0$ sur $\interoo{2}{+\infty}$.

  **3.** On calcule $f(2) = -8 + 16 - 3 = 5$.

  $$
  \begin{array}{c|ccccc}
  x & -\infty & & 2 & & +\infty \\ \hline
  f'(x) & & + & 0 & - & \\ \hline
  f & & \nearrow & 5 & \searrow &
  \end{array}
  $$

  **4.** Le maximum de $f$ est $5$, atteint en $x = 2$.
---
