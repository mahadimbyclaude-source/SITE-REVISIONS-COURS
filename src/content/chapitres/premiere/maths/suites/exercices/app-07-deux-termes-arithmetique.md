---
titre: Suite arithmétique connue par deux termes
type: application
notion: Suites arithmétiques
difficulte: Moyen
ordre: 7

enonce: |
  Soit $(u_n)$ une suite arithmétique telle que $u_3 = 11$ et $u_8 = 26$.

  1. Déterminer la raison $r$ puis le premier terme $u_0$.
  2. Exprimer $u_n$ en fonction de $n$.
  3. Pour quelle valeur de $n$ a-t-on $u_n = 101$ ?

indices:
  - |
    Relie $u_8$ et $u_3$ avec la formule $u_n = u_p + (n - p)r$.
  - |
    $u_8 = u_3 + 5r$, donc $r = \dfrac{u_8 - u_3}{5}$. Ensuite $u_0 = u_3 - 3r$, et la dernière question est une équation en $n$.

correction: |
  **1.** $u_8 = u_3 + (8 - 3)r$, donc $26 = 11 + 5r$ et $r = 3$.

  Puis $u_3 = u_0 + 3r$ donne $u_0 = 11 - 9 = 2$.

  **2.** $u_n = 2 + 3n$.

  **3.** $2 + 3n = 101$ équivaut à $3n = 99$, soit $n = 33$.
---
