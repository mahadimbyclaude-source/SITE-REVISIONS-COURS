---
titre: Fonctions affines
type: application
notion: Fonction affine
difficulte: Facile
ordre: 7

enonce: |
  Soit $A(1\,;\,3)$ et $B(3\,;\,7)$.

  1. Déterminer l’expression de la fonction affine $f$ dont la droite passe par $A$ et $B$.
  2. Calculer $f(5)$.
  3. Déterminer l’antécédent de $15$ par $f$.
  4. Déterminer le point d’intersection de la droite avec celle d’équation $y = -x + 7$.

indices:
  - |
    Piste générale : coefficient directeur $m = \dfrac{y_B - y_A}{x_B - x_A}$ puis ordonnée à l’origine avec un point.
  - |
    Plus précis : l’intersection se trouve en résolvant $f(x) = -x + 7$.

correction: |
  **1.** La fonction affine $f$ est de la forme $f(x) = mx + p$. Son coefficient directeur est

  $$
  m = \frac{y_B - y_A}{x_B - x_A} = \frac{7 - 3}{3 - 1} = 2.
  $$

  Comme $A(1\,;\,3)$ appartient à la droite, $f(1) = 3$, soit $2 \times 1 + p = 3$, donc $p = 1$. Ainsi $f(x) = 2x + 1$ (on vérifie : $f(3) = 7$).

  **2.** $f(5) = 2 \times 5 + 1 = 11$.

  **3.** L'antécédent de $15$ est la solution de $f(x) = 15$ : $2x + 1 = 15 \iff 2x = 14 \iff x = 7$.

  **4.** Les abscisses des points d'intersection vérifient $f(x) = -x + 7$ :

  $$
  2x + 1 = -x + 7 \iff 3x = 6 \iff x = 2.
  $$

  L'ordonnée est $y = f(2) = 2 \times 2 + 1 = 5$. Les deux droites se coupent au point $(2\,;\,5)$.
---
