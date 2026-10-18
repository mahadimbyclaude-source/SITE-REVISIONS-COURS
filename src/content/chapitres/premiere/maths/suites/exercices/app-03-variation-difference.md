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
  **1.** Pour tout $n \in \N$ :

  $$
  u_{n+1} - u_n = (n+1)^2 + 3(n+1) - n^2 - 3n = 2n + 1 + 3 = 2n + 4 > 0.
  $$

  La suite $(u_n)$ est strictement croissante.

  **2.** Pour tout $n \in \N$ :

  $$
  v_{n+1} - v_n = 5 - 2(n + 1) - (5 - 2n) = -2 < 0.
  $$

  La suite $(v_n)$ est strictement décroissante (c’est une suite arithmétique de raison $-2$).
---
