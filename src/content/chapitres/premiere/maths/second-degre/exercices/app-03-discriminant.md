---
titre: Calculer le discriminant et résoudre
type: application
notion: Discriminant et racines
difficulte: Facile
ordre: 3
enonce: |
  Résoudre dans $\R$ les équations suivantes.

  1. $3x^2 - 5x - 2 = 0$
  2. $x^2 - 6x + 9 = 0$
  3. $-2x^2 + x - 3 = 0$
indices:
  - |
    Chaque équation est de la forme $ax^2 + bx + c = 0$. Commence par identifier $a$, $b$ et $c$ (attention aux signes), puis calcule le discriminant.
  - |
    $\Delta = b^2 - 4ac$. Si $\Delta > 0$, les solutions sont $\dfrac{-b - \sqrt{\Delta}}{2a}$ et $\dfrac{-b + \sqrt{\Delta}}{2a}$ ; si $\Delta = 0$, l’unique solution est $-\dfrac{b}{2a}$ ; si $\Delta < 0$, il n’y en a pas.
correction: |
  **1.** $a = 3$, $b = -5$, $c = -2$.

  $\Delta = (-5)^2 - 4 \times 3 \times (-2) = 25 + 24 = 49 > 0$ et $\sqrt{49} = 7$.

  $$
  x_1 = \frac{5 - 7}{6} = -\frac{1}{3}
  \qquad\text{et}\qquad
  x_2 = \frac{5 + 7}{6} = 2.
  $$

  $S = \left\{-\dfrac{1}{3}\,;\,2\right\}$.

  **2.** $a = 1$, $b = -6$, $c = 9$. $\Delta = 36 - 36 = 0$ : une seule solution, $x_0 = -\dfrac{-6}{2 \times 1} = 3$.

  On pouvait aussi reconnaître l’identité remarquable $x^2 - 6x + 9 = (x - 3)^2$. $S = \{3\}$.

  **3.** $a = -2$, $b = 1$, $c = -3$. $\Delta = 1 - 4 \times (-2) \times (-3) = 1 - 24 = -23 < 0$.

  L’équation n’a pas de solution réelle : $S = \varnothing$.
---
