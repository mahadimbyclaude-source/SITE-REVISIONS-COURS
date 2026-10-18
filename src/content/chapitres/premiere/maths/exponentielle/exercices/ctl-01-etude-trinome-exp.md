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
  **1.** $f'(x) = (2x - 3)\mathrm{e}^{x} + (x^2 - 3x + 1)\mathrm{e}^{x} = (x^2 - x - 2)\mathrm{e}^{x} = (x - 2)(x + 1)\mathrm{e}^{x}$.

  **2.** $\mathrm{e}^{x} > 0$, donc $f'(x)$ a le signe du trinôme $(x - 2)(x + 1)$ : positif à l’extérieur de $[-1\,;\,2]$, négatif entre. On a $f(-1) = (1 + 3 + 1)\mathrm{e}^{-1} = \dfrac{5}{\mathrm{e}}$ et $f(2) = (4 - 6 + 1)\mathrm{e}^{2} = -\mathrm{e}^{2}$.

  $$
  \begin{array}{c|ccccccc}
  x & -\infty & & -1 & & 2 & & +\infty \\ \hline
  f'(x) & & + & 0 & - & 0 & + & \\ \hline
  f & & \nearrow & \frac{5}{\mathrm{e}} & \searrow & -\mathrm{e}^{2} & \nearrow &
  \end{array}
  $$

  **3.** $f(0) = 1$ et $f'(0) = (-2)(1)\mathrm{e}^{0} = -2$. La tangente a pour équation $y = -2x + 1$.

  **4.** $\mathrm{e}^{x} > 0$, donc $f(x) = 0$ équivaut à $x^2 - 3x + 1 = 0$. On a $\Delta = 9 - 4 = 5$ et les racines sont $\dfrac{3 - \sqrt{5}}{2}$ et $\dfrac{3 + \sqrt{5}}{2}$. Le signe de $f(x)$ est celui du trinôme : positif à l’extérieur des racines, négatif entre.

  **5.** On regarde chaque intervalle de monotonie :

  - sur $\interof{-\infty}{-1}$, on a $x < \dfrac{3 - \sqrt{5}}{2} \approx 0{,}38$, donc $x^2 - 3x + 1 > 0$ et $f(x) > 0 > -1$ : aucune solution ;
  - sur $\interff{-1}{2}$, $f$ est strictement décroissante de $\dfrac{5}{\mathrm{e}}$ à $-\mathrm{e}^{2}$, et $-\mathrm{e}^{2} < -1 < \dfrac{5}{\mathrm{e}}$ : une solution ;
  - sur $\interfo{2}{+\infty}$, $f$ est strictement croissante de $-\mathrm{e}^{2}$ à $+\infty$ et $-1 > -\mathrm{e}^{2}$ : une solution.

  Il y a **2 solutions**.
---
