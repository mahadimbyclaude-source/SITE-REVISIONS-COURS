---
titre: Étude de fonction avec trinôme et exponentielle
type: controle
difficulte: Difficile
duree_estimee: 40
chapitres_mobilises:
  - exponentielle
  - derivation
  - second-degre
ordre: 1

enonce: |
  Soit $f(x) = (x^2 - 3x + 1)\mathrm{e}^{x}$ définie sur $\R$.

  1. Montrer que $f'(x) = (x - 2)(x + 1)\mathrm{e}^{x}$.
  2. Dresser le tableau de variations de $f$. On donnera les valeurs exactes des extremums.
  3. Déterminer l’équation de la tangente à la courbe au point d’abscisse $0$.
  4. Résoudre $f(x) = 0$ puis étudier le signe de $f(x)$ sur $\R$.
  5. Combien de solutions l’équation $f(x) = -1$ possède-t-elle ? (On remarquera que $f(2) = -\mathrm{e}^{2} < -1$.)

indices:
  - |
    Piste générale : $u(x) = x^2 - 3x + 1$, $u'(x) = 2x - 3$ et $v(x) = \mathrm{e}^{x}$. Factorise par $\mathrm{e}^{x}$.
  - |
    Plus précis : $2x - 3 + x^2 - 3x + 1 = x^2 - x - 2 = (x - 2)(x + 1)$.
  - |
    Pour la dernière question, utilise le tableau : sur $\interff{-1}{2}$, $f$ décroît de $\dfrac{5}{\mathrm{e}}$ à $-\mathrm{e}^{2}$ ; sur $\interfo{2}{+\infty}$, elle croît de $-\mathrm{e}^{2}$ vers $+\infty$. Regarde aussi le signe de $f$ sur $\interof{-\infty}{-1}$.

correction: |
  **1.** La fonction $f$ est dérivable sur $\R$. On pose $u(x) = x^2 - 3x + 1$ et $v(x) = \mathrm{e}^{x}$, donc $u'(x) = 2x - 3$ et $v'(x) = \mathrm{e}^{x}$. Alors

  $$
  f'(x) = (2x - 3)\,\mathrm{e}^{x} + (x^2 - 3x + 1)\,\mathrm{e}^{x} = (x^2 - x - 2)\,\mathrm{e}^{x}.
  $$

  Or $x^2 - x - 2 = (x - 2)(x + 1)$ (racines $2$ et $-1$), d'où $f'(x) = (x - 2)(x + 1)\,\mathrm{e}^{x}$.

  **2.** Comme $\mathrm{e}^{x} > 0$, $f'(x)$ a le signe du trinôme $(x - 2)(x + 1)$, de coefficient dominant positif : positif pour $x < -1$ ou $x > 2$, négatif entre $-1$ et $2$. Les extremums sont

  $$
  f(-1) = (1 + 3 + 1)\,\mathrm{e}^{-1} = \frac{5}{\mathrm{e}} \qquad\text{et}\qquad f(2) = (4 - 6 + 1)\,\mathrm{e}^{2} = -\mathrm{e}^{2}.
  $$

  $$
  \begin{array}{c|ccccccc}
  x & -\infty & & -1 & & 2 & & +\infty \\ \hline
  f'(x) & & + & 0 & - & 0 & + & \\ \hline
  f & & \nearrow & \frac{5}{\mathrm{e}} & \searrow & -\mathrm{e}^{2} & \nearrow &
  \end{array}
  $$

  **3.** On a $f(0) = 1 \times \mathrm{e}^{0} = 1$ et $f'(0) = (0 - 2)(0 + 1)\mathrm{e}^{0} = -2$. La tangente au point d'abscisse $0$ a pour équation

  $$
  y = f'(0)(x - 0) + f(0) = -2x + 1.
  $$

  **4.** Comme $\mathrm{e}^{x} > 0$, on a $f(x) = 0$ si et seulement si $x^2 - 3x + 1 = 0$. Le discriminant est $\Delta = 9 - 4 = 5 > 0$, et les racines sont

  $$
  x_1 = \frac{3 - \sqrt{5}}{2} \qquad\text{et}\qquad x_2 = \frac{3 + \sqrt{5}}{2}.
  $$

  Le signe de $f(x)$ est celui de $x^2 - 3x + 1$, de coefficient dominant positif : $f(x) > 0$ pour $x < x_1$ ou $x > x_2$, $f(x) < 0$ pour $x_1 < x < x_2$ et $f(x) = 0$ en $x_1$ et $x_2$.

  **5.** On cherche le nombre de solutions de $f(x) = -1$ en raisonnant sur chaque intervalle de monotonie.

  - Sur $\interof{-\infty}{-1}$ : on a $x < x_1 \approx 0,38$, donc $f(x) > 0 > -1$. Il n'y a pas de solution.
  - Sur $\interff{-1}{2}$ : $f$ est continue et strictement décroissante de $\dfrac{5}{\mathrm{e}} > 0$ à $-\mathrm{e}^{2} < -1$. Comme $-1$ est compris entre ces deux valeurs, il y a exactement une solution (théorème des valeurs intermédiaires pour une fonction strictement monotone).
  - Sur $\interfo{2}{+\infty}$ : $f$ est continue et strictement croissante de $-\mathrm{e}^{2}$ vers $+\infty$, et $-1 > -\mathrm{e}^{2}$. Il y a exactement une solution.

  L'équation $f(x) = -1$ possède donc **2 solutions**.
---
