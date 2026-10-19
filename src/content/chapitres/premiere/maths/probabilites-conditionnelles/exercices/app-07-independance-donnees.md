---
titre: Tester l’indépendance avec des données
type: application
notion: Indépendance
difficulte: Moyen
ordre: 7

enonce: |
  Soit $A$, $B$ et $C$ trois événements tels que $P(A) = 0{,}5$, $P(B) = 0{,}4$, $P(C) = 0{,}3$, $P(A \cap B) = 0{,}2$ et $P(A \cap C) = 0{,}2$.

  1. Les événements $A$ et $B$ sont-ils indépendants ?
  2. Les événements $A$ et $C$ sont-ils indépendants ?
  3. Calculer $P(A \cup B)$.
  4. Calculer $P_A(B)$ et la comparer avec $P(B)$.

indices:
  - |
    Piste générale : $A$ et $B$ sont indépendants si et seulement si $P(A \cap B) = P(A) \times P(B)$.
  - |
    Plus précis : $P(A \cup B) = P(A) + P(B) - P(A \cap B)$.

correction: |
  Deux événements $A$ et $B$ sont indépendants si et seulement si $P(A \cap B) = P(A) \times P(B)$.

  **1.** $P(A) \times P(B) = 0{,}5 \times 0{,}4 = 0{,}2 = P(A \cap B)$. L'égalité est vérifiée : $A$ et $B$ sont **indépendants**.

  **2.** $P(A) \times P(C) = 0{,}5 \times 0{,}3 = 0{,}15$, alors que $P(A \cap C) = 0{,}2$. Les deux valeurs sont différentes : $A$ et $C$ ne sont **pas** indépendants.

  **3.** D'après la formule du crible, $P(A \cup B) = P(A) + P(B) - P(A \cap B) = 0{,}5 + 0{,}4 - 0{,}2 = 0{,}7$.

  **4.** $P_A(B) = \dfrac{P(A \cap B)}{P(A)} = \dfrac{0{,}2}{0{,}5} = 0{,}4 = P(B)$. Savoir que $A$ est réalisé ne change pas la probabilité de $B$ : c'est cohérent avec l'indépendance de $A$ et $B$.
---
