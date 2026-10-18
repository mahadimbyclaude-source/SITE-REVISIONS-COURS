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
  **1.** $f(-x) = 2\sin(-x) - \sin(-2x) = -2\sin x + \sin(2x) = -f(x)$ : $f$ est impaire. $f(x + 2\pi) = 2\sin(x + 2\pi) - \sin(2x + 4\pi) = f(x)$ : $f$ est $2\pi$-périodique. On étudie $f$ sur $\interff{0}{\pi}$ puis on en déduit l’étude sur $\interff{-\pi}{\pi}$ par symétrie par rapport à l’origine, et sur $\R$ par périodicité.

  **2.** $f(x) = 2\sin x - 2\sin x\cos x = 2\sin x\,(1 - \cos x)$.

  **3.** $f'(x) = 2\cos x - 2\cos(2x) = 2\cos x - 2(2\cos^2 x - 1) = -4\cos^2 x + 2\cos x + 2$. Avec $X = \cos x$ : $-4X^2 + 2X + 2 = -2(2X^2 - X - 1) = -2(2X + 1)(X - 1) = 2(2X + 1)(1 - X)$. Donc

  $$
  f'(x) = 2(2\cos x + 1)(1 - \cos x).
  $$

  **4.** $1 - \cos x \geq 0$, avec égalité seulement pour $x = 0$ sur $\interff{0}{\pi}$. Le signe de $f'(x)$ est donc celui de $2\cos x + 1$ : $2\cos x + 1 > 0$ équivaut à $\cos x > -\dfrac{1}{2}$, soit $x < \dfrac{2\pi}{3}$ sur $\interff{0}{\pi}$.

  On calcule $f(0) = 0$, $f\left(\dfrac{2\pi}{3}\right) = 2\times\dfrac{\sqrt{3}}{2} - \sin\dfrac{4\pi}{3} = \sqrt{3} + \dfrac{\sqrt{3}}{2} = \dfrac{3\sqrt{3}}{2}$ et $f(\pi) = 0$.

  $$
  \begin{array}{c|ccccc}
  x & 0 & & \frac{2\pi}{3} & & \pi \\ \hline
  f'(x) & & + & 0 & - & \\ \hline
  f & 0 & \nearrow & \frac{3\sqrt{3}}{2} & \searrow & 0
  \end{array}
  $$

  **5.** $f(x) = 2\sin x\,(1 - \cos x) = 0$ si $\sin x = 0$ (soit $x = 0$ ou $x = \pi$) ou si $\cos x = 1$ (soit $x = 0$). Les solutions sont $0$ et $\pi$.
---
