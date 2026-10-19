---
titre: Suites et exponentielle
type: application
notion: Suites géométriques
difficulte: Moyen
ordre: 9

enonce: |
  On considère les suites $(u_n)$, $(v_n)$ et $(w_n)$ définies pour tout $n \in \N$ par $u_n = \mathrm{e}^{2n}$, $v_n = 3\mathrm{e}^{-n}$ et $w_n = \mathrm{e}^{n + 1}$.

  1. Montrer que chacune de ces suites est géométrique et préciser sa raison et son premier terme.
  2. Donner le sens de variation de chacune.
  3. Calculer $u_0 + u_1 + u_2$ sous forme d’une expression en $\mathrm{e}$ (sans la calculer numériquement).

indices:
  - |
    Piste générale : calcule le quotient $\dfrac{u_{n+1}}{u_n}$ avec les propriétés de l’exponentielle.
  - |
    Plus précis : $\mathrm{e}^{2(n+1)} = \mathrm{e}^{2n} \times \mathrm{e}^{2}$. Une suite géométrique de raison $q > 1$ et de premier terme positif est croissante, de raison $0 < q < 1$ elle est décroissante.

correction: |
  **1.** Pour montrer qu'une suite est géométrique, on exprime le terme suivant en fonction du terme précédent.

  - Pour tout $n$, $u_{n+1} = \mathrm{e}^{2(n+1)} = \mathrm{e}^{2n + 2} = \mathrm{e}^{2} \times \mathrm{e}^{2n} = \mathrm{e}^{2}\,u_n$. La suite $(u_n)$ est géométrique de raison $\mathrm{e}^{2}$ et de premier terme $u_0 = \mathrm{e}^{0} = 1$.
  - Pour tout $n$, $v_{n+1} = 3\mathrm{e}^{-(n+1)} = \mathrm{e}^{-1} \times 3\mathrm{e}^{-n} = \mathrm{e}^{-1}\,v_n$. La suite $(v_n)$ est géométrique de raison $\mathrm{e}^{-1} = \dfrac{1}{\mathrm{e}}$ et de premier terme $v_0 = 3$.
  - Pour tout $n$, $w_{n+1} = \mathrm{e}^{n+2} = \mathrm{e} \times \mathrm{e}^{n+1} = \mathrm{e}\,w_n$. La suite $(w_n)$ est géométrique de raison $\mathrm{e}$ et de premier terme $w_0 = \mathrm{e}$.

  **2.** Les trois premiers termes sont strictement positifs, donc le sens de variation dépend de la raison $q$ :

  - $(u_n)$ : $q = \mathrm{e}^{2} > 1$, la suite est strictement croissante ;
  - $(v_n)$ : $0 < q = \dfrac{1}{\mathrm{e}} < 1$, la suite est strictement décroissante ;
  - $(w_n)$ : $q = \mathrm{e} > 1$, la suite est strictement croissante.

  **3.** $u_0 + u_1 + u_2 = \mathrm{e}^{0} + \mathrm{e}^{2} + \mathrm{e}^{4} = 1 + \mathrm{e}^{2} + \mathrm{e}^{4}$.
---
