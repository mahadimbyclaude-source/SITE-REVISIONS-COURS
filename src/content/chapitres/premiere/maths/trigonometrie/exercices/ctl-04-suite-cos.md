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
  **1.** On utilise les valeurs remarquables et les angles associés :

  $$
  u_0 = 1, \quad u_1 = \cos\frac{\pi}{3} = \frac{1}{2}, \quad u_2 = \cos\frac{2\pi}{3} = -\frac{1}{2}, \quad u_3 = \cos\pi = -1, \quad u_4 = \cos\frac{4\pi}{3} = -\frac{1}{2}, \quad u_5 = \cos\frac{5\pi}{3} = \frac{1}{2}.
  $$

  **2.** Pour tout $n \in \N$, par $2\pi$-périodicité du cosinus :

  $$
  u_{n+6} = \cos\left(\frac{(n+6)\pi}{3}\right) = \cos\left(\frac{n\pi}{3} + 2\pi\right) = \cos\left(\frac{n\pi}{3}\right) = u_n.
  $$

  **3.** - $u_1 - u_0 = -\dfrac{1}{2}$ et $u_2 - u_1 = -1$ : les différences consécutives ne sont pas égales, la suite n'est **pas arithmétique**.
  - $\dfrac{u_1}{u_0} = \dfrac{1}{2}$ et $\dfrac{u_2}{u_1} = -1$ : les quotients ne sont pas égaux, la suite n'est **pas géométrique**.
  - $u_0 > u_3$ avec $u_3 < u_4$ : la suite décroît puis croît, elle n'est **pas monotone**.

  **4.** On effectue la division euclidienne : $2024 = 6 \times 337 + 2$. D'après la question 2 (période $6$), $u_{2024} = u_2 = -\dfrac{1}{2}$.

  **5.** $u_0 + u_1 + \cdots + u_5 = 1 + \dfrac{1}{2} - \dfrac{1}{2} - 1 - \dfrac{1}{2} + \dfrac{1}{2} = 0$.

  La somme $u_0 + \cdots + u_{2024}$ comporte $2025$ termes, et $2025 = 6 \times 337 + 3$. On la découpe en $337$ paquets de $6$ termes consécutifs, chacun de somme nulle d'après ce qui précède (la suite est $6$-périodique), plus les $3$ derniers termes :

  $$
  u_{2022} + u_{2023} + u_{2024} = u_0 + u_1 + u_2 = 1 + \frac{1}{2} - \frac{1}{2} = 1.
  $$

  La somme vaut donc $1$.
---
