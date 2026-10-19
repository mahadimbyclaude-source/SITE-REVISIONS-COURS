---
titre: Hauteur d’eau et marée
type: controle
difficulte: Difficile
duree_estimee: 40
chapitres_mobilises:
  - trigonometrie
  - derivation
ordre: 3

enonce: |
  La hauteur d’eau, en mètres, dans un port est modélisée en fonction du temps $t$ (en heures, $t \in \interff{0}{12}$) par $h(t) = 3 + 2\cos\left(\dfrac{\pi t}{6}\right)$.

  1. Calculer $h(0)$, $h(6)$ et $h(12)$. Interpréter.
  2. Calculer $h'(t)$ puis dresser le tableau de variations de $h$ sur $\interff{0}{12}$.
  3. Pendant quelles durées la hauteur d’eau est-elle supérieure ou égale à $4$ mètres ?
  4. La vitesse de variation de la hauteur est donnée par $h'(t)$. Déterminer à quels instants elle est maximale en valeur absolue et donner cette valeur exacte.

indices:
  - |
    Piste générale : $\cos\left(\dfrac{\pi t}{6}\right)$ vaut $1$ pour $t = 0$, $-1$ pour $t = 6$.
  - |
    Pour la question 3 : $h(t) \geq 4$ équivaut à $\cos\left(\dfrac{\pi t}{6}\right) \geq \dfrac{1}{2}$. Pose $x = \dfrac{\pi t}{6}$ avec $x \in \interff{0}{2\pi}$ puis utilise le cercle trigonométrique.
  - |
    Pour la question 4, $h'(t) = -\dfrac{\pi}{3}\sin\left(\dfrac{\pi t}{6}\right)$. La valeur absolue est maximale quand $\left|\sin\left(\dfrac{\pi t}{6}\right)\right| = 1$.

correction: |
  **1.** On calcule :

  $$
  h(0) = 3 + 2\cos 0 = 5, \qquad h(6) = 3 + 2\cos\pi = 1, \qquad h(12) = 3 + 2\cos 2\pi = 5.
  $$

  La marée est haute ($5$ m) aux instants $t = 0$ et $t = 12$, et basse ($1$ m) à l'instant $t = 6$.

  **2.** La fonction $h$ est dérivable sur $\interff{0}{12}$ et

  $$
  h'(t) = 2 \times \left(-\frac{\pi}{6}\right)\sin\left(\frac{\pi t}{6}\right) = -\frac{\pi}{3}\sin\left(\frac{\pi t}{6}\right).
  $$

  - Pour $t \in \interff{0}{6}$, $\dfrac{\pi t}{6} \in \interff{0}{\pi}$, donc $\sin\left(\dfrac{\pi t}{6}\right) \geq 0$ et $h'(t) \leq 0$ ;
  - pour $t \in \interff{6}{12}$, $\dfrac{\pi t}{6} \in \interff{\pi}{2\pi}$, donc $\sin\left(\dfrac{\pi t}{6}\right) \leq 0$ et $h'(t) \geq 0$.

  $$
  \begin{array}{c|ccccc}
  t & 0 & & 6 & & 12 \\ \hline
  h'(t) & & - & 0 & + & \\ \hline
  h & 5 & \searrow & 1 & \nearrow & 5
  \end{array}
  $$

  **3.** On a $h(t) \geq 4$ si et seulement si $2\cos\left(\dfrac{\pi t}{6}\right) \geq 1$, soit $\cos\left(\dfrac{\pi t}{6}\right) \geq \dfrac{1}{2}$. On pose $x = \dfrac{\pi t}{6}$, avec $x \in \interff{0}{2\pi}$ quand $t \in \interff{0}{12}$. Sur le cercle trigonométrique, $\cos x \geq \dfrac{1}{2}$ pour $x \in \left[0\,;\,\dfrac{\pi}{3}\right] \cup \left[\dfrac{5\pi}{3}\,;\,2\pi\right]$. En revenant à $t = \dfrac{6x}{\pi}$ :

  $$
  t \in \interff{0}{2} \cup \interff{10}{12}.
  $$

  La hauteur d'eau est supérieure ou égale à $4$ m pendant les deux premières heures ($0 \leq t \leq 2$) et pendant les deux dernières ($10 \leq t \leq 12$).

  **4.** On a $|h'(t)| = \dfrac{\pi}{3}\left|\sin\left(\dfrac{\pi t}{6}\right)\right|$. Cette quantité est maximale quand $\left|\sin\left(\dfrac{\pi t}{6}\right)\right| = 1$, c'est-à-dire $\dfrac{\pi t}{6} = \dfrac{\pi}{2}$ ou $\dfrac{3\pi}{2}$, soit $t = 3$ ou $t = 9$.

  La vitesse de variation est maximale en valeur absolue aux instants $t = 3$ et $t = 9$, et vaut alors $\dfrac{\pi}{3} \approx 1,05$ m par heure.
---
