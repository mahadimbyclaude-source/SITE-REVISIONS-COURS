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
  **1.** On a $\overrightarrow{AB}(3 - (-1)\,;\,2 - 2) = (4\,;\,0)$ et $\overrightarrow{AC}(2 - (-1)\,;\,5 - 2) = (3\,;\,3)$. Donc

  $$
  \overrightarrow{AB} \cdot \overrightarrow{AC} = 4 \times 3 + 0 \times 3 = 12.
  $$

  **2.** Le point $H$ est le projeté orthogonal de $C$ sur $(AB)$, donc $\overrightarrow{AB} \cdot \overrightarrow{AC} = \overrightarrow{AB} \cdot \overrightarrow{AH}$. Ce produit scalaire est positif ($12 > 0$), donc $\overrightarrow{AH}$ et $\overrightarrow{AB}$ ont le même sens, et $\overrightarrow{AB} \cdot \overrightarrow{AH} = AB \times AH$. Avec $AB = 4$ :

  $$
  12 = 4 \times AH \quad\text{donc}\quad AH = 3.
  $$

  **3.** Le point $H$ appartient à $(AB)$, droite horizontale d'ordonnée $2$. Il est à la distance $3$ de $A$, dans le sens de $B$ (vers la droite) : $H(-1 + 3\,;\,2) = H(2\,;\,2)$. On retrouve bien que $(CH)$ est verticale, puisque $C$ a pour abscisse $2$.
---
