---
titre: Sens de variation des suites arithmétiques et géométriques
type: application
notion: Sens de variation
difficulte: Facile
ordre: 11

enonce: |
  Donner le sens de variation de chacune des suites suivantes (définies sur $\N$), en justifiant.

  1. $(u_n)$ arithmétique de raison $r = -0,5$.
  2. $(v_n)$ géométrique de premier terme $v_0 = 5$ et de raison $q = 1,2$.
  3. $(w_n)$ géométrique de premier terme $w_0 = -4$ et de raison $q = \dfrac{1}{2}$.
  4. $(t_n)$ géométrique de premier terme $t_0 = 1$ et de raison $q = -2$.

indices:
  - |
    Pour une suite arithmétique, tout dépend du signe de la raison. Pour une suite géométrique, regarde la raison **et** le signe du premier terme.
  - |
    Pour la troisième suite, calcule $w_1$ et compare à $w_0$. Pour la quatrième, écris les premiers termes.

correction: |
  **1.** $r < 0$, donc $(u_n)$ est strictement décroissante.

  **2.** $v_0 > 0$ et $q > 1$, donc $(v_n)$ est strictement croissante.

  **3.** $w_0 < 0$ et $0 < q < 1$ : les variations sont inversées, donc $(w_n)$ est strictement croissante. Vérification : $w_0 = -4$ et $w_1 = -2 > w_0$.

  **4.** $q < 0$ : les termes valent $1$, $-2$, $4$, $-8$, $\ldots$ Ils changent de signe à chaque étape, donc $(t_n)$ n’est pas monotone.
---
