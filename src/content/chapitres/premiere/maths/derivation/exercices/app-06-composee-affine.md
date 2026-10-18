---
titre: Dériver une fonction composée avec une fonction affine
type: application
notion: Composée avec une fonction affine
difficulte: Moyen
ordre: 6
enonce: |
  Calculer la dérivée des fonctions suivantes.

  1. $f(x) = \sqrt{3x + 6}$ sur $\interoo{-2}{+\infty}$
  2. $g(x) = (2x - 5)^4$ sur $\R$
  3. $h(x) = \dfrac{1}{4 - x}$ sur $\interoo{-\infty}{4}$
indices:
  - |
    Chaque fonction est de la forme $x \mapsto u(ax + b)$ avec $u$ une fonction usuelle : racine carrée, puissance $4$, inverse.
  - |
    La dérivée de $x \mapsto u(ax + b)$ est $x \mapsto a\,u'(ax + b)$. Pour $h$, attention : $a = -1$.
correction: |
  **1.** $f(x) = u(3x + 6)$ avec $u(X) = \sqrt{X}$, $u'(X) = \dfrac{1}{2\sqrt{X}}$ et $a = 3$ ($3x + 6 > 0$ sur l’intervalle) :

  $$
  f'(x) = 3 \times \frac{1}{2\sqrt{3x + 6}} = \frac{3}{2\sqrt{3x + 6}}.
  $$

  **2.** $g(x) = u(2x - 5)$ avec $u(X) = X^4$, $u'(X) = 4X^3$ et $a = 2$ :

  $$
  g'(x) = 2 \times 4(2x - 5)^3 = 8(2x - 5)^3.
  $$

  **3.** $h(x) = u(-x + 4)$ avec $u(X) = \dfrac{1}{X}$, $u'(X) = -\dfrac{1}{X^2}$ et $a = -1$ :

  $$
  h'(x) = -1 \times \left(-\frac{1}{(4 - x)^2}\right) = \frac{1}{(4 - x)^2}.
  $$
---
