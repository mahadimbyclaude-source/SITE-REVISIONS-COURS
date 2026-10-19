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
  **1.** La somme des valeurs est $4 + 7 + 7 + 8 + 10 + 12 + 15 = 63$ et l'effectif est $7$. La moyenne est $\bar{x} = \dfrac{63}{7} = 9$.

  **2.** La série comporte $7$ valeurs rangées dans l'ordre croissant. La médiane est la valeur centrale, c'est-à-dire la $4^{\text{e}}$ : elle vaut $8$.

  **3.** On a $0{,}25 \times 7 = 1{,}75$, qu'on arrondit à l'entier supérieur : $Q_1$ est la $2^{\text{e}}$ valeur, donc $Q_1 = 7$. On a $0{,}75 \times 7 = 5{,}25$, qu'on arrondit à $6$ : $Q_3$ est la $6^{\text{e}}$ valeur, donc $Q_3 = 12$.

  L'écart interquartile est $Q_3 - Q_1 = 12 - 7 = 5$.
---
