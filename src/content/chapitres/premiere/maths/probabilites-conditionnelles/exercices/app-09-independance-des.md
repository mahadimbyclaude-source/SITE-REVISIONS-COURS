---
titre: Indépendance avec deux dés
type: application
notion: Indépendance (dénombrement)
difficulte: Moyen
ordre: 9

enonce: |
  On lance deux dés équilibrés à $6$ faces, l’un après l’autre, et on considère les événements :

  - $A$ : « le premier dé donne un nombre pair » ;
  - $B$ : « la somme des deux dés est paire » ;
  - $D$ : « la somme des deux dés est supérieure ou égale à $10$ ».

  1. Justifier que $P(A) = \dfrac{1}{2}$, puis que $P(B) = \dfrac{1}{2}$.
  2. Calculer $P(A \cap B)$. Les événements $A$ et $B$ sont-ils indépendants ?
  3. Calculer $P(D)$ et $P(A \cap D)$. Les événements $A$ et $D$ sont-ils indépendants ?

indices:
  - |
    Piste générale : l’univers contient $36$ issues équiprobables (couples de résultats).
  - |
    Plus précis : $A \cap B$ signifie « premier pair et somme paire », donc « les deux dés sont pairs ». Pour $D$, les sommes $10$, $11$, $12$ correspondent à $3 + 2 + 1 = 6$ couples.

correction: |
  L'univers est l'ensemble des $36$ couples de résultats, tous équiprobables.

  **1.** Le premier dé donne un nombre pair pour $3$ valeurs sur $6$ ($2$, $4$, $6$), donc $P(A) = \dfrac{3}{6} = \dfrac{1}{2}$.

  La somme est paire si et seulement si les deux dés ont la même parité : (pair, pair) ou (impair, impair). Cela fait $3 \times 3 + 3 \times 3 = 18$ couples sur $36$, donc $P(B) = \dfrac{18}{36} = \dfrac{1}{2}$.

  **2.** L'événement $A \cap B$ est « le premier dé est pair et la somme est paire », c'est-à-dire « les deux dés sont pairs » : $3 \times 3 = 9$ couples. Donc

  $$
  P(A \cap B) = \frac{9}{36} = \frac{1}{4} = \frac{1}{2} \times \frac{1}{2} = P(A) \times P(B).
  $$

  Les événements $A$ et $B$ sont **indépendants**.

  **3.** Les couples de somme supérieure ou égale à $10$ sont $(4,6)$, $(5,5)$, $(6,4)$, $(5,6)$, $(6,5)$ et $(6,6)$ : $P(D) = \dfrac{6}{36} = \dfrac{1}{6}$. Parmi eux, ceux dont le premier dé est pair sont $(4,6)$, $(6,4)$, $(6,5)$ et $(6,6)$ : $P(A \cap D) = \dfrac{4}{36} = \dfrac{1}{9}$.

  Or $P(A) \times P(D) = \dfrac{1}{2} \times \dfrac{1}{6} = \dfrac{1}{12} \neq \dfrac{1}{9} = P(A \cap D)$. Les événements $A$ et $D$ ne sont **pas** indépendants.
---
