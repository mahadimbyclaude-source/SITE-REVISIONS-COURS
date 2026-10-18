---
titre: Reconnaître une suite géométrique
type: application
notion: Suites géométriques
difficulte: Facile
ordre: 8

enonce: |
  Parmi les suites suivantes, dire lesquelles sont géométriques. Donner alors la raison et le premier terme.

  1. $u_n = 5 \times 3^n$ pour tout $n \in \N$
  2. $v_0 = 8$ et $v_{n+1} = \dfrac{1}{2}\,v_n$ pour tout $n \in \N$
  3. $w_n = 2^n + 1$ pour tout $n \in \N$

indices:
  - |
    Pour passer d’un terme au suivant, multiplie-t-on toujours par le même nombre ?
  - |
    Pour la première suite, calcule $\dfrac{u_{n+1}}{u_n}$. Pour la troisième, calcule $w_0$, $w_1$, $w_2$ et compare $\dfrac{w_1}{w_0}$ et $\dfrac{w_2}{w_1}$.

correction: |
  **1.** $\dfrac{u_{n+1}}{u_n} = \dfrac{5 \times 3^{n+1}}{5 \times 3^n} = 3$. La suite est géométrique de raison $3$ et de premier terme $u_0 = 5$.

  **2.** La relation $v_{n+1} = \dfrac{1}{2}\,v_n$ montre que la suite est géométrique de raison $\dfrac{1}{2}$ et de premier terme $v_0 = 8$.

  **3.** $w_0 = 2$, $w_1 = 3$, $w_2 = 5$. Alors $\dfrac{w_1}{w_0} = \dfrac{3}{2}$ et $\dfrac{w_2}{w_1} = \dfrac{5}{3}$ : les quotients sont différents, donc la suite n’est **pas** géométrique.
---
