---
titre: Reconnaître une suite arithmétique
type: application
notion: Suites arithmétiques
difficulte: Facile
ordre: 5

enonce: |
  Parmi les suites suivantes, dire lesquelles sont arithmétiques. Donner alors la raison et le premier terme.

  1. $u_n = 4n + 7$ pour tout $n \in \N$
  2. $v_n = n^2 + 1$ pour tout $n \in \N$
  3. $w_0 = 10$ et $w_{n+1} = w_n - 3$ pour tout $n \in \N$

indices:
  - |
    Calcule la différence entre deux termes consécutifs. Est-elle toujours la même ?
  - |
    Pour montrer qu’une suite n’est pas arithmétique, il suffit de trouver deux différences consécutives qui ne sont pas égales.

correction: |
  Une suite est arithmétique si la différence $u_{n+1} - u_n$ est la même constante pour tout $n$ ; cette constante est la raison.

  **1.** Pour tout $n \in \N$ :

  $$
  u_{n+1} - u_n = 4(n+1) + 7 - (4n + 7) = 4.
  $$

  La différence est constante : $(u_n)$ est arithmétique de raison $4$ et de premier terme $u_0 = 7$.

  **2.** On calcule les premiers termes : $v_0 = 1$, $v_1 = 2$ et $v_2 = 5$. Alors $v_1 - v_0 = 1$ et $v_2 - v_1 = 3$. Ces différences ne sont pas égales, donc $(v_n)$ n'est **pas** arithmétique.

  **3.** La relation $w_{n+1} = w_n - 3$ s'écrit $w_{n+1} - w_n = -3$ pour tout $n$ : $(w_n)$ est arithmétique de raison $-3$ et de premier terme $w_0 = 10$.
---
