---
titre: Variations selon un paramètre
type: controle
difficulte: Très difficile
duree_estimee: 40
chapitres_mobilises:
  - variations-courbes
  - derivation
  - second-degre
ordre: 4

enonce: |
  Pour tout réel $m$, on considère la fonction $f_m$ définie sur $\R$ par $f_m(x) = x^3 + mx$.

  1. Calculer $f_m'(x)$.
  2. Cas $m \geq 0$ : montrer que $f_m$ est croissante sur $\R$.
  3. Cas $m < 0$ : montrer que $f_m'(x)$ s’annule en deux valeurs $-\alpha$ et $\alpha$ que l’on exprimera en fonction de $m$, puis dresser le tableau de variations de $f_m$.
  4. On prend $m = -12$. Donner les extremums locaux de $f_{-12}$ puis résoudre $f_{-12}(x) = 0$. Combien de solutions obtient-on ?
  5. Pour quelle valeur de $m$ la courbe de $f_m$ admet-elle une tangente horizontale au point d’abscisse $1$ ? Que peut-on dire de $f_m$ en $x = 1$ pour cette valeur ?

indices:
  - |
    Piste générale : $f_m'(x) = 3x^2 + m$. Le signe dépend de $m$.
  - |
    Plus précis : pour $m < 0$, résous $3x^2 + m = 0$, soit $x^2 = -\dfrac{m}{3}$. Cette quantité est strictement positive.
  - |
    Pour la question 5, résous $f_m'(1) = 0$ puis étudie le signe de $f_m'$ pour cette valeur de $m$.

correction: |
  **1.** Pour tout réel $m$, $f_m$ est dérivable sur $\R$ et

  $$
  f_m'(x) = 3x^2 + m.
  $$

  **2.** Si $m \geq 0$, alors pour tout réel $x$, $3x^2 \geq 0$ donc $f_m'(x) = 3x^2 + m \geq 0$. La dérivée est positive ou nulle sur $\R$ (et ne s'annule qu'en un point au plus) : $f_m$ est **croissante** sur $\R$.

  **3.** Si $m < 0$, alors $-\dfrac{m}{3} > 0$. On pose $\alpha = \sqrt{-\dfrac{m}{3}}$, de sorte que $\alpha^2 = -\dfrac{m}{3}$ et $m = -3\alpha^2$. Alors

  $$
  f_m'(x) = 3x^2 - 3\alpha^2 = 3(x - \alpha)(x + \alpha),
  $$

  qui s'annule en $-\alpha$ et en $\alpha$. Comme le coefficient dominant est positif, $f_m'$ est positive à l'extérieur de $[-\alpha\,;\,\alpha]$ et négative entre.

  On calcule les images : $f_m(\alpha) = \alpha^3 + m\alpha = \alpha(\alpha^2 + m) = \alpha\left(-\dfrac{m}{3} + m\right) = \dfrac{2m\alpha}{3}$, qui est négatif car $m < 0$ et $\alpha > 0$. Par imparité de $f_m$, $f_m(-\alpha) = -\dfrac{2m\alpha}{3}$.

  $$
  \begin{array}{c|ccccccc}
  x & -\infty & & -\alpha & & \alpha & & +\infty \\ \hline
  f_m'(x) & & + & 0 & - & 0 & + & \\ \hline
  f_m & & \nearrow & -\frac{2m\alpha}{3} & \searrow & \frac{2m\alpha}{3} & \nearrow &
  \end{array}
  $$

  **4.** Pour $m = -12$, on a $\alpha = \sqrt{\dfrac{12}{3}} = 2$. Les extremums locaux sont

  $$
  f_{-12}(-2) = -8 + 24 = 16 \quad\text{(maximum local)} \qquad\text{et}\qquad f_{-12}(2) = 8 - 24 = -16 \quad\text{(minimum local).}
  $$

  On résout $f_{-12}(x) = 0$ : $x^3 - 12x = x(x^2 - 12) = x\left(x - 2\sqrt{3}\right)\left(x + 2\sqrt{3}\right) = 0$, donc

  $$
  S = \left\{-2\sqrt{3}\,;\,0\,;\,2\sqrt{3}\right\}.
  $$

  On obtient **trois solutions**, ce qui est cohérent avec le tableau de variations : $0$ est strictement compris entre le minimum local $-16$ et le maximum local $16$.

  **5.** La tangente en $x = 1$ est horizontale si et seulement si $f_m'(1) = 0$, c'est-à-dire $3 + m = 0$, soit $m = -3$.

  Pour cette valeur, $f_{-3}'(x) = 3x^2 - 3 = 3(x - 1)(x + 1)$ s'annule en $x = 1$ **en changeant de signe** (négative avant $1$, positive après). Donc $f_{-3}$ admet en $x = 1$ un minimum local, égal à $f_{-3}(1) = 1 - 3 = -2$.
---
