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
  **1.** Avec $u(x) = x^2 + 3$, $u'(x) = 2x$, $v(x) = x + 1$ et $v'(x) = 1$ :

  $$
  f'(x) = \frac{2x(x + 1) - (x^2 + 3)}{(x + 1)^2} = \frac{x^2 + 2x - 3}{(x + 1)^2} = \frac{(x + 3)(x - 1)}{(x + 1)^2}.
  $$

  **2.** Sur $\interfo{0}{+\infty}$, $x + 3 > 0$ et $(x + 1)^2 > 0$ : le signe de $f'(x)$ est celui de $x - 1$. On a $f(0) = 3$ et $f(1) = \dfrac{4}{2} = 2$.

  $$
  \begin{array}{c|ccccc}
  x & 0 & & 1 & & +\infty \\ \hline
  f'(x) & & - & 0 & + & \\ \hline
  f & 3 & \searrow & 2 & \nearrow &
  \end{array}
  $$

  Le coût moyen est minimal pour $x = 1$, soit $100$ objets, et vaut alors $2$ euros par objet.

  **3.** Comme $f(x) \geq 2$ et $x + 1 > 0$, on en déduit $x^2 + 3 \geq 2(x + 1)$. On peut aussi le vérifier directement : $x^2 + 3 - 2x - 2 = (x - 1)^2 \geq 0$.

  **4.** Comme $x + 1 > 0$, $f(x) = 3$ équivaut à $x^2 + 3 = 3x + 3$, soit $x^2 - 3x = 0$, donc $x(x - 3) = 0$ et $x = 0$ ou $x = 3$.

  De même, $f(x) \leq 3$ équivaut à $x^2 - 3x \leq 0$, soit $x(x - 3) \leq 0$. Le trinôme est négatif entre ses racines : $0 \leq x \leq 3$.

  Le coût moyen reste donc inférieur ou égal à $3$ euros par objet tant que l’entreprise produit entre $0$ et $300$ objets.
---
