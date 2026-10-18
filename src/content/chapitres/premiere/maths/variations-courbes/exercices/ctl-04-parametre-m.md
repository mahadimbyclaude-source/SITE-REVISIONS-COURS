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
  **1.** $f_m'(x) = 3x^2 + m$.

  **2.** Si $m \geq 0$, alors $3x^2 + m \geq 0$ pour tout $x$. Donc $f_m$ est croissante sur $\R$.

  **3.** Si $m < 0$, alors $-\dfrac{m}{3} > 0$. On pose $\alpha = \sqrt{-\dfrac{m}{3}}$. Alors $f_m'(x) = 3(x^2 - \alpha^2) = 3(x - \alpha)(x + \alpha)$ s’annule en $-\alpha$ et en $\alpha$, et elle est positive à l’extérieur de $[-\alpha\,;\,\alpha]$.

  On calcule $f_m(-\alpha) = -\alpha^3 - m\alpha = \alpha(-\alpha^2 - m) = \alpha(\dfrac{m}{3} - m) = -\dfrac{2m\alpha}{3}$ et $f_m(\alpha) = \dfrac{2m\alpha}{3}$ (valeur négative car $m < 0$ et $\alpha > 0$).

  $$
  \begin{array}{c|ccccccc}
  x & -\infty & & -\alpha & & \alpha & & +\infty \\ \hline
  f_m'(x) & & + & 0 & - & 0 & + & \\ \hline
  f_m & & \nearrow & -\frac{2m\alpha}{3} & \searrow & \frac{2m\alpha}{3} & \nearrow &
  \end{array}
  $$

  **4.** Pour $m = -12$, $\alpha = \sqrt{4} = 2$ : $f_{-12}(-2) = -8 + 24 = 16$ (maximum local) et $f_{-12}(2) = 8 - 24 = -16$ (minimum local).

  $f_{-12}(x) = x^3 - 12x = x(x^2 - 12) = x(x - 2\sqrt{3})(x + 2\sqrt{3})$. Les solutions sont $-2\sqrt{3}$, $0$ et $2\sqrt{3}$ : **trois solutions**, ce qui est cohérent avec le tableau puisque $0$ est strictement compris entre $-16$ et $16$.

  **5.** $f_m'(1) = 3 + m = 0$ équivaut à $m = -3$. Pour $m = -3$, $f_{-3}'(x) = 3(x - 1)(x + 1)$ change de signe en $x = 1$ (de $-$ à $+$) : $f_{-3}$ admet donc un minimum local en $x = 1$, égal à $f_{-3}(1) = 1 - 3 = -2$.
---
