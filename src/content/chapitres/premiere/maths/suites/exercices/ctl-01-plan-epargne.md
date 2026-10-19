---
titre: Un plan d’épargne
type: controle
difficulte: Moyen
duree_estimee: 30
chapitres_mobilises:
  - suites
  - second-degre
ordre: 1

enonce: |
  Une personne ouvre un plan d’épargne. Le mois $0$, elle verse $100$ euros, puis chaque mois elle verse $20$ euros de plus que le mois précédent. On note $u_n$ la somme versée le mois $n$ et $S_n = u_0 + u_1 + \cdots + u_n$ la somme totale versée au bout du mois $n$ (en euros).

  1. Montrer que $(u_n)$ est une suite arithmétique et donner l’expression de $u_n$ en fonction de $n$.
  2. Calculer $u_{10}$ puis $S_{10}$.
  3. Montrer que $S_n = 10n^2 + 110n + 100$.
  4. Déterminer à partir de quelle valeur de $n$ on a $S_n \geq 1360$.
  5. Montrer que la suite $(S_n)$ est croissante.

indices:
  - |
    « $20$ euros de plus » signifie qu’on ajoute toujours le même nombre. La question 3 utilise la formule de la somme d’une suite arithmétique, la question 4 se ramène à une inéquation du second degré.
  - |
    $S_n = (n+1) \times \dfrac{u_0 + u_n}{2}$. Pour la question 4, développe et regroupe pour obtenir $n^2 + 11n - 126 \geq 0$, puis calcule $\Delta$ ($\Delta = 625$).
  - |
    Pour la question 5, calcule $S_{n+1} - S_n$ : que vaut cette différence ?

correction: |
  **1.** Chaque mois, la somme versée augmente de $20$ euros : pour tout $n \in \N$, $u_{n+1} = u_n + 20$. On ajoute toujours le même nombre, donc $(u_n)$ est une suite arithmétique de raison $20$ et de premier terme $u_0 = 100$. Son terme général est

  $$
  u_n = u_0 + nr = 100 + 20n.
  $$

  **2.** $u_{10} = 100 + 20 \times 10 = 300$. La somme $S_{10} = u_0 + \cdots + u_{10}$ comporte $11$ termes :

  $$
  S_{10} = 11 \times \frac{u_0 + u_{10}}{2} = 11 \times \frac{100 + 300}{2} = 11 \times 200 = 2200.
  $$

  **3.** La somme $S_n = u_0 + \cdots + u_n$ comporte $n + 1$ termes d'une suite arithmétique, donc

  $$
  S_n = (n+1) \times \frac{u_0 + u_n}{2} = (n+1) \times \frac{100 + 100 + 20n}{2} = (n+1)(100 + 10n).
  $$

  En développant : $S_n = 100n + 10n^2 + 100 + 10n = 10n^2 + 110n + 100$.

  **4.** On résout l'inéquation $S_n \geq 1360$ :

  $$
  10n^2 + 110n + 100 \geq 1360 \iff 10n^2 + 110n - 1260 \geq 0 \iff n^2 + 11n - 126 \geq 0.
  $$

  Le discriminant est $\Delta = 11^2 + 4 \times 126 = 121 + 504 = 625$ et $\sqrt{\Delta} = 25$. Les racines sont

  $$
  n_1 = \frac{-11 - 25}{2} = -18 \qquad\text{et}\qquad n_2 = \frac{-11 + 25}{2} = 7.
  $$

  Le coefficient de $n^2$ est positif, donc le trinôme est positif ou nul pour $n \leq -18$ ou $n \geq 7$. Comme $n \in \N$, on a $S_n \geq 1360$ si et seulement si $n \geq 7$.

  Vérification : $S_7 = 10 \times 49 + 770 + 100 = 1360$.

  **5.** Pour tout $n \in \N$ :

  $$
  S_{n+1} - S_n = u_{n+1} = 100 + 20(n+1) > 0.
  $$

  La différence est strictement positive : la suite $(S_n)$ est **strictement croissante**.
---
