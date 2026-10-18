---
titre: Nombre dérivé à partir du taux de variation
type: application
notion: Nombre dérivé
difficulte: Moyen
ordre: 1
enonce: |
  Soit $f$ la fonction définie sur $\R$ par $f(x) = x^2 - 3x$.

  1. Montrer que, pour tout réel $h \neq 0$ : $\dfrac{f(2 + h) - f(2)}{h} = h + 1$.
  2. En déduire que $f$ est dérivable en $2$ et donner $f'(2)$.
indices:
  - |
    Calcule séparément $f(2 + h)$ et $f(2)$, puis simplifie la différence avant de diviser par $h$.
  - |
    $f(2 + h) = (2 + h)^2 - 3(2 + h)$ : développe avec $(2 + h)^2 = 4 + 4h + h^2$. Ensuite, regarde vers quoi tend $h + 1$ quand $h$ tend vers $0$.
correction: |
  **1.** $f(2 + h) = (2 + h)^2 - 3(2 + h) = 4 + 4h + h^2 - 6 - 3h = h^2 + h - 2$ et $f(2) = 4 - 6 = -2$.

  $$
  \frac{f(2 + h) - f(2)}{h} = \frac{h^2 + h - 2 + 2}{h} = \frac{h(h + 1)}{h} = h + 1.
  $$

  **2.** Quand $h$ tend vers $0$, $h + 1$ tend vers $1$, qui est un nombre réel. Donc $f$ est dérivable en $2$ et $f'(2) = 1$.

  Vérification avec la formule : $f'(x) = 2x - 3$, donc $f'(2) = 4 - 3 = 1$.
---
