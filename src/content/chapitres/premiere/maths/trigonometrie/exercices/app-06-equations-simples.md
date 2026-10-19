---
titre: Résoudre des équations trigonométriques
type: application
notion: 'Équations $\cos x = a$ et $\sin x = a$'
difficulte: Moyen
ordre: 6

enonce: |
  Résoudre les équations suivantes sur l’intervalle indiqué.

  1. $\cos x = \dfrac{\sqrt{3}}{2}$ sur $\interof{-\pi}{\pi}$.
  2. $\sin x = \dfrac{1}{2}$ sur $\interfo{0}{2\pi}$.
  3. $\cos x = -\dfrac{1}{2}$ sur $\interfo{0}{2\pi}$.
  4. $\sin x = -\dfrac{\sqrt{2}}{2}$ sur $\interof{-\pi}{\pi}$.

indices:
  - |
    Piste générale : cherche d’abord un angle $\alpha$ de $\left[0\,;\,\dfrac{\pi}{2}\right]$ qui correspond à la valeur absolue de $a$, puis utilise les symétries.
  - |
    Plus précis : $\cos x = \cos\alpha$ donne $x = \alpha$ ou $x = -\alpha$ ; $\sin x = \sin\alpha$ donne $x = \alpha$ ou $x = \pi - \alpha$ (à $2\pi$ près).

correction: |
  Pour chaque équation, on cherche un angle $\alpha$ connu qui convient, puis on utilise les symétries du cercle trigonométrique et on garde les solutions de l'intervalle.

  **1.** On a $\cos\dfrac{\pi}{6} = \dfrac{\sqrt{3}}{2}$. L'équation $\cos x = \cos\dfrac{\pi}{6}$ a pour solutions $x = \dfrac{\pi}{6}$ ou $x = -\dfrac{\pi}{6}$ (à $2\pi$ près), qui sont toutes deux dans $\interof{-\pi}{\pi}$.

  $S = \left\{-\dfrac{\pi}{6}\,;\,\dfrac{\pi}{6}\right\}$.

  **2.** On a $\sin\dfrac{\pi}{6} = \dfrac{1}{2}$. L'équation $\sin x = \sin\dfrac{\pi}{6}$ a pour solutions $x = \dfrac{\pi}{6}$ ou $x = \pi - \dfrac{\pi}{6} = \dfrac{5\pi}{6}$ (à $2\pi$ près), qui sont dans $\interfo{0}{2\pi}$.

  $S = \left\{\dfrac{\pi}{6}\,;\,\dfrac{5\pi}{6}\right\}$.

  **3.** On a $\cos\dfrac{2\pi}{3} = -\dfrac{1}{2}$. Les solutions de $\cos x = \cos\dfrac{2\pi}{3}$ sont $x = \dfrac{2\pi}{3}$ ou $x = -\dfrac{2\pi}{3}$ (à $2\pi$ près). Dans $\interfo{0}{2\pi}$, on remplace $-\dfrac{2\pi}{3}$ par $-\dfrac{2\pi}{3} + 2\pi = \dfrac{4\pi}{3}$.

  $S = \left\{\dfrac{2\pi}{3}\,;\,\dfrac{4\pi}{3}\right\}$.

  **4.** On a $\sin\left(-\dfrac{\pi}{4}\right) = -\dfrac{\sqrt{2}}{2}$. Les solutions de $\sin x = \sin\left(-\dfrac{\pi}{4}\right)$ sont $x = -\dfrac{\pi}{4}$ ou $x = \pi - \left(-\dfrac{\pi}{4}\right) = \dfrac{5\pi}{4}$ (à $2\pi$ près). Or $\dfrac{5\pi}{4} \notin \interof{-\pi}{\pi}$ : on le remplace par $\dfrac{5\pi}{4} - 2\pi = -\dfrac{3\pi}{4}$.

  $S = \left\{-\dfrac{3\pi}{4}\,;\,-\dfrac{\pi}{4}\right\}$.
---
