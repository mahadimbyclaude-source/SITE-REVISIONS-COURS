---
titre: Lignes de niveau
type: controle
difficulte: Difficile
duree_estimee: 40
chapitres_mobilises:
  - produit-scalaire
  - second-degre
ordre: 2

enonce: |
  Dans un repère orthonormé, on donne $A(-2\,;\,0)$ et $B(4\,;\,0)$. On cherche les ensembles de points $M(x\,;\,y)$ vérifiant chaque condition.

  1. Déterminer l’ensemble $\Gamma_1$ des points $M$ tels que $\overrightarrow{MA} \cdot \overrightarrow{MB} = -5$. On précisera sa nature, son centre et son rayon.
  2. Déterminer l’ensemble $\Delta$ des points $M$ tels que $MA^2 - MB^2 = 12$. On précisera sa nature.
  3. Déterminer les points d’intersection de $\Gamma_1$ et $\Delta$.
  4. Montrer que l’ensemble des points $M$ tels que $\overrightarrow{MA} \cdot \overrightarrow{MB} = -10$ est vide.

indices:
  - |
    Piste générale : écris $\overrightarrow{MA}(-2 - x\,;\,-y)$ et $\overrightarrow{MB}(4 - x\,;\,-y)$ puis développe.
  - |
    Plus précis : pour $\Delta$, $MA^2 = (x + 2)^2 + y^2$ et $MB^2 = (x - 4)^2 + y^2$ : les termes en $y^2$ s’annulent.
  - |
    Pour la question 3, remplace $x$ par la valeur trouvée à la question 2 dans l’équation du cercle et résous un trinôme en $y$. Pour la question 4, une somme de carrés ne peut pas valoir un nombre strictement négatif.

correction: |
  **1.** $\overrightarrow{MA} \cdot \overrightarrow{MB} = (-2 - x)(4 - x) + (-y)(-y) = (x + 2)(x - 4) + y^2 = x^2 - 2x - 8 + y^2$. La condition $= -5$ donne $x^2 - 2x + y^2 - 3 = 0$, soit $(x - 1)^2 - 1 + y^2 - 3 = 0$, c’est-à-dire

  $$
  (x - 1)^2 + y^2 = 4.
  $$

  $\Gamma_1$ est le cercle de centre $\Omega(1\,;\,0)$ (milieu de $[AB]$) et de rayon $2$.

  **2.** $MA^2 - MB^2 = (x + 2)^2 - (x - 4)^2 = (2x - 2)(6) = 12x - 12$. La condition $12x - 12 = 12$ donne $x = 2$. $\Delta$ est la droite d’équation $x = 2$, perpendiculaire à $(AB)$.

  **3.** En remplaçant $x = 2$ dans l’équation de $\Gamma_1$ : $1 + y^2 = 4$, donc $y^2 = 3$ et $y = \sqrt{3}$ ou $y = -\sqrt{3}$. Les points d’intersection sont $(2\,;\,\sqrt{3})$ et $(2\,;\,-\sqrt{3})$.

  **4.** La condition $= -10$ donne $x^2 - 2x - 8 + y^2 = -10$, soit $(x - 1)^2 + y^2 = -1$. Un carré étant positif ou nul, la somme $(x - 1)^2 + y^2$ ne peut pas être négative : l’ensemble est vide.
---
