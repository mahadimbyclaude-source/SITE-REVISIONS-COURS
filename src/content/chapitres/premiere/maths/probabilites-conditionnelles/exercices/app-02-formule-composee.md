---
titre: Utiliser la formule des probabilités composées
type: application
notion: Probabilités composées
difficulte: Facile
ordre: 2

enonce: |
  Soit $A$ et $B$ deux événements tels que $P(A) = 0{,}4$ et $P_A(B) = 0{,}3$.

  1. Calculer $P(A \cap B)$.
  2. Calculer $P_A(\overline{B})$ puis $P(A \cap \overline{B})$.
  3. Vérifier que $P(A \cap B) + P(A \cap \overline{B}) = P(A)$.

indices:
  - |
    Piste générale : $P(A \cap B) = P(A) \times P_A(B)$.
  - |
    Plus précis : $P_A(\overline{B}) = 1 - P_A(B)$, car $B$ et $\overline{B}$ sont contraires, y compris quand on se place « sachant $A$ ».

correction: |
  **1.** $P(A \cap B) = P(A) \times P_A(B) = 0{,}4 \times 0{,}3 = 0{,}12$.

  **2.** $P_A(\overline{B}) = 1 - 0{,}3 = 0{,}7$ et $P(A \cap \overline{B}) = 0{,}4 \times 0{,}7 = 0{,}28$.

  **3.** $0{,}12 + 0{,}28 = 0{,}40 = P(A)$.
---
