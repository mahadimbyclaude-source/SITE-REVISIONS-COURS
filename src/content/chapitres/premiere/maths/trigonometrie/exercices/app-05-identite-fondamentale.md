---
titre: 'Utiliser $\cos^2 x + \sin^2 x = 1$'
type: application
notion: Relation fondamentale
difficulte: Moyen
ordre: 5

enonce: |
  1. Soit $x \in \interff{0}{\pi}$ tel que $\cos x = \dfrac{3}{5}$. Calculer $\sin x$.
  2. Soit $x \in \interff{\dfrac{\pi}{2}}{\pi}$ tel que $\cos x = -\dfrac{5}{13}$. Calculer $\sin x$.
  3. Soit $x \in \interff{-\dfrac{\pi}{2}}{0}$ tel que $\sin x = -\dfrac{1}{3}$. Calculer $\cos x$.

indices:
  - |
    Piste générale : $\sin^2 x = 1 - \cos^2 x$, puis il reste à choisir le signe de $\sin x$ avec l’intervalle donné.
  - |
    Plus précis : sur $\interff{0}{\pi}$, le sinus est positif. Sur $\interff{-\dfrac{\pi}{2}}{\dfrac{\pi}{2}}$, le cosinus est positif.

correction: |
  Pour tout réel $x$, $\cos^2 x + \sin^2 x = 1$. On en déduit la valeur au carré, puis on choisit le signe avec l'intervalle donné.

  **1.** $\sin^2 x = 1 - \cos^2 x = 1 - \dfrac{9}{25} = \dfrac{16}{25}$. Sur $\interff{0}{\pi}$, $\sin x \geq 0$, donc $\sin x = \dfrac{4}{5}$.

  **2.** $\sin^2 x = 1 - \dfrac{25}{169} = \dfrac{144}{169}$. Sur $\interff{\dfrac{\pi}{2}}{\pi} \subset \interff{0}{\pi}$, $\sin x \geq 0$, donc $\sin x = \dfrac{12}{13}$.

  **3.** $\cos^2 x = 1 - \sin^2 x = 1 - \dfrac{1}{9} = \dfrac{8}{9}$. Sur $\interff{-\dfrac{\pi}{2}}{0}$, $\cos x \geq 0$, donc $\cos x = \dfrac{\sqrt{8}}{3} = \dfrac{2\sqrt{2}}{3}$.
---
