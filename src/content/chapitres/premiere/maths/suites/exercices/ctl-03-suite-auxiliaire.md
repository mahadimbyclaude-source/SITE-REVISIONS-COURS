---
titre: Suite auxiliaire géométrique
type: controle
difficulte: Difficile
duree_estimee: 35
chapitres_mobilises:
  - suites
  - Puissances (Seconde)
ordre: 3

enonce: |
  Soit $(u_n)$ la suite définie par $u_0 = 1$ et, pour tout $n \in \N$, $u_{n+1} = 2u_n + 3$. On pose $v_n = u_n + 3$.

  1. Calculer $u_1$ et $u_2$.
  2. Montrer que $(v_n)$ est une suite géométrique dont on précisera la raison et le premier terme.
  3. En déduire que $u_n = 2^{n+2} - 3$ pour tout $n \in \N$.
  4. Montrer que $(u_n)$ est strictement croissante.
  5. Déterminer le plus petit entier $n$ tel que $u_n > 1000$.
  6. Montrer que $u_0 + u_1 + \cdots + u_n = 2^{n+3} - 3n - 7$.

indices:
  - |
    Pour montrer qu’une suite est géométrique, exprime $v_{n+1}$ en fonction de $v_n$.
  - |
    $v_{n+1} = u_{n+1} + 3 = 2u_n + 6 = 2(u_n + 3)$. Pour la question 5, les puissances de $2$ utiles sont $2^9 = 512$ et $2^{10} = 1024$.
  - |
    Pour la question 6, sépare la somme : $\sum u_k = \sum v_k - 3(n+1)$, puis utilise la somme d’une suite géométrique de raison $2$.

correction: |
  **1.** On applique la relation de récurrence : $u_1 = 2u_0 + 3 = 2 \times 1 + 3 = 5$, puis $u_2 = 2u_1 + 3 = 2 \times 5 + 3 = 13$.

  **2.** Pour tout $n \in \N$, on exprime $v_{n+1}$ à l'aide de $v_n$ :

  $$
  v_{n+1} = u_{n+1} + 3 = (2u_n + 3) + 3 = 2u_n + 6 = 2(u_n + 3) = 2v_n.
  $$

  Donc $(v_n)$ est une suite **géométrique** de raison $2$ et de premier terme $v_0 = u_0 + 3 = 4$.

  **3.** Le terme général d'une suite géométrique donne $v_n = v_0 \times 2^n = 4 \times 2^n = 2^{n+2}$. Comme $v_n = u_n + 3$, on obtient pour tout $n \in \N$ :

  $$
  u_n = v_n - 3 = 2^{n+2} - 3.
  $$

  **4.** Pour tout $n \in \N$ :

  $$
  u_{n+1} - u_n = (2^{n+3} - 3) - (2^{n+2} - 3) = 2^{n+3} - 2^{n+2} = 2^{n+2}(2 - 1) = 2^{n+2}.
  $$

  Cette quantité est strictement positive : la suite $(u_n)$ est **strictement croissante**.

  **5.** On résout $u_n > 1000$, c'est-à-dire $2^{n+2} > 1003$. Or $2^9 = 512 < 1003 < 1024 = 2^{10}$. La suite $\left(2^{n+2}\right)$ étant croissante, la condition est vérifiée si et seulement si $n + 2 \geq 10$, soit $n \geq 8$. Le plus petit entier est donc $n = 8$.

  Vérification : $u_7 = 2^9 - 3 = 509 \leq 1000$ et $u_8 = 2^{10} - 3 = 1021 > 1000$.

  **6.** Notons $S_n = u_0 + \cdots + u_n$. Comme $u_k = v_k - 3$ pour tout $k$ :

  $$
  S_n = (v_0 + \cdots + v_n) - 3(n+1).
  $$

  La somme des $v_k$ est celle de $n + 1$ termes d'une suite géométrique de raison $2$ et de premier terme $4$ :

  $$
  v_0 + \cdots + v_n = 4 \times \frac{1 - 2^{n+1}}{1 - 2} = 4\left(2^{n+1} - 1\right) = 2^{n+3} - 4.
  $$

  Donc $S_n = 2^{n+3} - 4 - 3n - 3 = 2^{n+3} - 3n - 7$.
---
