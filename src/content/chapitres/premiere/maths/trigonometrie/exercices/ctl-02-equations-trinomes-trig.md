---
titre: Équations et inéquations qui se ramènent à un trinôme
type: controle
difficulte: Difficile
duree_estimee: 40
chapitres_mobilises:
  - trigonometrie
  - second-degre
ordre: 2

enonce: |
  1. Résoudre sur $\interof{-\pi}{\pi}$ l’équation $2\cos^2 x - \cos x - 1 = 0$.
  2. Résoudre sur $\interff{0}{2\pi}$ l’inéquation $2\sin^2 x + \sin x - 1 \leq 0$.
  3. Résoudre sur $\interfo{0}{2\pi}$ l’équation $2\sin^2 x - \cos x - 1 = 0$.

indices:
  - |
    Piste générale : pose $X = \cos x$ (ou $X = \sin x$) et résous le trinôme en $X$. Rappelle-toi que $X \in \interff{-1}{1}$.
  - |
    Pour la question 2 : $2X^2 + X - 1 = (2X - 1)(X + 1)$. Étudie le signe de ce trinôme pour $X = \sin x$.
  - |
    Pour la question 3, remplace $\sin^2 x$ par $1 - \cos^2 x$ pour obtenir une équation en $\cos x$ seulement.

correction: |
  **1.** On pose $X = \cos x$, avec $X \in \interff{-1}{1}$. L'équation devient $2X^2 - X - 1 = 0$. Son discriminant est $\Delta = 1 + 8 = 9$, d'où les racines

  $$
  X_1 = \frac{1 - 3}{4} = -\frac{1}{2} \qquad\text{et}\qquad X_2 = \frac{1 + 3}{4} = 1,
  $$

  toutes deux dans $\interff{-1}{1}$. On revient à $x$ sur $\interof{-\pi}{\pi}$ :

  - $\cos x = 1$ donne $x = 0$ ;
  - $\cos x = -\dfrac{1}{2}$ donne $x = \dfrac{2\pi}{3}$ ou $x = -\dfrac{2\pi}{3}$.

  $S = \left\{-\dfrac{2\pi}{3}\,;\,0\,;\,\dfrac{2\pi}{3}\right\}$.

  **2.** On pose $X = \sin x$. L'inéquation devient $2X^2 + X - 1 \leq 0$. On factorise : $2X^2 + X - 1 = (2X - 1)(X + 1)$, trinôme de coefficient dominant positif et de racines $-1$ et $\dfrac{1}{2}$. Il est négatif ou nul entre ses racines : $-1 \leq X \leq \dfrac{1}{2}$. Comme $\sin x \geq -1$ pour tout $x$, la condition équivaut à $\sin x \leq \dfrac{1}{2}$.

  Sur $\interff{0}{2\pi}$, on a $\sin x \leq \dfrac{1}{2}$ pour

  $$
  x \in \left[0\,;\,\frac{\pi}{6}\right] \cup \left[\frac{5\pi}{6}\,;\,2\pi\right].
  $$

  **3.** Comme $\sin^2 x = 1 - \cos^2 x$, l'équation s'écrit $2(1 - \cos^2 x) - \cos x - 1 = 0$, soit $-2\cos^2 x - \cos x + 1 = 0$, c'est-à-dire $2\cos^2 x + \cos x - 1 = 0$. Avec $X = \cos x$ : $(2X - 1)(X + 1) = 0$, donc $X = \dfrac{1}{2}$ ou $X = -1$. Sur $\interfo{0}{2\pi}$ :

  - $\cos x = \dfrac{1}{2}$ donne $x = \dfrac{\pi}{3}$ ou $x = \dfrac{5\pi}{3}$ ;
  - $\cos x = -1$ donne $x = \pi$.

  $S = \left\{\dfrac{\pi}{3}\,;\,\pi\,;\,\dfrac{5\pi}{3}\right\}$.
---
