---
titre: 'Étude de $f(x) = 2\sin x - \sin(2x)$'
type: controle
difficulte: Difficile
duree_estimee: 40
chapitres_mobilises:
  - trigonometrie
  - derivation
  - second-degre
ordre: 1

enonce: |
  Soit $f(x) = 2\sin x - \sin(2x)$ définie sur $\R$.

  1. Montrer que $f$ est impaire et $2\pi$-périodique. Pourquoi peut-on se limiter à l’étude sur $\interff{0}{\pi}$ ?
  2. Montrer que $f(x) = 2\sin x\,(1 - \cos x)$.
  3. Montrer que $f'(x) = 2(2\cos x + 1)(1 - \cos x)$.
  4. Étudier le signe de $f'$ sur $\interff{0}{\pi}$ et dresser le tableau de variations de $f$ sur $\interff{0}{\pi}$.
  5. Résoudre $f(x) = 0$ sur $\interff{0}{\pi}$.

indices:
  - |
    Piste générale : $\sin(2x) = 2\sin x\cos x$ et $\cos(2x) = 2\cos^2 x - 1$.
  - |
    Pour la question 3 : $f'(x) = 2\cos x - 2\cos(2x) = 2\cos x - 2(2\cos^2 x - 1) = -4\cos^2 x + 2\cos x + 2$. Factorise le trinôme en $\cos x$ : $-2(2X^2 - X - 1)$ avec $X = \cos x$ et $2X^2 - X - 1 = (2X + 1)(X - 1)$.
  - |
    Pour la question 4, $1 - \cos x \geq 0$ pour tout $x$ et il s’annule seulement en $x = 0$ sur $\interff{0}{\pi}$. Le signe de $f'$ est donc celui de $2\cos x + 1$ : positif tant que $\cos x > -\dfrac{1}{2}$.

correction: |
  **1.** Pour tout $x \in \R$ :

  $$
  f(-x) = 2\sin(-x) - \sin(-2x) = -2\sin x + \sin(2x) = -f(x),
  $$

  donc $f$ est **impaire**. De plus,

  $$
  f(x + 2\pi) = 2\sin(x + 2\pi) - \sin(2x + 4\pi) = 2\sin x - \sin(2x) = f(x),
  $$

  donc $f$ est $2\pi$-périodique. Il suffit alors d'étudier $f$ sur $\interff{0}{\pi}$ : par imparité, on en déduit l'étude sur $\interff{-\pi}{\pi}$ (symétrie par rapport à l'origine), puis par périodicité sur $\R$ tout entier.

  **2.** Avec $\sin(2x) = 2\sin x\cos x$ :

  $$
  f(x) = 2\sin x - 2\sin x\cos x = 2\sin x\,(1 - \cos x).
  $$

  **3.** La fonction $f$ est dérivable sur $\R$ et $f'(x) = 2\cos x - 2\cos(2x)$. Avec $\cos(2x) = 2\cos^2 x - 1$ :

  $$
  f'(x) = 2\cos x - 2(2\cos^2 x - 1) = -4\cos^2 x + 2\cos x + 2.
  $$

  On pose $X = \cos x$ : $-4X^2 + 2X + 2 = -2(2X^2 - X - 1)$, et $2X^2 - X - 1 = (2X + 1)(X - 1)$. Donc $-4X^2 + 2X + 2 = -2(2X + 1)(X - 1) = 2(2X + 1)(1 - X)$, soit

  $$
  f'(x) = 2(2\cos x + 1)(1 - \cos x).
  $$

  **4.** Pour tout $x$, $1 - \cos x \geq 0$, et cette quantité ne s'annule sur $\interff{0}{\pi}$ qu'en $x = 0$. Le signe de $f'(x)$ est donc celui de $2\cos x + 1$ : $2\cos x + 1 > 0$ équivaut à $\cos x > -\dfrac{1}{2}$, soit $x < \dfrac{2\pi}{3}$ sur $\interff{0}{\pi}$. Ainsi $f' > 0$ sur $\left]0\,;\,\dfrac{2\pi}{3}\right[$, $f'\left(\dfrac{2\pi}{3}\right) = 0$ et $f' < 0$ sur $\left]\dfrac{2\pi}{3}\,;\,\pi\right]$.

  On calcule $f(0) = 0$, $f(\pi) = 0$ et

  $$
  f\left(\frac{2\pi}{3}\right) = 2\sin\frac{2\pi}{3} - \sin\frac{4\pi}{3} = 2 \times \frac{\sqrt{3}}{2} + \frac{\sqrt{3}}{2} = \frac{3\sqrt{3}}{2}.
  $$

  $$
  \begin{array}{c|ccccc}
  x & 0 & & \frac{2\pi}{3} & & \pi \\ \hline
  f'(x) & & + & 0 & - & \\ \hline
  f & 0 & \nearrow & \frac{3\sqrt{3}}{2} & \searrow & 0
  \end{array}
  $$

  **5.** D'après la question 2, $f(x) = 0$ équivaut à $\sin x = 0$ ou $\cos x = 1$. Sur $\interff{0}{\pi}$, $\sin x = 0$ donne $x = 0$ ou $x = \pi$, et $\cos x = 1$ donne $x = 0$.

  $S = \{0\,;\,\pi\}$.
---
