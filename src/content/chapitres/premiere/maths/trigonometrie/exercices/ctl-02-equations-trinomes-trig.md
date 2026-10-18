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
  **1.** Avec $X = \cos x$ : $2X^2 - X - 1 = 0$. On a $\Delta = 1 + 8 = 9$ et les racines $X = \dfrac{1 - 3}{4} = -\dfrac{1}{2}$ et $X = \dfrac{1 + 3}{4} = 1$, toutes deux dans $\interff{-1}{1}$.

  - $\cos x = 1$ donne $x = 0$.
  - $\cos x = -\dfrac{1}{2}$ donne $x = \dfrac{2\pi}{3}$ ou $x = -\dfrac{2\pi}{3}$.

  Solutions : $\left\{-\dfrac{2\pi}{3}\,;\,0\,;\,\dfrac{2\pi}{3}\right\}$.

  **2.** Avec $X = \sin x$ : $2X^2 + X - 1 = (2X - 1)(X + 1) \leq 0$. Le trinôme est de coefficient dominant positif, de racines $-1$ et $\dfrac{1}{2}$ : il est négatif ou nul pour $-1 \leq X \leq \dfrac{1}{2}$. Comme $\sin x \geq -1$ toujours, la condition revient à $\sin x \leq \dfrac{1}{2}$.

  Sur $\interff{0}{2\pi}$, $\sin x \leq \dfrac{1}{2}$ pour $x \in \left[0\,;\,\dfrac{\pi}{6}\right] \cup \left[\dfrac{5\pi}{6}\,;\,2\pi\right]$.

  **3.** $\sin^2 x = 1 - \cos^2 x$ donc l’équation devient $2(1 - \cos^2 x) - \cos x - 1 = 0$, soit $-2\cos^2 x - \cos x + 1 = 0$, c’est-à-dire $2\cos^2 x + \cos x - 1 = 0$. Avec $X = \cos x$ : $(2X - 1)(X + 1) = 0$, donc $X = \dfrac{1}{2}$ ou $X = -1$.

  - $\cos x = \dfrac{1}{2}$ donne $x = \dfrac{\pi}{3}$ ou $x = \dfrac{5\pi}{3}$.
  - $\cos x = -1$ donne $x = \pi$.

  Solutions : $\left\{\dfrac{\pi}{3}\,;\,\pi\,;\,\dfrac{5\pi}{3}\right\}$.
---
