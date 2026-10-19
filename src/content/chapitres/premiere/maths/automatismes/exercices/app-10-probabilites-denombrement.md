---
titre: Probabilités simples et dénombrement
type: application
notion: Probabilités
difficulte: Facile
ordre: 10

enonce: |
  1. On lance un dé équilibré à $6$ faces. Quelle est la probabilité d’obtenir un multiple de $3$ ?
  2. On lance deux dés équilibrés. Quelle est la probabilité que la somme soit $7$ ?
  3. Un menu propose $3$ entrées, $4$ plats et $2$ desserts. Combien de menus complets différents existe-t-il ?
  4. On lance une pièce équilibrée $3$ fois. Quelle est la probabilité d’obtenir au moins une fois « face » ?

indices:
  - |
    Piste générale : en situation d’équiprobabilité, $P(A) = \dfrac{\text{cas favorables}}{\text{cas possibles}}$.
  - |
    Plus précis : pour « au moins une fois », passe par l’événement contraire « aucune fois ».

correction: |
  **1.** Le dé est équilibré : on est en situation d'équiprobabilité. Parmi les $6$ faces, les multiples de $3$ sont $3$ et $6$ : $P = \dfrac{2}{6} = \dfrac{1}{3}$.

  **2.** Il y a $6 \times 6 = 36$ couples de résultats équiprobables. Ceux de somme $7$ sont $(1,6)$, $(2,5)$, $(3,4)$, $(4,3)$, $(5,2)$ et $(6,1)$, soit $6$ couples. Donc $P = \dfrac{6}{36} = \dfrac{1}{6}$.

  **3.** Un menu complet se construit en choisissant successivement une entrée, un plat et un dessert : il y a $3 \times 4 \times 2 = 24$ menus différents.

  **4.** L'événement contraire de « au moins une fois face » est « aucune fois face », c'est-à-dire « trois fois pile ». Les lancers étant indépendants, sa probabilité est $\left(\dfrac{1}{2}\right)^3 = \dfrac{1}{8}$. Donc

  $$
  P = 1 - \frac{1}{8} = \frac{7}{8}.
  $$
---
