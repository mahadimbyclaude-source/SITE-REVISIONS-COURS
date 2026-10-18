---
titre: Une boîte de volume maximal
type: controle
difficulte: Difficile
duree_estimee: 30
chapitres_mobilises:
  - variations-courbes
  - derivation
  - second-degre
ordre: 1

enonce: |
  On dispose d’une feuille de carton carrée de $30$ cm de côté. On découpe un carré de côté $x$ cm dans chaque coin, puis on replie les bords pour former une boîte sans couvercle. On cherche la valeur de $x$ qui rend le volume maximal.

  1. Justifier que $x$ appartient à l’intervalle $\interff{0}{15}$.
  2. Exprimer les dimensions de la boîte et montrer que son volume (en cm³) vaut $V(x) = x(30 - 2x)^2$.
  3. Montrer que $V'(x) = 12(x - 5)(x - 15)$.
  4. Dresser le tableau de variations de $V$ sur $\interff{0}{15}$.
  5. Conclure : pour quelle valeur de $x$ le volume est-il maximal et quel est ce volume ?

indices:
  - |
    Piste générale : la base de la boîte est un carré de côté $30 - 2x$ et sa hauteur est $x$.
  - |
    Plus précis : développe ou utilise la dérivée d’un produit : $V'(x) = (30 - 2x)^2 + x \times 2(30 - 2x) \times (-2)$. Factorise par $(30 - 2x)$.
  - |
    Pour la conclusion, écris une phrase complète avec l’unité (cm³).

correction: |
  **1.** On découpe deux carrés de côté $x$ sur chaque côté de $30$ cm : il faut $2x \leq 30$, donc $0 \leq x \leq 15$.

  **2.** La base est un carré de côté $30 - 2x$ et la hauteur vaut $x$ : $V(x) = x(30 - 2x)^2$.

  **3.** Avec $u(x) = x$ et $v(x) = (30 - 2x)^2$, on a $u'(x) = 1$ et $v'(x) = 2 \times (-2)(30 - 2x) = -4(30 - 2x)$. Donc

  $$
  V'(x) = (30 - 2x)^2 - 4x(30 - 2x) = (30 - 2x)(30 - 2x - 4x) = (30 - 2x)(30 - 6x).
  $$

  Comme $30 - 2x = -2(x - 15)$ et $30 - 6x = -6(x - 5)$, on obtient $V'(x) = 12(x - 5)(x - 15)$.

  **4.** $V'$ est un trinôme de coefficient dominant positif, de racines $5$ et $15$ : il est positif sur $\interff{0}{5}$ et négatif sur $\interff{5}{15}$. On a $V(0) = 0$, $V(5) = 5 \times 20^2 = 2000$ et $V(15) = 0$.

  $$
  \begin{array}{c|ccccc}
  x & 0 & & 5 & & 15 \\ \hline
  V'(x) & & + & 0 & - & \\ \hline
  V & 0 & \nearrow & 2000 & \searrow & 0
  \end{array}
  $$

  **5.** Le volume est maximal pour $x = 5$ cm et vaut alors $2000$ cm³.
---
