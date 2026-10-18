---
titre: Calculer des termes avec une récurrence
type: application
notion: Calculer des termes
difficulte: Facile
ordre: 2

enonce: |
  1. Soit $(u_n)$ définie par $u_0 = 3$ et $u_{n+1} = 2u_n - 5$. Calculer $u_1$, $u_2$ et $u_3$.
  2. Soit $(v_n)$ définie par $v_0 = 1$ et $v_{n+1} = \dfrac{1}{1 + v_n}$. Calculer $v_1$, $v_2$ et $v_3$.

indices:
  - |
    On calcule les termes un par un, chaque terme sert à calculer le suivant.
  - |
    $u_1 = 2u_0 - 5$, puis $u_2 = 2u_1 - 5$, etc. Pour la deuxième suite, garde des fractions.

correction: |
  **1.**

  $$
  u_1 = 2 \times 3 - 5 = 1, \qquad u_2 = 2 \times 1 - 5 = -3, \qquad u_3 = 2 \times (-3) - 5 = -11.
  $$

  **2.**

  $$
  v_1 = \frac{1}{1 + 1} = \frac{1}{2}, \qquad
  v_2 = \frac{1}{1 + \frac{1}{2}} = \frac{2}{3}, \qquad
  v_3 = \frac{1}{1 + \frac{2}{3}} = \frac{3}{5}.
  $$
---
