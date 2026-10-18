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
  **1.** $k$ prend les valeurs $1$, $2$, $3$, $4$ : $s = 1 + 4 + 9 + 16 = 30$. Le programme affiche $30$.

  **2.** Tableau de suivi :

  | Tour | $u$ | $n$ |
  | --- | --- | --- |
  | départ | $1$ | $0$ |
  | 1 | $2$ | $1$ |
  | 2 | $4$ | $2$ |
  | 3 | $8$ | $3$ |
  | 4 | $16$ | $4$ |
  | 5 | $32$ | $5$ |
  | 6 | $64$ | $6$ |

  À la fin, $u = 64 > 50$, la boucle s’arrête : le programme affiche $6$.

  **3.** `f(4)` renvoie $2 \times 16 - 3 = 29$.
---
