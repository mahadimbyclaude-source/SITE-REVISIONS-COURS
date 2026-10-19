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
  **1.** La fonction $f$ est dérivable sur $\R$ et $f'(x) = 3x^2 - 3 = 3(x - 1)(x + 1)$. C'est un trinôme de coefficient dominant positif : $f'(x) > 0$ à l'extérieur de $[-1\,;\,1]$ et $f'(x) < 0$ entre. On calcule $f(-1) = -1 + 3 + 1 = 3$ et $f(1) = 1 - 3 + 1 = -1$.

  $$
  \begin{array}{c|ccccccc}
  x & -\infty & & -1 & & 1 & & +\infty \\ \hline
  f'(x) & & + & 0 & - & 0 & + & \\ \hline
  f & & \nearrow & 3 & \searrow & -1 & \nearrow &
  \end{array}
  $$

  **2.** Sur chacun des trois intervalles, $f$ est continue et strictement monotone. Le réel $0$ est strictement compris entre $-1$ et $3$ : il est atteint une fois sur $\interof{-\infty}{-1}$ (où $f$ va de $-\infty$ à $3$), une fois sur $\interff{-1}{1}$ (où $f$ va de $3$ à $-1$) et une fois sur $\interfo{1}{+\infty}$ (où $f$ va de $-1$ à $+\infty$).

  L'équation $f(x) = 0$ possède **3 solutions**.

  **3.** Le réel $3$ est le maximum local, atteint en $x = -1$ : c'est une solution. Sur $\interff{-1}{1}$, $f$ est inférieure ou égale à $3$ avec égalité seulement en $-1$. Sur $\interfo{1}{+\infty}$, $f$ est strictement croissante de $-1$ à $+\infty$ : elle prend la valeur $3$ une fois.

  L'équation $f(x) = 3$ possède **2 solutions** (dont $x = -1$).

  **4.** On discute selon la position de la droite horizontale $y = k$ par rapport aux valeurs $-1$ (minimum local) et $3$ (maximum local) :

  - si $k < -1$ ou $k > 3$ : une seule solution ;
  - si $k = -1$ ou $k = 3$ : deux solutions ;
  - si $-1 < k < 3$ : trois solutions.
---
