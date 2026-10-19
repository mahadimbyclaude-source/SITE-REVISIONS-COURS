---
titre: Lire un programme Python
type: application
notion: Algorithmique
difficulte: Moyen
ordre: 12

enonce: |
  1. Quelle valeur affiche ce programme ?

  ```python
  s = 0
  for k in range(1, 5):
      s = s + k * k
  print(s)
  ```

  2. Quelle valeur affiche ce programme ?

  ```python
  u = 1
  n = 0
  while u <= 50:
      u = 2 * u
      n = n + 1
  print(n)
  ```

  3. On définit `def f(x): return 2 * x**2 - 3`. Que renvoie `f(4)` ?

indices:
  - |
    Piste générale : fais un tableau de suivi des variables à chaque tour de boucle.
  - |
    Plus précis : `range(1, 5)` donne $1$, $2$, $3$, $4$ (la borne $5$ est exclue). Dans la boucle `while`, on s’arrête quand la condition devient fausse.

correction: |
  **1.** `range(1, 5)` fait prendre à `k` les valeurs $1$, $2$, $3$, $4$ (la borne $5$ est exclue). À chaque tour on ajoute $k^2$ à `s` :

  $$
  s = 0 + 1 + 4 + 9 + 16 = 30.
  $$

  Le programme affiche **30**.

  **2.** On suit les variables tour par tour. La boucle continue tant que $u \leq 50$ :

  | Tour | $u$ | $n$ |
  | --- | --- | --- |
  | départ | $1$ | $0$ |
  | 1 | $2$ | $1$ |
  | 2 | $4$ | $2$ |
  | 3 | $8$ | $3$ |
  | 4 | $16$ | $4$ |
  | 5 | $32$ | $5$ |
  | 6 | $64$ | $6$ |

  Après le tour 5, $u = 32 \leq 50$ : on continue. Après le tour 6, $u = 64 > 50$ : la condition devient fausse et la boucle s'arrête. Le programme affiche **6**.

  **3.** `f(4)` renvoie $2 \times 4^2 - 3 = 2 \times 16 - 3 = 29$.
---
