---
titre: Combien de solutions ?
type: application
notion: 'Nombre de solutions de $f(x) = k$'
difficulte: Moyen
ordre: 8

enonce: |
  Soit $f(x) = x^3 - 3x + 1$ définie sur $\R$.

  1. Dresser le tableau de variations de $f$.
  2. Combien de solutions l’équation $f(x) = 0$ possède-t-elle ?
  3. Combien de solutions l’équation $f(x) = 3$ possède-t-elle ?
  4. Discuter, selon la valeur du réel $k$, le nombre de solutions de $f(x) = k$.

indices:
  - |
    Piste générale : $f'(x) = 3x^2 - 3 = 3(x - 1)(x + 1)$.
  - |
    Plus précis : les valeurs clés sont $f(-1) = 3$ et $f(1) = -1$. Pour la discussion, regarde à quel niveau se trouve la droite horizontale $y = k$ par rapport à $-1$ et $3$.

correction: |
  **1.** $f'(x) = 3(x - 1)(x + 1)$, positive à l’extérieur de $[-1\,;\,1]$. On a $f(-1) = -1 + 3 + 1 = 3$ et $f(1) = 1 - 3 + 1 = -1$.

  $$
  \begin{array}{c|ccccccc}
  x & -\infty & & -1 & & 1 & & +\infty \\ \hline
  f'(x) & & + & 0 & - & 0 & + & \\ \hline
  f & & \nearrow & 3 & \searrow & -1 & \nearrow &
  \end{array}
  $$

  **2.** $0$ est strictement compris entre $-1$ et $3$ : une solution sur chacun des trois intervalles de monotonie, soit **3 solutions**.

  **3.** $3$ est le maximum local, atteint en $x = -1$. Sur $\interfo{1}{+\infty}$, $f$ va de $-1$ à $+\infty$ : une solution. Il y a **2 solutions** (dont $x = -1$).

  **4.** Discussion :

  - $k < -1$ : une seule solution.
  - $k = -1$ : deux solutions.
  - $-1 < k < 3$ : trois solutions.
  - $k = 3$ : deux solutions.
  - $k > 3$ : une seule solution.
---
