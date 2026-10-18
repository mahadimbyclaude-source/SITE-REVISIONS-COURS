---
titre: Dériver un quotient
type: application
notion: Dériver un quotient
difficulte: Facile
ordre: 5
enonce: |
  Calculer la dérivée des fonctions suivantes.

  1. $f(x) = \dfrac{3x - 1}{x + 2}$ sur $\interoo{-2}{+\infty}$
  2. $g(x) = \dfrac{1}{x^2 + 1}$ sur $\R$
indices:
  - |
    Pour $f$, c’est un quotient $\dfrac{u}{v}$ ; pour $g$, c’est l’inverse $\dfrac{1}{v}$ d’une fonction. Vérifie que le dénominateur ne s’annule pas.
  - |
    $\left(\dfrac{u}{v}\right)' = \dfrac{u'v - uv'}{v^2}$ et $\left(\dfrac{1}{v}\right)' = -\dfrac{v'}{v^2}$. Pour $f$ : $u(x) = 3x - 1$ et $v(x) = x + 2$.
correction: |
  **1.** $v(x) = x + 2$ ne s’annule pas sur $\interoo{-2}{+\infty}$. Avec $u'(x) = 3$ et $v'(x) = 1$ :

  $$
  f'(x) = \frac{3(x + 2) - (3x - 1) \times 1}{(x + 2)^2} = \frac{3x + 6 - 3x + 1}{(x + 2)^2} = \frac{7}{(x + 2)^2}.
  $$

  **2.** $v(x) = x^2 + 1 \geq 1 > 0$ ne s’annule jamais, et $v'(x) = 2x$ :

  $$
  g'(x) = -\frac{2x}{(x^2 + 1)^2}.
  $$
---
