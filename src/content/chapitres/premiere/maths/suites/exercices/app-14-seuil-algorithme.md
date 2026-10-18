---
titre: Seuil et algorithme
type: application
notion: Seuil et algorithme
difficulte: Moyen
ordre: 14

enonce: |
  Soit $(u_n)$ la suite définie par $u_0 = 1$ et $u_{n+1} = 2u_n + 1$.

  1. Compléter le programme suivant pour qu’il affiche le plus petit entier $n$ tel que $u_n > 100$.

  ```python
  n = 0
  u = 1
  while ...:
      u = ...
      n = n + 1
  print(n)
  ```

  2. Quelle valeur ce programme affiche-t-il ? Quelle est alors la valeur de $u_n$ ?

indices:
  - |
    La boucle `while` continue tant que le seuil n’est **pas** dépassé.
  - |
    La condition est $u \leq 100$, et dans la boucle on applique la relation de récurrence. Calcule ensuite les termes à la main : $1$, $3$, $7$, $\ldots$

correction: |
  **1.** On continue tant que $u \leq 100$ :

  ```python
  n = 0
  u = 1
  while u <= 100:
      u = 2 * u + 1
      n = n + 1
  print(n)
  ```

  **2.** Les termes successifs sont $1$, $3$, $7$, $15$, $31$, $63$, $127$. Le premier terme supérieur à $100$ est $u_6 = 127$ : le programme affiche $6$ (et $u_6 = 127$).
---
