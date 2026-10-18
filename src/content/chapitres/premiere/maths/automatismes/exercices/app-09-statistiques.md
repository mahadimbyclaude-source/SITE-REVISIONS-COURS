---
titre: Moyenne, médiane et quartiles
type: application
notion: Statistiques
difficulte: Moyen
ordre: 9

enonce: |
  On considère la série : $4$ ; $7$ ; $7$ ; $8$ ; $10$ ; $12$ ; $15$.

  1. Calculer la moyenne.
  2. Déterminer la médiane.
  3. Déterminer $Q_1$ et $Q_3$ puis l’écart interquartile.

indices:
  - |
    Piste générale : la série contient $7$ valeurs, déjà rangées dans l’ordre croissant.
  - |
    Plus précis : $Q_1$ est la plus petite valeur telle qu’au moins $25\ \%$ des données soient inférieures ou égales : le rang est $\left\lceil 0{,}25 \times 7 \right\rceil = 2$. Pour $Q_3$, le rang est $\left\lceil 0{,}75 \times 7 \right\rceil = 6$.

correction: |
  **1.** La somme vaut $4 + 7 + 7 + 8 + 10 + 12 + 15 = 63$, donc la moyenne est $\dfrac{63}{7} = 9$.

  **2.** Il y a $7$ valeurs : la médiane est la $4^{\text{e}}$, soit $8$.

  **3.** $0{,}25 \times 7 = 1{,}75$ donc $Q_1$ est la $2^{\text{e}}$ valeur : $Q_1 = 7$. $0{,}75 \times 7 = 5{,}25$ donc $Q_3$ est la $6^{\text{e}}$ valeur : $Q_3 = 12$. L’écart interquartile vaut $12 - 7 = 5$.
---
