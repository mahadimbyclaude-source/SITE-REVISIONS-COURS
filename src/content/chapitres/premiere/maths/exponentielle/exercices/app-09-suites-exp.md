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
  **1.**

  - $u_{n+1} = \mathrm{e}^{2n + 2} = \mathrm{e}^{2} \times \mathrm{e}^{2n} = \mathrm{e}^{2}\,u_n$ : géométrique de raison $\mathrm{e}^{2}$, $u_0 = 1$.
  - $v_{n+1} = 3\mathrm{e}^{-n-1} = \mathrm{e}^{-1} \times 3\mathrm{e}^{-n} = \mathrm{e}^{-1}\,v_n$ : géométrique de raison $\mathrm{e}^{-1} = \dfrac{1}{\mathrm{e}}$, $v_0 = 3$.
  - $w_{n+1} = \mathrm{e}^{n + 2} = \mathrm{e} \times \mathrm{e}^{n+1} = \mathrm{e}\,w_n$ : géométrique de raison $\mathrm{e}$, $w_0 = \mathrm{e}$.

  **2.** $(u_n)$ est croissante car $\mathrm{e}^{2} > 1$ et $u_0 > 0$. $(v_n)$ est décroissante car $0 < \dfrac{1}{\mathrm{e}} < 1$ et $v_0 > 0$. $(w_n)$ est croissante car $\mathrm{e} > 1$ et $w_0 > 0$.

  **3.** $u_0 + u_1 + u_2 = 1 + \mathrm{e}^{2} + \mathrm{e}^{4}$.
---
