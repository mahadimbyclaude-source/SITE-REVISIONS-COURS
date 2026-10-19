---
titre: Coût moyen minimal
type: controle
difficulte: Difficile
duree_estimee: 30
chapitres_mobilises:
  - variations-courbes
  - derivation
  - second-degre
ordre: 3

enonce: |
  Une entreprise fabrique $x$ centaines d’objets, avec $x \in \interfo{0}{+\infty}$. Le coût moyen, en euros par objet, est modélisé par

  $$
  f(x) = \frac{x^2 + 3}{x + 1}.
  $$

  1. Montrer que $f'(x) = \dfrac{(x + 3)(x - 1)}{(x + 1)^2}$.
  2. Dresser le tableau de variations de $f$. Pour quelle production le coût moyen est-il minimal ? Quel est-il ?
  3. Montrer que, pour tout $x \geq 0$, on a $x^2 + 3 \geq 2(x + 1)$.
  4. Résoudre l’équation $f(x) = 3$ puis l’inéquation $f(x) \leq 3$. Interpréter le résultat.

indices:
  - |
    Piste générale : dérivée d’un quotient avec $u(x) = x^2 + 3$ et $v(x) = x + 1$.
  - |
    Plus précis : $u'v - uv' = 2x(x + 1) - (x^2 + 3) = x^2 + 2x - 3$, qui se factorise en $(x + 3)(x - 1)$.
  - |
    Pour la question 4, $f(x) \leq 3$ équivaut à $x^2 + 3 \leq 3(x + 1)$ car $x + 1 > 0$.

correction: |
  **1.** La fonction $f = \dfrac{u}{v}$ est dérivable sur $\interfo{0}{+\infty}$ car $v(x) = x + 1 > 0$. Avec $u(x) = x^2 + 3$, $u'(x) = 2x$, $v(x) = x + 1$ et $v'(x) = 1$ :

  $$
  f'(x) = \frac{2x(x + 1) - (x^2 + 3) \times 1}{(x + 1)^2} = \frac{x^2 + 2x - 3}{(x + 1)^2}.
  $$

  Le trinôme $x^2 + 2x - 3$ a pour racines $-3$ et $1$, donc $x^2 + 2x - 3 = (x + 3)(x - 1)$ et

  $$
  f'(x) = \frac{(x + 3)(x - 1)}{(x + 1)^2}.
  $$

  **2.** Sur $\interfo{0}{+\infty}$, on a $x + 3 > 0$ et $(x + 1)^2 > 0$, donc $f'(x)$ a le signe de $x - 1$. On calcule $f(0) = 3$ et $f(1) = \dfrac{4}{2} = 2$.

  $$
  \begin{array}{c|ccccc}
  x & 0 & & 1 & & +\infty \\ \hline
  f'(x) & & - & 0 & + & \\ \hline
  f & 3 & \searrow & 2 & \nearrow &
  \end{array}
  $$

  Le coût moyen est minimal pour $x = 1$, soit une production de $100$ objets, et il vaut alors $2$ euros par objet.

  **3.** On développe : $x^2 + 3 - 2(x + 1) = x^2 - 2x + 1 = (x - 1)^2 \geq 0$. Donc, pour tout $x \geq 0$,

  $$
  x^2 + 3 \geq 2(x + 1).
  $$

  C'est cohérent avec la question 2 : comme $x + 1 > 0$, cette inégalité équivaut à $f(x) \geq 2$, c'est-à-dire que le minimum de $f$ est $2$.

  **4.** Comme $x + 1 > 0$, on peut multiplier par $x + 1$ sans changer le sens des inégalités. L'équation $f(x) = 3$ équivaut à $x^2 + 3 = 3(x + 1)$, soit $x^2 - 3x = 0$, donc $x(x - 3) = 0$ :

  $$
  S = \{0\,;\,3\}.
  $$

  L'inéquation $f(x) \leq 3$ équivaut à $x^2 + 3 \leq 3x + 3$, soit $x^2 - 3x \leq 0$, c'est-à-dire $x(x - 3) \leq 0$. Ce trinôme est négatif entre ses racines : $0 \leq x \leq 3$.

  *Interprétation.* Le coût moyen est inférieur ou égal à $3$ euros par objet si et seulement si l'entreprise produit entre $0$ et $300$ objets (puisque $x$ est exprimé en centaines).
---
