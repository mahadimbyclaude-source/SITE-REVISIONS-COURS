---
titre: Étude complète d’une fonction rationnelle
type: controle
difficulte: Difficile
duree_estimee: 45
chapitres_mobilises:
  - derivation
  - second-degre
ordre: 1
enonce: |
  Soit $f$ la fonction définie sur $\R\setminus\{1\}$ par

  $$
  f(x) = \frac{x^2 + 3}{x - 1},
  $$

  et $\mathcal{C}_f$ sa courbe représentative dans un repère.

  1. Justifier que $f$ est dérivable sur $\interoo{-\infty}{1}$ et sur $\interoo{1}{+\infty}$, puis montrer que
     $$
     f'(x) = \frac{x^2 - 2x - 3}{(x - 1)^2}.
     $$
  2. Étudier le signe de $f'(x)$ selon les valeurs de $x$.
  3. Dresser le tableau de variations de $f$ (les limites ne sont pas demandées).
  4. Déterminer une équation de la tangente $T$ à $\mathcal{C}_f$ au point d’abscisse $0$.
  5. Existe-t-il un autre point de $\mathcal{C}_f$ où la tangente est parallèle à $T$ ? Si oui, donner une équation de cette tangente.
  6. Montrer que, pour tout $x > 1$, on a $f(x) \geq 6$.
indices:
  - |
    $f$ est un quotient : utilise $\left(\dfrac{u}{v}\right)' = \dfrac{u'v - uv'}{v^2}$. Le signe de $f'(x)$ est celui de son numérateur, qui est un trinôme du second degré : pense à $\Delta$ et au tableau de signes.
  - |
    Racines du numérateur : $-1$ et $3$. N’oublie pas la valeur interdite $1$ dans le tableau (double barre). Question 5 : deux droites sont parallèles si elles ont le même coefficient directeur, donc il faut résoudre $f'(x) = f'(0)$. Question 6 : lis le minimum de $f$ sur $\interoo{1}{+\infty}$ dans le tableau, ou étudie le signe de $f(x) - 6$.
correction: |
  **1.** $u(x) = x^2 + 3$ et $v(x) = x - 1$ sont dérivables, et $v$ ne s’annule pas sur chacun des deux intervalles : $f = \dfrac{u}{v}$ y est dérivable. Avec $u'(x) = 2x$ et $v'(x) = 1$ :

  $$
  f'(x) = \frac{2x(x - 1) - (x^2 + 3)}{(x - 1)^2} = \frac{2x^2 - 2x - x^2 - 3}{(x - 1)^2} = \frac{x^2 - 2x - 3}{(x - 1)^2}.
  $$

  **2.** Pour $x \neq 1$, $(x - 1)^2 > 0$ : $f'(x)$ a le signe de $x^2 - 2x - 3$.

  $\Delta = 4 + 12 = 16$, racines $\dfrac{2 - 4}{2} = -1$ et $\dfrac{2 + 4}{2} = 3$. Comme $a = 1 > 0$, le numérateur est positif à l’extérieur de $\interff{-1}{3}$ et négatif à l’intérieur.

  **3.** $f(-1) = \dfrac{1 + 3}{-2} = -2$ et $f(3) = \dfrac{9 + 3}{2} = 6$.

  $$
  \begin{array}{|c|ccccccccc|}
  \hline
  x & -\infty & & -1 & & 1 & & 3 & & +\infty \\
  \hline
  x^2 - 2x - 3 & & + & 0 & - & | & - & 0 & + & \\
  (x - 1)^2 & & + & | & + & 0 & + & | & + & \\
  \hline
  f'(x) & & + & 0 & - & \| & - & 0 & + & \\
  \hline
   & & & -2 & & \| & & & & \\
  f & & \nearrow & & \searrow & \| & \searrow & & \nearrow & \\
   & & & & & \| & & 6 & & \\
  \hline
  \end{array}
  $$

  $f$ admet un maximum local $-2$ en $x = -1$ et un minimum local $6$ en $x = 3$.

  **4.** $f(0) = \dfrac{3}{-1} = -3$ et $f'(0) = \dfrac{-3}{1} = -3$. Donc $T : y = -3(x - 0) - 3$, soit $y = -3x - 3$.

  **5.** On cherche les $x \neq 1$ tels que $f'(x) = -3$ :

  $$
  \frac{x^2 - 2x - 3}{(x - 1)^2} = -3
  \iff x^2 - 2x - 3 = -3(x^2 - 2x + 1)
  \iff 4x^2 - 8x = 0
  \iff 4x(x - 2) = 0.
  $$

  Les solutions sont $x = 0$ (le point de $T$) et $x = 2$. Au point d’abscisse $2$ : $f(2) = 7$, donc la tangente a pour équation $y = -3(x - 2) + 7$, soit $y = -3x + 13$.

  **6.** D’après le tableau, sur $\interoo{1}{+\infty}$, $f$ admet un minimum égal à $6$ (atteint en $3$). Donc $f(x) \geq 6$ pour tout $x > 1$.

  *Méthode algébrique :* pour $x > 1$,

  $$
  f(x) - 6 = \frac{x^2 + 3 - 6(x - 1)}{x - 1} = \frac{x^2 - 6x + 9}{x - 1} = \frac{(x - 3)^2}{x - 1} \geq 0.
  $$
---
