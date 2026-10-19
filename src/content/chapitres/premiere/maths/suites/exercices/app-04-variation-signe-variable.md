---
titre: 'Sens de variation dont le signe dépend de $n$'
type: application
notion: Sens de variation
difficulte: Moyen
ordre: 4

enonce: |
  1. Soit $u_n = n^2 - 6n$ pour $n \in \N$.
     1. Montrer que $u_{n+1} - u_n = 2n - 5$.
     2. En déduire le sens de variation de $(u_n)$ : la suite est-elle monotone ?
  2. Soit $w_n = \dfrac{n}{n + 1}$ pour $n \in \N$. Montrer que $(w_n)$ est strictement croissante.

indices:
  - |
    Calcule la différence, puis étudie son signe selon les valeurs de $n$.
  - |
    $2n - 5 < 0$ équivaut à $n < 2,5$, donc pour $n \leq 2$. Pour la seconde suite, mets $w_{n+1} - w_n$ sur un même dénominateur $(n+1)(n+2)$.

correction: |
  **1.a.** Pour tout $n \in \N$ :

  $$
  u_{n+1} - u_n = (n+1)^2 - 6(n+1) - n^2 + 6n = n^2 + 2n + 1 - 6n - 6 - n^2 + 6n = 2n - 5.
  $$

  **1.b.** Le signe de $u_{n+1} - u_n = 2n - 5$ dépend de $n$ :

  - $2n - 5 < 0$ équivaut à $n < 2,5$, donc pour $n \in \{0\,;\,1\,;\,2\}$ ;
  - $2n - 5 > 0$ équivaut à $n > 2,5$, donc pour $n \geq 3$.

  Ainsi $u_0 > u_1 > u_2 > u_3$, puis $u_3 < u_4 < u_5 < \cdots$ : la suite est décroissante jusqu'au rang $3$, puis croissante à partir du rang $3$. Comme la différence change de signe, la suite n'est **pas monotone** sur $\N$.

  Vérification : $u_0 = 0$, $u_1 = -5$, $u_2 = -8$, $u_3 = -9$ et $u_4 = -8$.

  **2.** Pour tout $n \in \N$, on réduit au même dénominateur :

  $$
  w_{n+1} - w_n = \frac{n+1}{n+2} - \frac{n}{n+1}
  = \frac{(n+1)^2 - n(n+2)}{(n+1)(n+2)}
  = \frac{n^2 + 2n + 1 - n^2 - 2n}{(n+1)(n+2)}
  = \frac{1}{(n+1)(n+2)}.
  $$

  Pour tout $n \in \N$, $(n+1)(n+2) > 0$, donc $w_{n+1} - w_n > 0$ : la suite $(w_n)$ est **strictement croissante**.
---
