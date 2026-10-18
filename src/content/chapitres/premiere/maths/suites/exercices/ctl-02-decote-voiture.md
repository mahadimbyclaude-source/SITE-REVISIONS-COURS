---
titre: Décote d’un véhicule
type: controle
difficulte: Moyen
duree_estimee: 25
chapitres_mobilises:
  - suites
  - Pourcentages (Seconde)
ordre: 2

enonce: |
  Un véhicule neuf coûte $10\,000$ euros. Chaque année, sa valeur diminue de $20\,\%$. On note $v_n$ sa valeur (en euros) au bout de $n$ années, avec $v_0 = 10\,000$.

  1. Justifier que $v_{n+1} = 0,8\,v_n$. Quelle est la nature de la suite $(v_n)$ ?
  2. Exprimer $v_n$ en fonction de $n$, puis calculer $v_2$ et $v_3$.
  3. Étudier le sens de variation de $(v_n)$.
  4. On souhaite déterminer la première année où la valeur du véhicule passe sous $4000$ euros. Compléter le programme suivant puis donner la valeur affichée.

  ```python
  n = 0
  v = 10000
  while ...:
      v = ...
      n = n + 1
  print(n)
  ```

  5. Calculer la somme $v_0 + v_1 + v_2 + v_3 + v_4$.

indices:
  - |
    Diminuer de $20\,\%$ revient à multiplier par $1 - \dfrac{20}{100}$.
  - |
    $v_n = v_0 \times q^n$ avec $q = 0,8$. Pour la question 4, la boucle continue tant que $v \geq 4000$.
  - |
    Pour la question 5, utilise la formule de la somme d’une suite géométrique avec $5$ termes : $v_0 \times \dfrac{1 - q^5}{1 - q}$.

correction: |
  **1.** Une baisse de $20\,\%$ revient à multiplier par $1 - 0,2 = 0,8$, donc $v_{n+1} = 0,8\,v_n$ : la suite $(v_n)$ est géométrique de raison $0,8$ et de premier terme $10\,000$.

  **2.** $v_n = 10\,000 \times 0,8^n$. Alors $v_2 = 10\,000 \times 0,64 = 6400$ et $v_3 = 10\,000 \times 0,512 = 5120$.

  **3.** $v_0 > 0$ et $0 < q < 1$ : la suite $(v_n)$ est strictement décroissante.

  **4.**

  ```python
  n = 0
  v = 10000
  while v >= 4000:
      v = 0.8 * v
      n = n + 1
  print(n)
  ```

  On a $v_4 = 4096 \geq 4000$ et $v_5 = 3276,8 < 4000$ : le programme affiche $5$.

  **5.** C’est une somme de $5$ termes d’une suite géométrique de raison $0,8$ :

  $$
  v_0 + \cdots + v_4 = 10\,000 \times \frac{1 - 0,8^5}{1 - 0,8} = 50\,000 \times (1 - 0,32768) = 33\,616.
  $$
---
