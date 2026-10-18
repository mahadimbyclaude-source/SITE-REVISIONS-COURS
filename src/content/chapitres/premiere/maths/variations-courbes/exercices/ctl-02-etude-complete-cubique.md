---
titre: Étude complète d’une fonction de degré 3
type: controle
difficulte: Difficile
duree_estimee: 40
chapitres_mobilises:
  - variations-courbes
  - derivation
ordre: 2

enonce: |
  Soit $f(x) = x^3 - 3x^2 - 9x + 5$ définie sur $\R$ et $\mathcal{C}$ sa courbe.

  1. Montrer que $f'(x) = 3(x + 1)(x - 3)$.
  2. Dresser le tableau de variations de $f$.
  3. Déterminer l’équation de la tangente $T$ à $\mathcal{C}$ au point d’abscisse $0$.
  4. Montrer que l’équation $f(x) = 0$ admet exactement trois solutions. Encadrer chacune par deux entiers consécutifs.
  5. Existe-t-il des tangentes à $\mathcal{C}$ parallèles à la droite d’équation $y = -9x$ ? Si oui, donner les points de contact.

indices:
  - |
    Piste générale : $f'(x) = 3x^2 - 6x - 9 = 3(x^2 - 2x - 3)$ et $x^2 - 2x - 3 = (x + 1)(x - 3)$.
  - |
    Pour la question 4 : calcule $f(-1) = 10$ et $f(3) = -22$, puis cherche les changements de signe de $f$ en testant des entiers : $f(-3)$, $f(-2)$, $f(0)$, $f(1)$, $f(4)$, $f(5)$.
  - |
    Pour la question 5, deux droites sont parallèles si elles ont le même coefficient directeur : résous $f'(x) = -9$.

correction: |
  **1.** $f'(x) = 3x^2 - 6x - 9 = 3(x^2 - 2x - 3) = 3(x + 1)(x - 3)$.

  **2.** $f'$ est positive à l’extérieur de $[-1\,;\,3]$ et négative entre. $f(-1) = -1 - 3 + 9 + 5 = 10$ et $f(3) = 27 - 27 - 27 + 5 = -22$.

  $$
  \begin{array}{c|ccccccc}
  x & -\infty & & -1 & & 3 & & +\infty \\ \hline
  f'(x) & & + & 0 & - & 0 & + & \\ \hline
  f & & \nearrow & 10 & \searrow & -22 & \nearrow &
  \end{array}
  $$

  **3.** $f(0) = 5$ et $f'(0) = -9$. La tangente a pour équation $y = f'(0)(x - 0) + f(0)$, soit $y = -9x + 5$.

  **4.** Sur chaque intervalle de monotonie, $f$ s’annule exactement une fois :

  - sur $\interof{-\infty}{-1}$, $f$ est strictement croissante et va de $-\infty$ à $10$ : une solution ;
  - sur $\interff{-1}{3}$, $f$ est strictement décroissante de $10$ à $-22$ : une solution ;
  - sur $\interfo{3}{+\infty}$, $f$ est strictement croissante de $-22$ à $+\infty$ : une solution.

  Il y a donc exactement trois solutions. Avec $f(-3) = -22 < 0 < 3 = f(-2)$, la première est dans $\interoo{-3}{-2}$. Avec $f(0) = 5 > 0 > -6 = f(1)$, la deuxième est dans $\interoo{0}{1}$. Avec $f(4) = -15 < 0 < 10 = f(5)$, la troisième est dans $\interoo{4}{5}$.

  **5.** On résout $f'(x) = -9$ : $3x^2 - 6x - 9 = -9$, soit $3x^2 - 6x = 0$, donc $3x(x - 2) = 0$ et $x = 0$ ou $x = 2$. Les points de contact sont $(0\,;\,5)$ et $(2\,;\,f(2))$ avec $f(2) = 8 - 12 - 18 + 5 = -17$, soit $(2\,;\,-17)$. Les tangentes ont pour équations $y = -9x + 5$ et $y = -9(x - 2) - 17 = -9x + 1$.
---
