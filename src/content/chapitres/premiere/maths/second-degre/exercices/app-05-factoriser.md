---
titre: Factoriser un trinôme
type: application
notion: Factorisation
difficulte: Facile
ordre: 5
enonce: |
  Factoriser, lorsque c’est possible, les trinômes suivants.

  1. $A(x) = 2x^2 + 2x - 12$
  2. $B(x) = 9x^2 - 12x + 4$
indices:
  - |
    Pour factoriser, il faut connaître les racines du trinôme : commence par calculer $\Delta$.
  - |
    Si $\Delta > 0$ : $a(x - x_1)(x - x_2)$. Si $\Delta = 0$ : $a(x - x_0)^2$. N’oublie pas le coefficient $a$ devant !
correction: |
  **1.** $a = 2$, $b = 2$, $c = -12$. $\Delta = 4 - 4 \times 2 \times (-12) = 4 + 96 = 100 > 0$ et $\sqrt{100} = 10$.

  $$
  x_1 = \frac{-2 - 10}{4} = -3
  \qquad\text{et}\qquad
  x_2 = \frac{-2 + 10}{4} = 2.
  $$

  Donc $A(x) = 2(x + 3)(x - 2)$.

  Vérification : $2(x + 3)(x - 2) = 2(x^2 + x - 6) = 2x^2 + 2x - 12$.

  **2.** $a = 9$, $b = -12$, $c = 4$. $\Delta = 144 - 144 = 0$ : une racine double $x_0 = -\dfrac{-12}{2 \times 9} = \dfrac{12}{18} = \dfrac{2}{3}$.

  $$
  B(x) = 9\left(x - \frac{2}{3}\right)^2 = (3x - 2)^2.
  $$
---
