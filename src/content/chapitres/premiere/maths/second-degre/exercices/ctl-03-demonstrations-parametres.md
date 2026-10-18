---
titre: Démonstration et trinômes à paramètre
type: controle
difficulte: Très difficile
duree_estimee: 50
chapitres_mobilises:
  - second-degre
  - Calcul littéral (Seconde)
ordre: 3
enonce: |
  **Partie A — Une démonstration du cours.**

  Soit $a$, $b$, $c$ trois réels avec $a \neq 0$, $f(x) = ax^2 + bx + c$ et $\Delta = b^2 - 4ac$.

  1. Montrer que, pour tout réel $x$ : $f(x) = a\left[\left(x + \dfrac{b}{2a}\right)^2 - \dfrac{\Delta}{4a^2}\right]$.
  2. En déduire que, si $\Delta < 0$, alors $f(x)$ est du signe de $a$ pour tout réel $x$.

  **Partie B — Un trinôme toujours positif.**

  Pour tout réel $m$, on pose $f_m(x) = mx^2 + (m + 1)x + m$.

  1. Étudier le cas $m = 0$.
  2. On suppose $m \neq 0$. Montrer que le discriminant de $f_m$ vaut $\Delta_m = (1 - m)(3m + 1)$.
  3. Déterminer l’ensemble des réels $m$ pour lesquels $f_m(x) > 0$ pour tout réel $x$.

  **Partie C — Somme des carrés des racines.**

  Pour tout réel $m$, on considère l’équation $x^2 - (m + 2)x + m = 0$.

  1. Montrer que cette équation admet toujours deux solutions distinctes $x_1$ et $x_2$.
  2. Exprimer $x_1^2 + x_2^2$ en fonction de $m$.
  3. Déterminer les valeurs de $m$ pour lesquelles $x_1^2 + x_2^2 = 10$.
indices:
  - |
    Partie A : factorise par $a$ et fais apparaître le début d’une identité remarquable. Partie B : un trinôme est strictement positif sur $\R$ quand il n’a pas de racine et que son coefficient dominant est positif. Partie C : pense à la somme et au produit des racines.
  - |
    Partie B : $\Delta_m = (m + 1)^2 - 4m^2$ est une différence de deux carrés ; il faut ensuite $m > 0$ **et** $\Delta_m < 0$, en étudiant le signe de $(1 - m)(3m + 1)$. Partie C : $x_1^2 + x_2^2 = (x_1 + x_2)^2 - 2x_1x_2$.
correction: |
  **Partie A.**

  **1.** Comme $a \neq 0$ :

  $$
  f(x) = a\left(x^2 + \frac{b}{a}x\right) + c
  = a\left[\left(x + \frac{b}{2a}\right)^2 - \frac{b^2}{4a^2}\right] + c
  = a\left[\left(x + \frac{b}{2a}\right)^2 - \frac{b^2 - 4ac}{4a^2}\right].
  $$

  **2.** Si $\Delta < 0$, alors $-\dfrac{\Delta}{4a^2} > 0$. Un carré étant positif, le crochet est strictement positif pour tout $x$. Donc $f(x)$, produit de $a$ par un nombre strictement positif, est du signe de $a$.

  **Partie B.**

  **1.** $f_0(x) = x$, qui est négatif pour $x < 0$ : $f_0$ n’est pas positive sur $\R$.

  **2.** $\Delta_m = (m + 1)^2 - 4m \times m = (m + 1)^2 - (2m)^2 = (m + 1 - 2m)(m + 1 + 2m) = (1 - m)(3m + 1)$.

  **3.** Si $\Delta_m \geq 0$, $f_m$ s’annule : elle n’est pas strictement positive partout. Si $\Delta_m < 0$, $f_m(x)$ est du signe de $m$ (partie A). Il faut donc $m > 0$ **et** $\Delta_m < 0$.

  $\Delta_m = -3m^2 + 2m + 1$ est un trinôme en $m$ de racines $-\dfrac{1}{3}$ et $1$, de coefficient dominant $-3 < 0$ :

  $$
  \begin{array}{|c|ccccccc|}
  \hline
  m & -\infty & & -\frac{1}{3} & & 1 & & +\infty \\
  \hline
  \Delta_m & & - & 0 & + & 0 & - & \\
  \hline
  \end{array}
  $$

  $\Delta_m < 0 \iff m < -\dfrac{1}{3}$ ou $m > 1$. Avec $m > 0$ : $f_m(x) > 0$ pour tout $x$ si et seulement si $m \in \interoo{1}{+\infty}$.

  **Partie C.**

  **1.** $\Delta = (m + 2)^2 - 4m = m^2 + 4m + 4 - 4m = m^2 + 4 > 0$ pour tout $m$ : deux solutions distinctes.

  **2.** $x_1 + x_2 = m + 2$ et $x_1 x_2 = m$, donc

  $$
  x_1^2 + x_2^2 = (x_1 + x_2)^2 - 2x_1x_2 = (m + 2)^2 - 2m = m^2 + 2m + 4.
  $$

  **3.** $m^2 + 2m + 4 = 10 \iff m^2 + 2m - 6 = 0$. $\Delta = 4 + 24 = 28$ et $\sqrt{28} = 2\sqrt{7}$ :

  $$
  m = \frac{-2 - 2\sqrt{7}}{2} = -1 - \sqrt{7}
  \qquad\text{ou}\qquad
  m = -1 + \sqrt{7}.
  $$

  Ces deux valeurs conviennent, puisque l’équation a deux solutions pour tout $m$.
---
