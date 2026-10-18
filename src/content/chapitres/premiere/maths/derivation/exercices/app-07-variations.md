---
titre: Variations d’une fonction polynôme
type: application
notion: Dérivée et variations
difficulte: Moyen
ordre: 7
enonce: |
  Soit $f$ la fonction définie sur $\R$ par $f(x) = x^3 - 3x + 1$.

  1. Calculer $f'(x)$ et étudier son signe.
  2. Dresser le tableau de variations de $f$ en précisant les extremums locaux.
indices:
  - |
    Le sens de variation de $f$ se lit sur le signe de $f'$. Factorise $f'(x)$ pour étudier son signe.
  - |
    $f'(x) = 3x^2 - 3 = 3(x^2 - 1) = 3(x - 1)(x + 1)$ : c’est un trinôme positif à l’extérieur de ses racines.
correction: |
  **1.** $f'(x) = 3x^2 - 3 = 3(x - 1)(x + 1)$.

  C’est un trinôme de racines $-1$ et $1$ et de coefficient $3 > 0$ : il est positif à l’extérieur des racines, négatif entre elles.

  **2.** $f(-1) = -1 + 3 + 1 = 3$ et $f(1) = 1 - 3 + 1 = -1$.

  $$
  \begin{array}{|c|ccccccc|}
  \hline
  x & -\infty & & -1 & & 1 & & +\infty \\
  \hline
  f'(x) & & + & 0 & - & 0 & + & \\
  \hline
   & & & 3 & & & & \\
  f & & \nearrow & & \searrow & & \nearrow & \\
   & & & & & -1 & & \\
  \hline
  \end{array}
  $$

  $f$ admet un maximum local égal à $3$ en $x = -1$ et un minimum local égal à $-1$ en $x = 1$.
---
