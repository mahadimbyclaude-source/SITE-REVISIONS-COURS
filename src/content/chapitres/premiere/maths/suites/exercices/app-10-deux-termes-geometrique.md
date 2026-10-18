---
titre: Suite géométrique connue par deux termes
type: application
notion: Suites géométriques
difficulte: Moyen
ordre: 10

enonce: |
  Soit $(u_n)$ une suite géométrique de raison $q$ telle que $u_2 = 12$ et $u_5 = 96$.

  1. Déterminer la raison $q$.
  2. Calculer $u_0$ puis exprimer $u_n$ en fonction de $n$.
  3. Calculer $u_7$.

indices:
  - |
    Relie $u_5$ et $u_2$ avec la formule $u_n = u_p \times q^{n-p}$.
  - |
    $u_5 = u_2 \times q^3$, donc $q^3 = \dfrac{96}{12}$. Quel réel a pour cube $8$ ?

correction: |
  **1.** $u_5 = u_2 \times q^{3}$ donne $q^3 = \dfrac{96}{12} = 8$, donc $q = 2$.

  **2.** $u_2 = u_0 \times q^2$ donne $u_0 = \dfrac{12}{4} = 3$, donc $u_n = 3 \times 2^n$.

  **3.** $u_7 = 3 \times 2^7 = 384$.
---
