---
titre: Probabilité d’un événement avec l’arbre
type: application
notion: Probabilités totales
difficulte: Moyen
ordre: 4

enonce: |
  On reprend les données de l’exercice précédent : $P(A) = 0{,}6$, $P_A(B) = 0{,}5$ et $P_{\overline{A}}(B) = 0{,}2$.

  1. Calculer $P(B)$ à l’aide de la formule des probabilités totales.
  2. En déduire $P(\overline{B})$.
  3. Rédiger la justification complète en précisant pourquoi $\{A\,;\,\overline{A}\}$ est une partition de l’univers.

indices:
  - |
    Piste générale : $B$ se réalise soit avec $A$, soit avec $\overline{A}$ : ce sont les deux feuilles de l’arbre qui contiennent $B$.
  - |
    Plus précis : $P(B) = P(A \cap B) + P(\overline{A} \cap B)$ et chaque terme s’écrit avec un produit de branches.

correction: |
  **1.** Les événements $A$ et $\overline{A}$ sont incompatibles ($A \cap \overline{A} = \varnothing$) et leur réunion est l'univers ($A \cup \overline{A} = \Omega$) : ils forment une partition de l'univers. D'après la formule des probabilités totales,

  $$
  P(B) = P(A \cap B) + P(\overline{A} \cap B) = P(A) \times P_A(B) + P(\overline{A}) \times P_{\overline{A}}(B).
  $$

  Avec $P(\overline{A}) = 1 - 0{,}6 = 0{,}4$, on obtient

  $$
  P(B) = 0{,}6 \times 0{,}5 + 0{,}4 \times 0{,}2 = 0{,}30 + 0{,}08 = 0{,}38.
  $$

  **2.** Les événements $B$ et $\overline{B}$ sont contraires, donc $P(\overline{B}) = 1 - P(B) = 1 - 0{,}38 = 0{,}62$. On retrouve bien $0{,}30 + 0{,}32 = 0{,}62$ avec les feuilles de l'arbre contenant $\overline{B}$.

  **3.** Rédaction complète : « Les événements $A$ et $\overline{A}$ sont incompatibles et leur réunion est l'univers $\Omega$, donc ils forment une partition de $\Omega$. D'après la formule des probabilités totales, $P(B) = P(A \cap B) + P(\overline{A} \cap B) = 0{,}6 \times 0{,}5 + 0{,}4 \times 0{,}2 = 0{,}38$. »
---
