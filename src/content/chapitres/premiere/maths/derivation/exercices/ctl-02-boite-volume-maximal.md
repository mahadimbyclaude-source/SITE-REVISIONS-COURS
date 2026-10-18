---
titre: La boîte de volume maximal
type: controle
difficulte: Moyen
duree_estimee: 30
chapitres_mobilises:
  - derivation
  - second-degre
ordre: 2
enonce: |
  Dans une feuille carrée de carton de $30$ cm de côté, on découpe aux quatre coins un carré de côté $x$ cm, puis on relève les bords pour obtenir une boîte sans couvercle.

  1. Justifier que $x \in \interoo{0}{15}$ et que le volume de la boîte, en $\text{cm}^3$, est $V(x) = x(30 - 2x)^2$.
  2. Montrer que $V(x) = 4x^3 - 120x^2 + 900x$.
  3. Calculer $V'(x)$ et montrer que $V'(x) = 12(x^2 - 20x + 75)$.
  4. Étudier le signe de $V'(x)$ sur $\interoo{0}{15}$, puis dresser le tableau de variations de $V$.
  5. Pour quelle valeur de $x$ le volume est-il maximal ? Donner ce volume maximal.
indices:
  - |
    La boîte a pour hauteur $x$ et pour fond un carré de côté $30 - 2x$. Ensuite, c’est une étude de variations classique : dérivée, signe de la dérivée (un trinôme), tableau.
  - |
    $(30 - 2x)^2 = 900 - 120x + 4x^2$. Le trinôme $x^2 - 20x + 75$ a pour discriminant $\Delta = 400 - 300 = 100$, donc deux racines : $5$ et $15$.
correction: |
  **1.** Le côté découpé doit être positif et la largeur du fond $30 - 2x$ aussi : $x > 0$ et $30 - 2x > 0$, soit $x \in \interoo{0}{15}$. La boîte est un pavé de hauteur $x$ et de base carrée de côté $30 - 2x$ : $V(x) = x(30 - 2x)^2$.

  **2.** $(30 - 2x)^2 = 900 - 120x + 4x^2$, donc $V(x) = x(4x^2 - 120x + 900) = 4x^3 - 120x^2 + 900x$.

  **3.** $V'(x) = 12x^2 - 240x + 900 = 12(x^2 - 20x + 75)$.

  **4.** $\Delta = 400 - 300 = 100$, racines $\dfrac{20 - 10}{2} = 5$ et $\dfrac{20 + 10}{2} = 15$. Donc $V'(x) = 12(x - 5)(x - 15)$.

  Sur $\interoo{0}{15}$, $x - 15 < 0$ : $V'(x)$ est positif sur $\interoo{0}{5}$ et négatif sur $\interoo{5}{15}$.

  $$
  \begin{array}{|c|ccccc|}
  \hline
  x & 0 & & 5 & & 15 \\
  \hline
  V'(x) & & + & 0 & - & \\
  \hline
   & & & 2\,000 & & \\
  V & & \nearrow & & \searrow & \\
   & & & & & \\
  \hline
  \end{array}
  $$

  **5.** Le volume est maximal pour $x = 5$ cm : $V(5) = 5 \times 20^2 = 2\,000~\text{cm}^3$, soit $2$ litres.
---
