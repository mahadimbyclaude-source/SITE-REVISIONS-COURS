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
  **1.** Un point $M(x\,;\,y)$ appartient à $d_1$ si et seulement si $\overrightarrow{AM} \cdot \vec{n} = 0$. Ici $\overrightarrow{AM}(x - 2\,;\,y - 1)$, donc

  $$
  3(x - 2) - 2(y - 1) = 0 \iff 3x - 6 - 2y + 2 = 0 \iff 3x - 2y - 4 = 0.
  $$

  Une équation de $d_1$ est $3x - 2y - 4 = 0$.

  **2.** Une droite d'équation $ax + by + c = 0$ a pour vecteur normal $(a\,;\,b)$ et pour vecteur directeur $(-b\,;\,a)$. Pour $d : 2x + y - 5 = 0$, un vecteur normal est $\vec{n}(2\,;\,1)$ et un vecteur directeur est $\vec{u}(-1\,;\,2)$.

  **3.** Les droites $d_2$ et $d$ sont perpendiculaires : un vecteur directeur de $d$ est un vecteur normal de $d_2$. On peut donc prendre $\vec{u}(-1\,;\,2)$ comme vecteur normal de $d_2$, dont l'équation est de la forme $-x + 2y + c = 0$. Comme $B(1\,;\,4) \in d_2$ :

  $$
  -1 + 2 \times 4 + c = 0 \iff c = -7.
  $$

  Une équation de $d_2$ est $-x + 2y - 7 = 0$, ou encore $x - 2y + 7 = 0$.
---
