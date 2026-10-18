---
titre: Utiliser le projeté orthogonal
type: application
notion: Projeté orthogonal
difficulte: Moyen
ordre: 5

enonce: |
  Dans un repère orthonormé, on donne $A(-1\,;\,2)$, $B(3\,;\,2)$ et $C(2\,;\,5)$. On note $H$ le projeté orthogonal de $C$ sur la droite $(AB)$.

  1. Calculer $\overrightarrow{AB} \cdot \overrightarrow{AC}$.
  2. En déduire la longueur $AH$.
  3. Déterminer les coordonnées de $H$.

indices:
  - |
    Piste générale : $\overrightarrow{AB} \cdot \overrightarrow{AC} = \overrightarrow{AB} \cdot \overrightarrow{AH}$.
  - |
    Plus précis : $\overrightarrow{AB}(4\,;\,0)$ est horizontal, donc $H$ a la même ordonnée que $A$ et $B$. Si $\overrightarrow{AH}$ et $\overrightarrow{AB}$ ont le même sens, $\overrightarrow{AB} \cdot \overrightarrow{AH} = AB \times AH$.

correction: |
  **1.** $\overrightarrow{AB}(4\,;\,0)$ et $\overrightarrow{AC}(3\,;\,3)$. Donc $\overrightarrow{AB} \cdot \overrightarrow{AC} = 4 \times 3 + 0 \times 3 = 12$.

  **2.** Comme $\overrightarrow{AB} \cdot \overrightarrow{AC} = \overrightarrow{AB} \cdot \overrightarrow{AH}$ et que le produit scalaire est positif, $\overrightarrow{AH}$ et $\overrightarrow{AB}$ ont le même sens. Alors $12 = AB \times AH = 4 \times AH$, donc $AH = 3$.

  **3.** $H$ est sur $(AB)$, d’ordonnée $2$, à une distance $3$ de $A$ dans le sens de $B$ : $H(-1 + 3\,;\,2) = H(2\,;\,2)$.
---
