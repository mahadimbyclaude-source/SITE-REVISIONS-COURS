---
titre: Compléter un arbre pondéré
type: application
notion: Arbre pondéré
difficulte: Facile
ordre: 3

enonce: |
  Soit $A$ et $B$ deux événements avec $P(A) = 0{,}6$, $P_A(B) = 0{,}5$ et $P_{\overline{A}}(B) = 0{,}2$.

  1. Construire l’arbre pondéré correspondant, en écrivant toutes les probabilités sur les branches.
  2. Calculer la probabilité de chacune des quatre feuilles.
  3. Vérifier que la somme des feuilles vaut $1$.

indices:
  - |
    Piste générale : le premier niveau est $A$ ou $\overline{A}$, le second niveau est $B$ ou $\overline{B}$. Les probabilités du second niveau sont conditionnelles.
  - |
    Plus précis : sur les branches issues de $\overline{A}$, on a $P_{\overline{A}}(B) = 0{,}2$ et donc $P_{\overline{A}}(\overline{B}) = 0{,}8$.

correction: |
  **1.** Au premier niveau, on place $P(A) = 0{,}6$ et $P(\overline{A}) = 1 - 0{,}6 = 0{,}4$. Au second niveau, on place les probabilités conditionnelles :

  - après $A$ : $P_A(B) = 0{,}5$ et $P_A(\overline{B}) = 1 - 0{,}5 = 0{,}5$ ;
  - après $\overline{A}$ : $P_{\overline{A}}(B) = 0{,}2$ et $P_{\overline{A}}(\overline{B}) = 1 - 0{,}2 = 0{,}8$.

  **2.** La probabilité d'une feuille est le produit des probabilités des branches du chemin qui y mène :

  - $P(A \cap B) = 0{,}6 \times 0{,}5 = 0{,}30$ ;
  - $P(A \cap \overline{B}) = 0{,}6 \times 0{,}5 = 0{,}30$ ;
  - $P(\overline{A} \cap B) = 0{,}4 \times 0{,}2 = 0{,}08$ ;
  - $P(\overline{A} \cap \overline{B}) = 0{,}4 \times 0{,}8 = 0{,}32$.

  **3.** On vérifie : $0{,}30 + 0{,}30 + 0{,}08 + 0{,}32 = 1$. Les quatre feuilles correspondent à des événements incompatibles dont la réunion est l'univers, donc la somme vaut bien $1$.
---
