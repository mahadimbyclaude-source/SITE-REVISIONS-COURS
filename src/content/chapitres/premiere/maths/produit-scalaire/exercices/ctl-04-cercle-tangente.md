---
titre: Cercle, tangente et trinôme
type: controle
difficulte: Difficile
duree_estimee: 40
chapitres_mobilises:
  - produit-scalaire
  - second-degre
ordre: 4

enonce: |
  Le plan est muni d’un repère orthonormé. Soit $\mathcal{C}$ l’ensemble des points $M(x\,;\,y)$ tels que $x^2 + y^2 - 4x + 2y - 20 = 0$.

  1. Montrer que $\mathcal{C}$ est un cercle dont on précisera le centre $\Omega$ et le rayon.
  2. Vérifier que le point $A(5\,;\,3)$ appartient à $\mathcal{C}$.
  3. Déterminer une équation de la tangente $T$ à $\mathcal{C}$ en $A$.
  4. La droite $T$ coupe l’axe des abscisses en $B$. Déterminer les coordonnées de $B$ puis montrer que le triangle $\Omega AB$ est rectangle en $A$. Calculer son aire.
  5. Déterminer les points d’intersection de $\mathcal{C}$ avec l’axe des abscisses.

indices:
  - |
    Piste générale : met $x^2 - 4x$ et $y^2 + 2y$ sous forme canonique pour reconnaître $(x - a)^2 + (y - b)^2 = r^2$.
  - |
    Plus précis : la tangente en $A$ est la droite passant par $A$ de vecteur normal $\overrightarrow{\Omega A}$.
  - |
    Pour la question 5, remplace $y$ par $0$ dans l’équation de $\mathcal{C}$ : tu obtiens un trinôme en $x$.

correction: |
  **1.** $x^2 - 4x = (x - 2)^2 - 4$ et $y^2 + 2y = (y + 1)^2 - 1$, donc l’équation devient $(x - 2)^2 - 4 + (y + 1)^2 - 1 - 20 = 0$, soit

  $$
  (x - 2)^2 + (y + 1)^2 = 25.
  $$

  $\mathcal{C}$ est le cercle de centre $\Omega(2\,;\,-1)$ et de rayon $5$.

  **2.** $5^2 + 3^2 - 4 \times 5 + 2 \times 3 - 20 = 25 + 9 - 20 + 6 - 20 = 0$. Le point $A$ appartient à $\mathcal{C}$.

  **3.** $\overrightarrow{\Omega A}(3\,;\,4)$ est un vecteur normal de $T$. Un point $M(x\,;\,y)$ appartient à $T$ si et seulement si $\overrightarrow{AM} \cdot \overrightarrow{\Omega A} = 0$ : $3(x - 5) + 4(y - 3) = 0$, soit $3x + 4y - 27 = 0$.

  **4.** Pour $y = 0$ : $3x = 27$, donc $x = 9$ et $B(9\,;\,0)$. On a $\overrightarrow{\Omega A}(3\,;\,4)$ et $\overrightarrow{AB}(4\,;\,-3)$ donc $\overrightarrow{\Omega A} \cdot \overrightarrow{AB} = 12 - 12 = 0$ : le triangle $\Omega AB$ est rectangle en $A$. On a $\Omega A = 5$ et $AB = \sqrt{16 + 9} = 5$, donc l’aire vaut $\dfrac{1}{2} \times 5 \times 5 = \dfrac{25}{2}$.

  **5.** Pour $y = 0$ : $(x - 2)^2 + 1 = 25$, donc $(x - 2)^2 = 24$ et $x - 2 = \pm 2\sqrt{6}$. Les points d’intersection sont $(2 - 2\sqrt{6}\,;\,0)$ et $(2 + 2\sqrt{6}\,;\,0)$.
---
