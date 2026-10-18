---
titre: Une équation de degré 4 qui se ramène au second degré
type: application
notion: Discriminant et racines
difficulte: Moyen
ordre: 4
enonce: |
  On veut résoudre dans $\R$ l’équation $(E) : x^4 - 5x^2 + 4 = 0$.

  1. En posant $X = x^2$, montrer que $(E)$ s’écrit $X^2 - 5X + 4 = 0$.
  2. Résoudre cette équation d’inconnue $X$.
  3. En déduire les solutions de $(E)$.
indices:
  - |
    $x^4 = (x^2)^2$. Une fois l’équation en $X$ résolue, il faut revenir à $x$ en se souvenant que $X = x^2$.
  - |
    Pour l’équation en $X$ : $\Delta = 25 - 16 = 9$. Ensuite, chaque solution $X$ positive donne deux valeurs de $x$ (car $x^2 = k$ avec $k > 0$ donne $x = -\sqrt{k}$ ou $x = \sqrt{k}$).
correction: |
  **1.** Comme $x^4 = (x^2)^2 = X^2$, l’équation devient $X^2 - 5X + 4 = 0$.

  **2.** $\Delta = (-5)^2 - 4 \times 1 \times 4 = 25 - 16 = 9 > 0$ et $\sqrt{9} = 3$ :

  $$
  X_1 = \frac{5 - 3}{2} = 1
  \qquad\text{et}\qquad
  X_2 = \frac{5 + 3}{2} = 4.
  $$

  **3.** On revient à $x$ :

  - $x^2 = 1 \iff x = -1$ ou $x = 1$ ;
  - $x^2 = 4 \iff x = -2$ ou $x = 2$.

  Donc $S = \{-2\,;\,-1\,;\,1\,;\,2\}$.
---
