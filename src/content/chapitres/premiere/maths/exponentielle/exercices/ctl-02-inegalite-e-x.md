---
titre: Une inégalité classique et ses applications
type: controle
difficulte: Difficile
duree_estimee: 35
chapitres_mobilises:
  - exponentielle
  - derivation
  - suites
ordre: 2

enonce: |
  Soit $g(x) = \mathrm{e}^{x} - x - 1$ définie sur $\R$.

  1. Calculer $g'(x)$ et étudier son signe. On rappelle que $\mathrm{e}^{x} > 1$ équivaut à $x > 0$.
  2. Dresser le tableau de variations de $g$ et en déduire que, pour tout réel $x$, $\mathrm{e}^{x} \geq x + 1$.
  3. Interpréter graphiquement ce résultat en utilisant la tangente à la courbe de $\exp$ en $0$.
  4. Soit $n$ un entier naturel non nul. En appliquant l’inégalité précédente avec $x = \dfrac{1}{n}$, montrer que $\left(1 + \dfrac{1}{n}\right)^{n} \leq \mathrm{e}$.
  5. Vérifier ce résultat pour $n = 1$ et $n = 2$.

indices:
  - |
    Piste générale : $g'(x) = \mathrm{e}^{x} - 1$. Son signe se déduit de la comparaison de $\mathrm{e}^{x}$ avec $\mathrm{e}^{0} = 1$.
  - |
    Plus précis : le minimum de $g$ est $g(0) = 0$. Pour la question 4, élève chaque membre de l’inégalité $1 + \dfrac{1}{n} \leq \mathrm{e}^{\frac{1}{n}}$ à la puissance $n$ : tout est positif, le sens ne change pas.
  - |
    Pour la question 3, la tangente à $\exp$ en $0$ a pour équation $y = x + 1$.

correction: |
  **1.** $g'(x) = \mathrm{e}^{x} - 1$. Comme $\exp$ est croissante et $\mathrm{e}^{0} = 1$ : $g'(x) > 0$ pour $x > 0$, $g'(0) = 0$ et $g'(x) < 0$ pour $x < 0$.

  **2.** $g(0) = 1 - 0 - 1 = 0$.

  $$
  \begin{array}{c|ccccc}
  x & -\infty & & 0 & & +\infty \\ \hline
  g'(x) & & - & 0 & + & \\ \hline
  g & & \searrow & 0 & \nearrow &
  \end{array}
  $$

  Le minimum de $g$ est $0$, donc $g(x) \geq 0$, c’est-à-dire $\mathrm{e}^{x} \geq x + 1$ pour tout réel $x$.

  **3.** La droite d’équation $y = x + 1$ est la tangente à la courbe de $\exp$ au point d’abscisse $0$. L’inégalité $\mathrm{e}^{x} \geq x + 1$ signifie que la courbe est située **au-dessus** de cette tangente sur $\R$.

  **4.** Avec $x = \dfrac{1}{n}$ : $\mathrm{e}^{\frac{1}{n}} \geq 1 + \dfrac{1}{n}$. Les deux membres sont positifs, on peut élever à la puissance $n$ :

  $$
  \left(\mathrm{e}^{\frac{1}{n}}\right)^{n} \geq \left(1 + \frac{1}{n}\right)^{n}, \qquad \text{or } \left(\mathrm{e}^{\frac{1}{n}}\right)^{n} = \mathrm{e}^{1} = \mathrm{e}.
  $$

  Donc $\left(1 + \dfrac{1}{n}\right)^{n} \leq \mathrm{e}$.

  **5.** Pour $n = 1$ : $(1 + 1)^1 = 2 \leq \mathrm{e} \approx 2{,}718$. Pour $n = 2$ : $\left(\dfrac{3}{2}\right)^2 = \dfrac{9}{4} = 2{,}25 \leq \mathrm{e}$.
---
