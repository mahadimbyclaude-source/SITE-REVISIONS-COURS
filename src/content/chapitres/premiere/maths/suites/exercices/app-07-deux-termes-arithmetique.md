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
  **1.** Pour une suite arithmétique de raison $r$, on a $u_n = u_p + (n - p)r$. Avec $n = 8$ et $p = 3$ :

  $$
  u_8 = u_3 + 5r \quad\text{donc}\quad 26 = 11 + 5r, \quad\text{d'où}\quad r = \frac{26 - 11}{5} = 3.
  $$

  De plus $u_3 = u_0 + 3r$, donc $u_0 = u_3 - 3r = 11 - 9 = 2$.

  **2.** Pour tout $n \in \N$, $u_n = u_0 + nr = 2 + 3n$.

  **3.** On résout l'équation $u_n = 101$ :

  $$
  2 + 3n = 101 \iff 3n = 99 \iff n = 33.
  $$

  **Conclusion.** $r = 3$, $u_0 = 2$, $u_n = 2 + 3n$ et $u_{33} = 101$.
---
