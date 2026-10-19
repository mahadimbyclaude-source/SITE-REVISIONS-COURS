---
titre: Une récurrence avec suite auxiliaire
type: controle
difficulte: Très difficile
duree_estimee: 40
chapitres_mobilises:
  - suites
  - Puissances (Seconde)
ordre: 6

enonce: |
  Soit $(u_n)$ la suite définie par $u_0 = 2$ et, pour tout $n \in \N$, $u_{n+1} = 3u_n - 2n - 1$. On pose $v_n = u_n - n - 1$.

  1. Calculer $u_1$, $u_2$ et $u_3$.
  2. Montrer que $(v_n)$ est géométrique. Préciser sa raison et son premier terme.
  3. En déduire que $u_n = 3^n + n + 1$ pour tout $n \in \N$.
  4. Montrer que $(u_n)$ est strictement croissante.
  5. Montrer que $u_0 + u_1 + \cdots + u_n = \dfrac{3^{n+1} - 1}{2} + \dfrac{(n+1)(n+2)}{2}$.
  6. Compléter le programme suivant pour qu’il affiche le plus petit entier $n$ tel que $u_n > 1000$, puis donner la valeur affichée.

  ```python
  n = 0
  u = 2
  while ...:
      u = ...
      n = n + 1
  print(n)
  ```

indices:
  - |
    Pour la question 2, exprime $v_{n+1}$ à l’aide de $u_{n+1}$, puis remplace $u_{n+1}$ par sa définition et fais apparaître $v_n$.
  - |
    $v_{n+1} = u_{n+1} - (n+1) - 1 = 3u_n - 3n - 3$. Factorise par $3$ et reconnais $v_n$.
  - |
    Pour la question 5, sépare la somme en deux : la somme des $3^k$ (géométrique) et la somme des $k + 1$ (somme des premiers entiers).
  - |
    Pour le programme de la question 6, dans la boucle on utilise $n$ **avant** de l’augmenter : la mise à jour de $u$ doit venir avant $n = n + 1$.

correction: |
  **1.** On applique la relation de récurrence $u_{n+1} = 3u_n - 2n - 1$ :

  $$
  u_1 = 3 \times 2 - 0 - 1 = 5, \qquad u_2 = 3 \times 5 - 2 - 1 = 12, \qquad u_3 = 3 \times 12 - 4 - 1 = 31.
  $$

  **2.** Pour tout $n \in \N$, on exprime $v_{n+1}$ à l'aide de $v_n$ :

  $$
  v_{n+1} = u_{n+1} - (n + 1) - 1 = (3u_n - 2n - 1) - n - 2 = 3u_n - 3n - 3 = 3(u_n - n - 1) = 3v_n.
  $$

  La suite $(v_n)$ est donc **géométrique** de raison $3$ et de premier terme $v_0 = u_0 - 0 - 1 = 1$.

  **3.** Le terme général donne $v_n = v_0 \times 3^n = 3^n$. Or $v_n = u_n - n - 1$, donc pour tout $n \in \N$ :

  $$
  u_n = v_n + n + 1 = 3^n + n + 1.
  $$

  **4.** Pour tout $n \in \N$ :

  $$
  u_{n+1} - u_n = 3^{n+1} + (n + 2) - 3^n - (n + 1) = 3^n(3 - 1) + 1 = 2 \times 3^n + 1 > 0.
  $$

  La suite $(u_n)$ est **strictement croissante**.

  **5.** Pour tout $k$, $u_k = 3^k + (k + 1)$. On sépare donc la somme en deux :

  $$
  \sum_{k=0}^{n} u_k = \left(1 + 3 + \cdots + 3^n\right) + \left(1 + 2 + \cdots + (n+1)\right).
  $$

  - La première somme est celle de $n + 1$ termes d'une suite géométrique de raison $3$ : elle vaut $\dfrac{1 - 3^{n+1}}{1 - 3} = \dfrac{3^{n+1} - 1}{2}$.
  - La seconde est la somme des $n + 1$ premiers entiers non nuls : elle vaut $\dfrac{(n+1)(n+2)}{2}$.

  On obtient bien $u_0 + \cdots + u_n = \dfrac{3^{n+1} - 1}{2} + \dfrac{(n+1)(n+2)}{2}$.

  Vérification pour $n = 2$ : $2 + 5 + 12 = 19$ et $\dfrac{27 - 1}{2} + \dfrac{3 \times 4}{2} = 13 + 6 = 19$.

  **6.** On continue tant que $u \leq 1000$. Dans la boucle, la mise à jour de $u$ utilise l'ancienne valeur de $n$, donc elle doit venir **avant** $n = n + 1$ :

  ```python
  n = 0
  u = 2
  while u <= 1000:
      u = 3 * u - 2 * n - 1
      n = n + 1
  print(n)
  ```

  On a $u_6 = 3^6 + 7 = 736 \leq 1000$ et $u_7 = 3^7 + 8 = 2195 > 1000$. Le programme affiche donc $7$.
---
