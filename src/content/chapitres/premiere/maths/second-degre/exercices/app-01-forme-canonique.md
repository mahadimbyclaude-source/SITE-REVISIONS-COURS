---
titre: Mettre un trinôme sous forme canonique
type: application
notion: Forme canonique
difficulte: Facile
ordre: 1
enonce: |
  Écrire sous forme canonique les trinômes suivants.

  1. $f(x) = x^2 + 6x + 1$
  2. $g(x) = 2x^2 - 8x + 5$
indices:
  - |
    La forme canonique s’écrit $a(x - \alpha)^2 + \beta$. Tu peux soit calculer $\alpha$ et $\beta$ avec les formules du cours, soit faire apparaître le début d’une identité remarquable.
  - |
    $\alpha = -\dfrac{b}{2a}$ et $\beta = f(\alpha)$. Pour $f$ : $x^2 + 6x$ est le début de $(x + 3)^2 = x^2 + 6x + 9$. Pour $g$, factorise d’abord par $2$ : $g(x) = 2(x^2 - 4x) + 5$.
correction: |
  **1.** Ici $a = 1$ et $b = 6$, donc $\alpha = -\dfrac{6}{2 \times 1} = -3$ et $\beta = f(-3) = 9 - 18 + 1 = -8$.

  $$
  f(x) = (x + 3)^2 - 8.
  $$

  Vérification : $(x + 3)^2 - 8 = x^2 + 6x + 9 - 8 = x^2 + 6x + 1$.

  **2.** Ici $a = 2$ et $b = -8$, donc $\alpha = -\dfrac{-8}{2 \times 2} = 2$ et $\beta = g(2) = 8 - 16 + 5 = -3$.

  $$
  g(x) = 2(x - 2)^2 - 3.
  $$

  Vérification : $2(x - 2)^2 - 3 = 2(x^2 - 4x + 4) - 3 = 2x^2 - 8x + 5$.
---
