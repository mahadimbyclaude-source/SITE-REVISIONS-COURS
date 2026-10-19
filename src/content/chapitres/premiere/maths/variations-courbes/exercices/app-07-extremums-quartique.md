---
titre: Une fonction de degré 4
type: application
notion: Extremums, signe de la dérivée
difficulte: Moyen
ordre: 7

enonce: |
  Soit $f(x) = x^4 - 2x^2$ définie sur $\R$.

  1. Montrer que $f'(x) = 4x(x - 1)(x + 1)$.
  2. Dresser le tableau de signes de $f'(x)$ puis le tableau de variations de $f$.
  3. Déterminer les extremums locaux de $f$.

indices:
  - |
    Piste générale : $f'(x) = 4x^3 - 4x$. Factorise par $4x$ puis reconnais une identité remarquable.
  - |
    Plus précis : le tableau de signes a trois facteurs ($4x$, $x - 1$, $x + 1$) et donc quatre intervalles.

correction: |
  **1.** La fonction $f$ est dérivable sur $\R$ et $f'(x) = 4x^3 - 4x = 4x(x^2 - 1)$. On reconnaît une identité remarquable : $x^2 - 1 = (x - 1)(x + 1)$, donc

  $$
  f'(x) = 4x(x - 1)(x + 1).
  $$

  **2.** Les racines de $f'$ sont $-1$, $0$ et $1$. On étudie le signe de chaque facteur sur les quatre intervalles :

  - pour $x > 1$, les trois facteurs $4x$, $x - 1$ et $x + 1$ sont positifs : $f'(x) > 0$ ;
  - pour $0 < x < 1$, seul $x - 1$ est négatif : $f'(x) < 0$ ;
  - pour $-1 < x < 0$, $4x$ et $x - 1$ sont négatifs, $x + 1$ positif : $f'(x) > 0$ ;
  - pour $x < -1$, les trois facteurs sont négatifs : $f'(x) < 0$.

  On calcule $f(-1) = 1 - 2 = -1$, $f(0) = 0$ et $f(1) = -1$.

  $$
  \begin{array}{c|ccccccccc}
  x & -\infty & & -1 & & 0 & & 1 & & +\infty \\ \hline
  f'(x) & & - & 0 & + & 0 & - & 0 & + & \\ \hline
  f & & \searrow & -1 & \nearrow & 0 & \searrow & -1 & \nearrow &
  \end{array}
  $$

  **3.** D'après le tableau, $f$ admet un **minimum local** égal à $-1$ en $x = -1$ et en $x = 1$ (c'est même le minimum global de $f$ sur $\R$), et un **maximum local** égal à $0$ en $x = 0$.
---
