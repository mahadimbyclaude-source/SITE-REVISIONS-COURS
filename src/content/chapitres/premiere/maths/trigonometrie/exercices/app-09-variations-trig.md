---
titre: 'Variations avec $\cos x$ et $x$'
type: application
notion: Variations d’une fonction trigonométrique
difficulte: Moyen
ordre: 9

enonce: |
  Soit $f(x) = \cos x + \dfrac{x}{2}$ définie sur $\interff{0}{\pi}$.

  1. Calculer $f'(x)$.
  2. Résoudre $f'(x) = 0$ sur $\interff{0}{\pi}$.
  3. Dresser le tableau de variations de $f$ avec les valeurs exactes.

indices:
  - |
    Piste générale : $f'(x) = -\sin x + \dfrac{1}{2}$. Son signe dépend de la comparaison de $\sin x$ avec $\dfrac{1}{2}$.
  - |
    Plus précis : $\sin x = \dfrac{1}{2}$ pour $x = \dfrac{\pi}{6}$ ou $x = \dfrac{5\pi}{6}$. Entre ces deux valeurs, $\sin x > \dfrac{1}{2}$.

correction: |
  **1.** $f'(x) = -\sin x + \dfrac{1}{2}$.

  **2.** $f'(x) = 0$ équivaut à $\sin x = \dfrac{1}{2}$, soit $x = \dfrac{\pi}{6}$ ou $x = \dfrac{5\pi}{6}$.

  **3.** $f'(x) > 0$ équivaut à $\sin x < \dfrac{1}{2}$, c’est-à-dire $x \in \left[0\,;\,\dfrac{\pi}{6}\right[$ ou $x \in \left]\dfrac{5\pi}{6}\,;\,\pi\right]$. On calcule $f(0) = 1$, $f\left(\dfrac{\pi}{6}\right) = \dfrac{\sqrt{3}}{2} + \dfrac{\pi}{12}$, $f\left(\dfrac{5\pi}{6}\right) = -\dfrac{\sqrt{3}}{2} + \dfrac{5\pi}{12}$ et $f(\pi) = -1 + \dfrac{\pi}{2}$.

  $$
  \begin{array}{c|ccccccc}
  x & 0 & & \frac{\pi}{6} & & \frac{5\pi}{6} & & \pi \\ \hline
  f'(x) & & + & 0 & - & 0 & + & \\ \hline
  f & 1 & \nearrow & \frac{\sqrt{3}}{2} + \frac{\pi}{12} & \searrow & -\frac{\sqrt{3}}{2} + \frac{5\pi}{12} & \nearrow & -1 + \frac{\pi}{2}
  \end{array}
  $$
---
