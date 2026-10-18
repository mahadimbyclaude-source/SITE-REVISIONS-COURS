---
titre: Une suite de probabilités
type: controle
difficulte: Très difficile
duree_estimee: 45
chapitres_mobilises:
  - probabilites-conditionnelles
  - suites
ordre: 4

enonce: |
  Un joueur dispute une série de parties. La probabilité qu’il gagne la première partie est $\dfrac{1}{2}$. Ensuite, s’il gagne une partie, la probabilité qu’il gagne la suivante est $0{,}7$ ; s’il perd une partie, la probabilité qu’il gagne la suivante est $0{,}4$. On note $G_n$ l’événement « il gagne la $n$-ième partie » et $p_n = P(G_n)$, avec $p_1 = \dfrac{1}{2}$.

  1. Calculer $p_2$.
  2. Montrer que, pour tout entier $n \geq 1$, $p_{n+1} = 0{,}3 \, p_n + 0{,}4$.
  3. On pose $v_n = p_n - \dfrac{4}{7}$. Montrer que $(v_n)$ est une suite géométrique et préciser sa raison et son premier terme.
  4. En déduire l’expression de $p_n$ en fonction de $n$.
  5. Vers quelle valeur $p_n$ se rapproche-t-elle quand $n$ devient grand ?

indices:
  - |
    Piste générale : $G_n$ et $\overline{G_n}$ forment une partition. Applique la formule des probabilités totales pour $P(G_{n+1})$.
  - |
    Plus précis : $p_{n+1} = 0{,}7 \, p_n + 0{,}4 (1 - p_n)$. Développe.
  - |
    Pour la question 3, exprime $v_{n+1} = p_{n+1} - \dfrac{4}{7}$ avec la relation de la question 2 et factorise par $0{,}3$. Le nombre $\dfrac{4}{7}$ est la solution de $\ell = 0{,}3 \ell + 0{,}4$.

correction: |
  **1.** $p_2 = P(G_1) \times 0{,}7 + P(\overline{G_1}) \times 0{,}4 = 0{,}5 \times 0{,}7 + 0{,}5 \times 0{,}4 = 0{,}35 + 0{,}20 = 0{,}55$.

  **2.** $G_n$ et $\overline{G_n}$ forment une partition. Avec $P_{G_n}(G_{n+1}) = 0{,}7$ et $P_{\overline{G_n}}(G_{n+1}) = 0{,}4$ :

  $$
  p_{n+1} = 0{,}7 \, p_n + 0{,}4 (1 - p_n) = 0{,}3 \, p_n + 0{,}4.
  $$

  **3.** Pour tout $n \geq 1$ :

  $$
  v_{n+1} = p_{n+1} - \frac{4}{7} = 0{,}3 \, p_n + 0{,}4 - \frac{4}{7} = 0{,}3 \, p_n - \frac{12}{70} = 0{,}3 \left(p_n - \frac{4}{7}\right) = 0{,}3 \, v_n.
  $$

  (En effet $0{,}4 - \dfrac{4}{7} = \dfrac{28 - 40}{70} = -\dfrac{12}{70} = -0{,}3 \times \dfrac{4}{7}$.) La suite $(v_n)$ est géométrique de raison $0{,}3$ et de premier terme $v_1 = \dfrac{1}{2} - \dfrac{4}{7} = -\dfrac{1}{14}$.

  **4.** $v_n = -\dfrac{1}{14} \times 0{,}3^{\,n-1}$, donc

  $$
  p_n = \frac{4}{7} - \frac{1}{14} \times 0{,}3^{\,n-1}.
  $$

  On vérifie $p_2 = \dfrac{4}{7} - \dfrac{0{,}3}{14} = 0{,}55$.

  **5.** Comme $0 < 0{,}3 < 1$, $0{,}3^{\,n-1}$ se rapproche de $0$ quand $n$ grandit. La probabilité $p_n$ se rapproche de $\dfrac{4}{7} \approx 0{,}57$.
---
