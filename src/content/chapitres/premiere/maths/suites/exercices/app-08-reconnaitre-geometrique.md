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
  Une suite est géométrique si l'on passe d'un terme au suivant en multipliant toujours par le même nombre $q$, la raison.

  **1.** Les termes de $(u_n)$ sont non nuls et, pour tout $n \in \N$ :

  $$
  \frac{u_{n+1}}{u_n} = \frac{5 \times 3^{n+1}}{5 \times 3^n} = 3.
  $$

  Le quotient est constant : $(u_n)$ est géométrique de raison $3$ et de premier terme $u_0 = 5$.

  **2.** La relation $v_{n+1} = \dfrac{1}{2}\,v_n$ est de la forme $v_{n+1} = q\,v_n$ : $(v_n)$ est géométrique de raison $\dfrac{1}{2}$ et de premier terme $v_0 = 8$.

  **3.** On calcule $w_0 = 2^0 + 1 = 2$, $w_1 = 2^1 + 1 = 3$ et $w_2 = 2^2 + 1 = 5$. Alors $\dfrac{w_1}{w_0} = \dfrac{3}{2}$ et $\dfrac{w_2}{w_1} = \dfrac{5}{3}$. Ces quotients sont différents, donc $(w_n)$ n'est **pas** géométrique.
---
