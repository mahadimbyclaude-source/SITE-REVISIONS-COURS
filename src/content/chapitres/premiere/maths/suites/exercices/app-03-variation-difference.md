---
titre: Sens de variation avec la différence
type: application
notion: Sens de variation
difficulte: Facile
ordre: 3

enonce: |
  Étudier le sens de variation des suites suivantes, définies sur $\N$.

  1. $u_n = n^2 + 3n$
  2. $v_n = 5 - 2n$

indices:
  - |
    Calcule $u_{n+1} - u_n$ et étudie son signe.
  - |
    Développe $(n+1)^2 + 3(n+1)$ avec soin, puis simplifie la différence. Pour la deuxième suite, la différence est une constante.

correction: |
  Pour étudier le sens de variation d'une suite, on calcule $u_{n+1} - u_n$ pour tout $n \in \N$ et on étudie son signe.

  **1.** Pour tout $n \in \N$ :

  $$
  u_{n+1} - u_n = (n+1)^2 + 3(n+1) - n^2 - 3n = n^2 + 2n + 1 + 3n + 3 - n^2 - 3n = 2n + 4.
  $$

  Or $n \geq 0$, donc $2n + 4 > 0$. Ainsi $u_{n+1} - u_n > 0$ pour tout $n \in \N$ : la suite $(u_n)$ est **strictement croissante**.

  **2.** Pour tout $n \in \N$ :

  $$
  v_{n+1} - v_n = 5 - 2(n + 1) - (5 - 2n) = 5 - 2n - 2 - 5 + 2n = -2.
  $$

  Cette différence est strictement négative pour tout $n$ : la suite $(v_n)$ est **strictement décroissante**. (C'est d'ailleurs une suite arithmétique de raison $-2$.)
---
