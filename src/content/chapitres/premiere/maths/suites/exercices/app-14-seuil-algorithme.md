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
  **1.** On veut s'arrêter dès que $u$ dépasse strictement $100$ : la boucle continue donc **tant que** $u \leq 100$. À chaque tour, on applique la relation de récurrence $u_{n+1} = 2u_n + 1$ puis on augmente $n$ :

  ```python
  n = 0
  u = 1
  while u <= 100:
      u = 2 * u + 1
      n = n + 1
  print(n)
  ```

  **2.** Les termes successifs sont $u_0 = 1$, $u_1 = 3$, $u_2 = 7$, $u_3 = 15$, $u_4 = 31$, $u_5 = 63$ et $u_6 = 127$. Les termes $u_0$ à $u_5$ sont inférieurs ou égaux à $100$ et $u_6 = 127 > 100$.

  **Conclusion.** Le programme affiche $6$, et alors $u_6 = 127$.
---
