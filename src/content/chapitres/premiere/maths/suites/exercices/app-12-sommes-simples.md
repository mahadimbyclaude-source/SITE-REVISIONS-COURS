---
titre: Calculer des sommes de termes
type: application
notion: Sommes de termes
difficulte: Facile
ordre: 12

enonce: |
  Calculer les sommes suivantes.

  1. $S_1 = 1 + 2 + 3 + \cdots + 50$
  2. $S_2 = u_0 + u_1 + \cdots + u_{20}$ où $(u_n)$ est arithmétique de premier terme $u_0 = 3$ et de raison $r = 2$.
  3. $S_3 = 1 + 3 + 9 + \cdots + 3^6$

indices:
  - |
    Reconnais le type de somme (entiers consécutifs, suite arithmétique, suite géométrique) puis applique la formule correspondante.
  - |
    Pour $S_2$, calcule d’abord $u_{20}$ et compte les termes de $u_0$ à $u_{20}$. Pour $S_3$, la raison est $q = 3$.

correction: |
  **1.** C'est la somme des $50$ premiers entiers non nuls :

  $$
  S_1 = \frac{50 \times 51}{2} = 1275.
  $$

  **2.** $(u_n)$ est arithmétique, donc $u_{20} = u_0 + 20r = 3 + 20 \times 2 = 43$. La somme de $u_0$ à $u_{20}$ comporte $21$ termes, d'où

  $$
  S_2 = 21 \times \frac{u_0 + u_{20}}{2} = 21 \times \frac{3 + 43}{2} = 21 \times 23 = 483.
  $$

  **3.** Les termes $1 = 3^0$, $3 = 3^1$, $\ldots$, $3^6$ sont ceux d'une suite géométrique de raison $q = 3 \neq 1$ et de premier terme $1$. Pour $q \neq 1$, $1 + q + \cdots + q^n = \dfrac{1 - q^{n+1}}{1 - q}$, donc

  $$
  S_3 = \frac{1 - 3^{7}}{1 - 3} = \frac{1 - 2187}{-2} = 1093.
  $$
---
