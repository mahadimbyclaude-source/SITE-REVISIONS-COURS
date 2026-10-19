---
titre: Cercle de diamètre donné
type: application
notion: 'Cercle de diamètre $[AB]$'
difficulte: Moyen
ordre: 9

enonce: |
  Le plan est muni d’un repère orthonormé. On donne $A(1\,;\,2)$ et $B(5\,;\,4)$.

  1. Déterminer l’ensemble des points $M(x\,;\,y)$ tels que $\overrightarrow{MA} \cdot \overrightarrow{MB} = 0$.
  2. Donner son centre et son rayon.

indices:
  - |
    Piste générale : cet ensemble est le cercle de diamètre $[AB]$. Calcule $\overrightarrow{MA}(1 - x\,;\,2 - y)$ et $\overrightarrow{MB}(5 - x\,;\,4 - y)$.
  - |
    Plus précis : après développement, regroupe les termes en $x$ et en $y$ et mets sous forme canonique.

correction: |
  **1.** On a $\overrightarrow{MA}(1 - x\,;\,2 - y)$ et $\overrightarrow{MB}(5 - x\,;\,4 - y)$. Donc

  $$
  \overrightarrow{MA} \cdot \overrightarrow{MB} = (1 - x)(5 - x) + (2 - y)(4 - y) = x^2 - 6x + 5 + y^2 - 6y + 8.
  $$

  La condition $\overrightarrow{MA} \cdot \overrightarrow{MB} = 0$ s'écrit $x^2 - 6x + y^2 - 6y + 13 = 0$. On met sous forme canonique : $x^2 - 6x = (x - 3)^2 - 9$ et $y^2 - 6y = (y - 3)^2 - 9$, d'où

  $$
  (x - 3)^2 - 9 + (y - 3)^2 - 9 + 13 = 0 \iff (x - 3)^2 + (y - 3)^2 = 5.
  $$

  **2.** L'ensemble cherché est le cercle de centre $I(3\,;\,3)$ et de rayon $\sqrt{5}$. On reconnaît le cercle de diamètre $[AB]$ : $I$ est le milieu de $[AB]$ et $AB = \sqrt{16 + 4} = \sqrt{20} = 2\sqrt{5}$, dont la moitié est $\sqrt{5}$.
---
