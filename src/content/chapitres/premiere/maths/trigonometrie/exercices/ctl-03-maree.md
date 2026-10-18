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
  **1.** $h(0) = 3 + 2 = 5$, $h(6) = 3 + 2\cos\pi = 1$ et $h(12) = 3 + 2\cos 2\pi = 5$. La marée est haute ($5$ m) à $t = 0$ et $t = 12$, et basse ($1$ m) à $t = 6$.

  **2.** $h'(t) = 2 \times \left(-\dfrac{\pi}{6}\right)\sin\left(\dfrac{\pi t}{6}\right) = -\dfrac{\pi}{3}\sin\left(\dfrac{\pi t}{6}\right)$. Sur $\interff{0}{6}$, $\dfrac{\pi t}{6} \in \interff{0}{\pi}$ donc $\sin \geq 0$ et $h' \leq 0$. Sur $\interff{6}{12}$, $\dfrac{\pi t}{6} \in \interff{\pi}{2\pi}$ donc $\sin \leq 0$ et $h' \geq 0$.

  $$
  \begin{array}{c|ccccc}
  t & 0 & & 6 & & 12 \\ \hline
  h'(t) & & - & 0 & + & \\ \hline
  h & 5 & \searrow & 1 & \nearrow & 5
  \end{array}
  $$

  **3.** $h(t) \geq 4$ équivaut à $\cos\dfrac{\pi t}{6} \geq \dfrac{1}{2}$. Avec $x = \dfrac{\pi t}{6} \in \interff{0}{2\pi}$ : $\cos x \geq \dfrac{1}{2}$ pour $x \in \left[0\,;\,\dfrac{\pi}{3}\right] \cup \left[\dfrac{5\pi}{3}\,;\,2\pi\right]$. Donc $t \in \interff{0}{2} \cup \interff{10}{12}$. La hauteur est d’au moins $4$ m pendant $2$ h après $t = 0$ et pendant les $2$ dernières heures.

  **4.** $|h'(t)| = \dfrac{\pi}{3}\left|\sin\dfrac{\pi t}{6}\right|$ est maximale pour $\left|\sin\dfrac{\pi t}{6}\right| = 1$, soit $\dfrac{\pi t}{6} = \dfrac{\pi}{2}$ ou $\dfrac{3\pi}{2}$, donc $t = 3$ ou $t = 9$. La valeur maximale de $|h'|$ est $\dfrac{\pi}{3} \approx 1{,}05$ m/h.
---
