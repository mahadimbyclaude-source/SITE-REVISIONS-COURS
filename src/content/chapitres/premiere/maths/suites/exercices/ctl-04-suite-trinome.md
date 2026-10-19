---
titre: Une suite définie par un trinôme
type: controle
difficulte: Difficile
duree_estimee: 35
chapitres_mobilises:
  - suites
  - second-degre
  - derivation
ordre: 4

enonce: |
  Soit $(u_n)$ la suite définie pour tout $n \in \N$ par $u_n = n^2 - 8n + 10$. On note $f$ la fonction définie sur $\R$ par $f(x) = x^2 - 8x + 10$.

  1. Calculer $u_0$, $u_1$, $u_2$ et $u_3$.
  2. Montrer que $u_{n+1} - u_n = 2n - 7$ pour tout $n \in \N$.
  3. En déduire les variations de $(u_n)$. La suite est-elle monotone ?
  4. Calculer $f'(x)$ puis retrouver, avec la fonction $f$, la valeur minimale de la suite.
  5. Existe-t-il un entier $n$ tel que $u_n = 0$ ?
  6. Déterminer les entiers $n$ tels que $u_n < 0$.
  7. Déterminer les entiers $n$ tels que $u_n \geq 10$.

indices:
  - |
    $u_n = f(n)$, donc on peut étudier la suite avec le signe de la différence $u_{n+1} - u_n$ et la fonction avec son sommet.
  - |
    Pour la question 5, résous $n^2 - 8n + 10 = 0$ avec $\Delta$ et regarde si les racines sont des entiers. Pour la question 7, $u_n \geq 10$ équivaut à $n^2 - 8n \geq 0$.
  - |
    Pour la question 6, le trinôme est négatif **entre** les racines $4 - \sqrt{6}$ et $4 + \sqrt{6}$. Encadre $\sqrt{6}$ entre $2$ et $3$ pour trouver les entiers concernés.

correction: |
  **1.** On remplace $n$ dans $u_n = n^2 - 8n + 10$ : $u_0 = 10$, $u_1 = 1 - 8 + 10 = 3$, $u_2 = 4 - 16 + 10 = -2$ et $u_3 = 9 - 24 + 10 = -5$.

  **2.** Pour tout $n \in \N$ :

  $$
  u_{n+1} - u_n = (n+1)^2 - 8(n+1) + 10 - n^2 + 8n - 10 = n^2 + 2n + 1 - 8n - 8 - n^2 + 8n = 2n - 7.
  $$

  **3.** On étudie le signe de $2n - 7$ : $2n - 7 < 0$ équivaut à $n < 3,5$, donc pour $n \leq 3$, et $2n - 7 > 0$ pour $n \geq 4$. La suite est donc strictement décroissante de $u_0$ à $u_4$, puis strictement croissante à partir du rang $4$. Comme le signe de la différence change, elle n'est **pas monotone**.

  **4.** La fonction $f$ est dérivable sur $\R$ et $f'(x) = 2x - 8$. Cette dérivée est négative pour $x < 4$, nulle en $4$ et positive pour $x > 4$ : $f$ est décroissante puis croissante, avec un minimum en $x = 4$ égal à $f(4) = 16 - 32 + 10 = -6$ (on retrouve le sommet $\alpha = -\dfrac{b}{2a} = 4$). Comme $4$ est un entier et que $u_n = f(n)$, la valeur minimale de la suite est $u_4 = -6$.

  **5.** On résout $n^2 - 8n + 10 = 0$. Le discriminant est $\Delta = 64 - 40 = 24 > 0$ et $\sqrt{24} = 2\sqrt{6}$. Les racines sont

  $$
  \frac{8 - 2\sqrt{6}}{2} = 4 - \sqrt{6} \qquad\text{et}\qquad 4 + \sqrt{6}.
  $$

  Comme $2 < \sqrt{6} < 3$, on a $1 < 4 - \sqrt{6} < 2$ et $6 < 4 + \sqrt{6} < 7$ : aucune des deux racines n'est un entier. **Il n'existe donc aucun entier $n$ tel que $u_n = 0$.**

  **6.** Le coefficient de $n^2$ est positif : le trinôme est strictement négatif entre les racines, c'est-à-dire pour $4 - \sqrt{6} < n < 4 + \sqrt{6}$. Avec l'encadrement précédent, les entiers concernés sont $n \in \{2\,;\,3\,;\,4\,;\,5\,;\,6\}$.

  Vérification : $u_2 = -2$ et $u_6 = 36 - 48 + 10 = -2$, alors que $u_1 = 3$ et $u_7 = 3$.

  **7.** On résout $u_n \geq 10$ :

  $$
  n^2 - 8n + 10 \geq 10 \iff n^2 - 8n \geq 0 \iff n(n - 8) \geq 0.
  $$

  Les racines sont $0$ et $8$ et le coefficient de $n^2$ est positif : le trinôme est positif ou nul pour $n \leq 0$ ou $n \geq 8$. Comme $n \in \N$, on a $u_n \geq 10$ pour $n = 0$ ou pour $n \geq 8$.
---
