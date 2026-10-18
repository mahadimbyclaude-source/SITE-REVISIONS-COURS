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
  **1.** $\overrightarrow{MA}(1 - x\,;\,2 - y)$ et $\overrightarrow{MB}(5 - x\,;\,4 - y)$ donc

  $$
  \overrightarrow{MA} \cdot \overrightarrow{MB} = (1 - x)(5 - x) + (2 - y)(4 - y) = x^2 - 6x + 5 + y^2 - 6y + 8.
  $$

  La condition devient $x^2 - 6x + y^2 - 6y + 13 = 0$, soit $(x - 3)^2 - 9 + (y - 3)^2 - 9 + 13 = 0$, c’est-à-dire

  $$
  (x - 3)^2 + (y - 3)^2 = 5.
  $$

  **2.** C’est le cercle de centre $I(3\,;\,3)$ (milieu de $[AB]$) et de rayon $\sqrt{5}$ (la moitié de $AB = \sqrt{20}$).
---
