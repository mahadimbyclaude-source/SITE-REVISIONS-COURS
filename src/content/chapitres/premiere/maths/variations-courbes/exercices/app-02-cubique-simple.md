---
titre: Étudier une fonction de degré 3
type: application
notion: Tableau de variations
difficulte: Facile
ordre: 2

enonce: |
  Soit $f(x) = x^3 - 3x^2$ définie sur $\R$.

  1. Montrer que $f'(x) = 3x(x - 2)$.
  2. Dresser le tableau de signes de $f'(x)$.
  3. Dresser le tableau de variations de $f$ en précisant les valeurs de $f$ en $0$ et en $2$.

indices:
  - |
    Piste générale : dérive terme à terme puis factorise par $3x$.
  - |
    Plus précis : $f'(x)$ est un trinôme de coefficient dominant positif, donc positif à l’extérieur des racines $0$ et $2$.

correction: |
  **1.** $f'(x) = 3x^2 - 6x = 3x(x - 2)$.

  **2.** Les racines sont $0$ et $2$ et le coefficient de $x^2$ est positif : $f'(x) > 0$ pour $x < 0$ ou $x > 2$, et $f'(x) < 0$ pour $0 < x < 2$.

  **3.** $f(0) = 0$ et $f(2) = 8 - 12 = -4$.

  $$
  \begin{array}{c|ccccccc}
  x & -\infty & & 0 & & 2 & & +\infty \\ \hline
  f'(x) & & + & 0 & - & 0 & + & \\ \hline
  f & & \nearrow & 0 & \searrow & -4 & \nearrow &
  \end{array}
  $$
---
