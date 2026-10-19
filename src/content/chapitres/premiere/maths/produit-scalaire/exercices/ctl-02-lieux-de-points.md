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
  **1.** On a $\overrightarrow{MA}(-2 - x\,;\,-y)$ et $\overrightarrow{MB}(4 - x\,;\,-y)$. Donc

  $$
  \overrightarrow{MA} \cdot \overrightarrow{MB} = (-2 - x)(4 - x) + y^2 = (x + 2)(x - 4) + y^2 = x^2 - 2x - 8 + y^2.
  $$

  La condition $\overrightarrow{MA} \cdot \overrightarrow{MB} = -5$ s'écrit $x^2 - 2x + y^2 - 3 = 0$. Avec $x^2 - 2x = (x - 1)^2 - 1$ :

  $$
  (x - 1)^2 - 1 + y^2 - 3 = 0 \iff (x - 1)^2 + y^2 = 4.
  $$

  $\Gamma_1$ est le **cercle** de centre $\Omega(1\,;\,0)$ (milieu de $[AB]$) et de rayon $2$.

  **2.** On a $MA^2 = (x + 2)^2 + y^2$ et $MB^2 = (x - 4)^2 + y^2$. Les termes en $y^2$ se simplifient :

  $$
  MA^2 - MB^2 = (x + 2)^2 - (x - 4)^2 = \left[(x + 2) - (x - 4)\right]\left[(x + 2) + (x - 4)\right] = 6(2x - 2) = 12x - 12.
  $$

  La condition $12x - 12 = 12$ équivaut à $x = 2$. $\Delta$ est la **droite** d'équation $x = 2$, perpendiculaire à $(AB)$.

  **3.** Un point d'intersection vérifie $x = 2$ et $(x - 1)^2 + y^2 = 4$. En remplaçant : $1 + y^2 = 4$, soit $y^2 = 3$, donc $y = \sqrt{3}$ ou $y = -\sqrt{3}$.

  Les points d'intersection sont $(2\,;\,\sqrt{3})$ et $(2\,;\,-\sqrt{3})$.

  **4.** La condition $\overrightarrow{MA} \cdot \overrightarrow{MB} = -10$ s'écrit $x^2 - 2x - 8 + y^2 = -10$, soit $(x - 1)^2 - 1 + y^2 = -2$, c'est-à-dire $(x - 1)^2 + y^2 = -1$. Or un carré est toujours positif ou nul, donc $(x - 1)^2 + y^2 \geq 0 > -1$ : l'équation n'a aucune solution. L'ensemble est **vide**.
---
