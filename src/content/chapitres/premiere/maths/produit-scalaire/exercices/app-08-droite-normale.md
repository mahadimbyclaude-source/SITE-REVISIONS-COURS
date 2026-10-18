---
titre: Équation d’une droite avec un vecteur normal
type: application
notion: Droites et vecteur normal
difficulte: Moyen
ordre: 8

enonce: |
  Le plan est muni d’un repère orthonormé.

  1. Déterminer une équation de la droite $d_1$ passant par $A(2\,;\,1)$ et de vecteur normal $\vec{n}(3\,;\,-2)$.
  2. Soit $d$ la droite d’équation $2x + y - 5 = 0$. Donner un vecteur normal puis un vecteur directeur de $d$.
  3. Déterminer une équation de la droite $d_2$ passant par $B(1\,;\,4)$ et perpendiculaire à $d$.

indices:
  - |
    Piste générale : $M(x\,;\,y)$ appartient à la droite si et seulement si $\overrightarrow{AM} \cdot \vec{n} = 0$.
  - |
    Plus précis : la droite $ax + by + c = 0$ a pour vecteur normal $(a\,;\,b)$ et pour vecteur directeur $(-b\,;\,a)$. Une droite perpendiculaire à $d$ a pour vecteur normal un vecteur directeur de $d$.

correction: |
  **1.** $\overrightarrow{AM}(x - 2\,;\,y - 1)$ et $\overrightarrow{AM} \cdot \vec{n} = 0$ donne $3(x - 2) - 2(y - 1) = 0$, soit $3x - 2y - 4 = 0$.

  **2.** Un vecteur normal à $d$ est $\vec{n}(2\,;\,1)$ et un vecteur directeur est $\vec{u}(-1\,;\,2)$.

  **3.** $d_2$ est perpendiculaire à $d$ : $\vec{u}(-1\,;\,2)$, vecteur directeur de $d$, est un vecteur normal de $d_2$. L’équation de $d_2$ est donc de la forme $-x + 2y + c = 0$. Comme $B(1\,;\,4)$ appartient à $d_2$ : $-1 + 8 + c = 0$, donc $c = -7$. Une équation de $d_2$ est $-x + 2y - 7 = 0$, soit $x - 2y + 7 = 0$.
---
