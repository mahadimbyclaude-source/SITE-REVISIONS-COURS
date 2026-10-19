---
titre: Une famille de fonctions avec paramètre
type: controle
difficulte: Difficile
duree_estimee: 40
chapitres_mobilises:
  - exponentielle
  - derivation
  - second-degre
ordre: 4

enonce: |
  Pour tout réel $m$, on considère la fonction $f_m$ définie sur $\R$ par $f_m(x) = (x + m)\mathrm{e}^{x}$.

  1. Montrer que $f_m'(x) = (x + m + 1)\mathrm{e}^{x}$.
  2. Dresser le tableau de variations de $f_m$. On exprimera le minimum en fonction de $m$.
  3. Déterminer l’équation de la tangente à la courbe de $f_m$ au point d’abscisse $0$.
  4. Pour quelle valeur de $m$ cette tangente est-elle horizontale ?
  5. Déterminer les valeurs de $m$ pour lesquelles $f_m(x) \geq -1$ pour tout réel $x$.

indices:
  - |
    Piste générale : $u(x) = x + m$, $u'(x) = 1$ et $v(x) = \mathrm{e}^{x}$. Factorise par $\mathrm{e}^{x}$.
  - |
    Plus précis : $f_m'(x)$ s’annule en $x = -m - 1$. Le minimum est $f_m(-m-1) = (-m-1+m)\mathrm{e}^{-m-1} = -\mathrm{e}^{-m-1}$.
  - |
    Pour la question 5, $f_m(x) \geq -1$ pour tout $x$ équivaut à : le minimum $-\mathrm{e}^{-m-1}$ est supérieur ou égal à $-1$.

correction: |
  **1.** Pour tout réel $m$, $f_m$ est dérivable sur $\R$. On pose $u(x) = x + m$ et $v(x) = \mathrm{e}^{x}$, donc $u'(x) = 1$ et $v'(x) = \mathrm{e}^{x}$. Alors

  $$
  f_m'(x) = 1 \times \mathrm{e}^{x} + (x + m)\,\mathrm{e}^{x} = (x + m + 1)\,\mathrm{e}^{x}.
  $$

  **2.** Comme $\mathrm{e}^{x} > 0$, $f_m'(x)$ a le signe de $x + m + 1$ : négatif pour $x < -m - 1$, nul en $-m - 1$, positif pour $x > -m - 1$. Le minimum est

  $$
  f_m(-m - 1) = (-m - 1 + m)\,\mathrm{e}^{-m-1} = -\mathrm{e}^{-m-1}.
  $$

  $$
  \begin{array}{c|ccccc}
  x & -\infty & & -m - 1 & & +\infty \\ \hline
  f_m'(x) & & - & 0 & + & \\ \hline
  f_m & & \searrow & -\mathrm{e}^{-m-1} & \nearrow &
  \end{array}
  $$

  **3.** On a $f_m(0) = m\,\mathrm{e}^{0} = m$ et $f_m'(0) = m + 1$. La tangente au point d'abscisse $0$ a pour équation

  $$
  y = (m + 1)(x - 0) + m = (m + 1)x + m.
  $$

  **4.** La tangente est horizontale si et seulement si son coefficient directeur est nul : $m + 1 = 0$, soit $m = -1$. Son équation est alors $y = -1$.

  **5.** D'après le tableau de variations, le minimum de $f_m$ sur $\R$ est $-\mathrm{e}^{-m-1}$. L'inégalité $f_m(x) \geq -1$ est vraie pour tout réel $x$ si et seulement si ce minimum est supérieur ou égal à $-1$ :

  $$
  -\mathrm{e}^{-m-1} \geq -1 \iff \mathrm{e}^{-m-1} \leq 1 = \mathrm{e}^{0} \iff -m - 1 \leq 0 \iff m \geq -1.
  $$

  **Conclusion.** $f_m(x) \geq -1$ pour tout $x$ si et seulement si $m \geq -1$.
---
