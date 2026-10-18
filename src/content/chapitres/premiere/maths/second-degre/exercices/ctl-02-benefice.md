---
titre: Optimiser le bénéfice d’un artisan
type: controle
difficulte: Moyen
duree_estimee: 30
chapitres_mobilises:
  - second-degre
  - Fonctions (Seconde)
ordre: 2
enonce: |
  Un artisan fabrique et vend entre $0$ et $60$ objets par semaine. Le coût de fabrication de $x$ objets, en euros, est

  $$
  C(x) = x^2 + 10x + 500, \qquad x \in \interff{0}{60}.
  $$

  Chaque objet est vendu $70$ euros et toute la production est vendue.

  1. Exprimer la recette $R(x)$, puis montrer que le bénéfice vaut $B(x) = -x^2 + 60x - 500$.
  2. Écrire $B(x)$ sous forme canonique.
  3. Combien d’objets l’artisan doit-il vendre pour que son bénéfice soit maximal ? Quel est ce bénéfice maximal ?
  4. Pour quelles quantités l’artisan ne travaille-t-il pas à perte ?
  5. L’artisan veut gagner au moins $300$ euros par semaine. Combien d’objets doit-il vendre ?
indices:
  - |
    Le bénéfice est la différence entre la recette et le coût. Pour les questions 3 à 5, la forme canonique et le signe d’un trinôme sont les outils clés.
  - |
    $R(x) = 70x$. Forme canonique : $\alpha = -\dfrac{b}{2a} = 30$. Question 4 : résoudre $B(x) \geq 0$ sur $\interff{0}{60}$. Question 5 : $B(x) \geq 300$ revient à $-x^2 + 60x - 800 \geq 0$.
correction: |
  **1.** $R(x) = 70x$, donc $B(x) = R(x) - C(x) = 70x - x^2 - 10x - 500 = -x^2 + 60x - 500$.

  **2.** $\alpha = -\dfrac{60}{2 \times (-1)} = 30$ et $\beta = B(30) = -900 + 1800 - 500 = 400$.

  $$
  B(x) = -(x - 30)^2 + 400.
  $$

  **3.** Comme $-(x - 30)^2 \leq 0$, on a $B(x) \leq 400$, avec égalité pour $x = 30$. Le bénéfice est maximal pour **30 objets** et vaut **400 euros**.

  **4.** On résout $-x^2 + 60x - 500 \geq 0$. $\Delta = 3600 - 2000 = 1600$, $\sqrt{1600} = 40$ :

  $$
  x_1 = \frac{-60 - 40}{-2} = 50
  \qquad\text{et}\qquad
  x_2 = \frac{-60 + 40}{-2} = 10.
  $$

  $$
  \begin{array}{|c|ccccccc|}
  \hline
  x & 0 & & 10 & & 50 & & 60 \\
  \hline
  B(x) & & - & 0 & + & 0 & - & \\
  \hline
  \end{array}
  $$

  ($a = -1 < 0$ : le trinôme est positif entre ses racines.) L’artisan ne travaille pas à perte pour $x \in \interff{10}{50}$, c’est-à-dire entre $10$ et $50$ objets.

  **5.** $B(x) \geq 300 \iff -x^2 + 60x - 800 \geq 0$. $\Delta = 3600 - 3200 = 400$, $\sqrt{400} = 20$, racines $\dfrac{-60 - 20}{-2} = 40$ et $\dfrac{-60 + 20}{-2} = 20$.

  Le trinôme est positif entre ses racines : il faut vendre entre $20$ et $40$ objets.

  *Variante rapide avec la forme canonique :* $400 - (x - 30)^2 \geq 300 \iff (x - 30)^2 \leq 100 \iff -10 \leq x - 30 \leq 10 \iff 20 \leq x \leq 40$.
---
