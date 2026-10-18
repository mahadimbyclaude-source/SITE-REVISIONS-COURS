---
titre: Sommes qui ne commencent pas au premier terme
type: application
notion: Sommes de termes
difficulte: Moyen
ordre: 13

enonce: |
  1. Soit $u_n = 3n + 1$. Calculer $S = u_5 + u_6 + \cdots + u_{15}$.
  2. Calculer $T = 2 + 4 + 8 + \cdots + 1024$.

indices:
  - |
    Commence par compter le nombre de termes de la somme.
  - |
    De $u_5$ à $u_{15}$, il y a $15 - 5 + 1$ termes. Pour $T$, observe que $1024 = 2^{10}$ et factorise par $2$.

correction: |
  **1.** Il y a $15 - 5 + 1 = 11$ termes, avec $u_5 = 16$ et $u_{15} = 46$ :

  $$
  S = 11 \times \frac{16 + 46}{2} = 11 \times 31 = 341.
  $$

  **2.** On factorise par $2$ : $T = 2\,(1 + 2 + 4 + \cdots + 2^9)$, donc

  $$
  T = 2 \times \frac{1 - 2^{10}}{1 - 2} = 2 \times 1023 = 2046.
  $$
---
