---
titre: Résoudre une inéquation du second degré
type: application
notion: Signe d’un trinôme
difficulte: Moyen
ordre: 6
enonce: |
  Résoudre dans $\R$ les inéquations suivantes.

  1. $-x^2 + x + 6 \geq 0$
  2. $2x^2 - 3x + 5 > 0$
indices:
  - |
    Le signe d’un trinôme dépend de $\Delta$ et du signe de $a$. Commence par chercher les racines, puis dresse un tableau de signes.
  - |
    Un trinôme est du signe de $a$, sauf entre ses racines. Pour la 1, $a = -1 < 0$ : le trinôme est donc positif **entre** les racines.
correction: |
  **1.** $a = -1$, $b = 1$, $c = 6$. $\Delta = 1 + 24 = 25 > 0$ et $\sqrt{25} = 5$ :

  $$
  x_1 = \frac{-1 - 5}{-2} = 3
  \qquad\text{et}\qquad
  x_2 = \frac{-1 + 5}{-2} = -2.
  $$

  Comme $a < 0$, le trinôme est négatif à l’extérieur des racines et positif entre elles :

  $$
  \begin{array}{|c|ccccccc|}
  \hline
  x & -\infty & & -2 & & 3 & & +\infty \\
  \hline
  -x^2 + x + 6 & & - & 0 & + & 0 & - & \\
  \hline
  \end{array}
  $$

  On cherche où il est positif ou nul : $S = \interff{-2}{3}$ (crochets fermés car l’inégalité est large).

  **2.** $\Delta = 9 - 40 = -31 < 0$ : le trinôme n’a pas de racine et garde le signe de $a = 2 > 0$.

  Il est donc strictement positif pour tout réel $x$ : $S = \R$.
---
