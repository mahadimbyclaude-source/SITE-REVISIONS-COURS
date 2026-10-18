---
titre: Dériver un produit
type: application
notion: Dériver un produit
difficulte: Moyen
ordre: 4
enonce: |
  Calculer la dérivée des fonctions suivantes.

  1. $f(x) = (2x + 1)\sqrt{x}$ sur $\interoo{0}{+\infty}$ (donner le résultat sous la forme d’un seul quotient)
  2. $g(x) = (x^2 + 1)(3 - x)$ sur $\R$
indices:
  - |
    Chaque fonction est un produit $u \times v$ : identifie $u$ et $v$, puis calcule $u'$ et $v'$.
  - |
    $(uv)' = u'v + uv'$. Pour $f$ : $u(x) = 2x + 1$ et $v(x) = \sqrt{x}$. Pour tout mettre sur le dénominateur $2\sqrt{x}$, utilise $\sqrt{x} \times 2\sqrt{x} = 2x$.
correction: |
  **1.** $u(x) = 2x + 1$, $u'(x) = 2$ ; $v(x) = \sqrt{x}$, $v'(x) = \dfrac{1}{2\sqrt{x}}$.

  $$
  f'(x) = 2\sqrt{x} + (2x + 1) \times \frac{1}{2\sqrt{x}}
  = \frac{2\sqrt{x} \times 2\sqrt{x} + 2x + 1}{2\sqrt{x}}
  = \frac{4x + 2x + 1}{2\sqrt{x}}
  = \frac{6x + 1}{2\sqrt{x}}.
  $$

  **2.** $u(x) = x^2 + 1$, $u'(x) = 2x$ ; $v(x) = 3 - x$, $v'(x) = -1$.

  $$
  g'(x) = 2x(3 - x) + (x^2 + 1) \times (-1) = 6x - 2x^2 - x^2 - 1 = -3x^2 + 6x - 1.
  $$

  On peut vérifier en développant d’abord : $g(x) = -x^3 + 3x^2 - x + 3$, donc $g'(x) = -3x^2 + 6x - 1$.
---
