---
titre: Une suite définie par un cosinus
type: controle
difficulte: Difficile
duree_estimee: 40
chapitres_mobilises:
  - trigonometrie
  - suites
ordre: 4

enonce: |
  On définit la suite $(u_n)$ par $u_n = \cos\left(\dfrac{n\pi}{3}\right)$ pour tout $n \in \N$.

  1. Calculer $u_0, u_1, u_2, u_3, u_4, u_5$.
  2. Montrer que $u_{n+6} = u_n$ pour tout $n \in \N$.
  3. La suite $(u_n)$ est-elle arithmétique ? géométrique ? monotone ?
  4. En déduire $u_{2024}$.
  5. Calculer $u_0 + u_1 + \cdots + u_5$ puis $u_0 + u_1 + \cdots + u_{2024}$.

indices:
  - |
    Piste générale : utilise les valeurs remarquables et les angles associés pour $\cos\dfrac{n\pi}{3}$.
  - |
    Pour la question 2 : $\dfrac{(n+6)\pi}{3} = \dfrac{n\pi}{3} + 2\pi$.
  - |
    Pour la question 5, découpe la somme en paquets de $6$ termes consécutifs : $2025 = 6 \times 337 + 3$.

correction: |
  **1.** $u_0 = 1$, $u_1 = \dfrac{1}{2}$, $u_2 = \cos\dfrac{2\pi}{3} = -\dfrac{1}{2}$, $u_3 = \cos\pi = -1$, $u_4 = \cos\dfrac{4\pi}{3} = -\dfrac{1}{2}$ et $u_5 = \cos\dfrac{5\pi}{3} = \dfrac{1}{2}$.

  **2.** $u_{n+6} = \cos\left(\dfrac{n\pi}{3} + 2\pi\right) = \cos\left(\dfrac{n\pi}{3}\right) = u_n$ par $2\pi$-périodicité du cosinus.

  **3.** $u_1 - u_0 = -\dfrac{1}{2}$ et $u_2 - u_1 = -1$ : pas de différence constante, la suite n’est pas arithmétique. $\dfrac{u_1}{u_0} = \dfrac{1}{2}$ et $\dfrac{u_2}{u_1} = -1$ : pas de quotient constant, elle n’est pas géométrique. Elle est croissante entre $u_5$ et $u_6 = u_0$ mais décroissante entre $u_0$ et $u_3$ : elle n’est pas monotone.

  **4.** $2024 = 6 \times 337 + 2$ donc $u_{2024} = u_2 = -\dfrac{1}{2}$.

  **5.** $u_0 + \cdots + u_5 = 1 + \dfrac{1}{2} - \dfrac{1}{2} - 1 - \dfrac{1}{2} + \dfrac{1}{2} = 0$.

  La somme $u_0 + \cdots + u_{2024}$ compte $2025$ termes, soit $337$ paquets de $6$ termes (de somme nulle chacun) puis $3$ termes restants $u_{2022} + u_{2023} + u_{2024} = u_0 + u_1 + u_2 = 1 + \dfrac{1}{2} - \dfrac{1}{2} = 1$. La somme vaut donc $1$.
---
