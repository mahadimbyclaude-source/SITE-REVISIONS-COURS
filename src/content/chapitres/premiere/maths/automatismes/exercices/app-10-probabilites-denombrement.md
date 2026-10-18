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
  **1.** Les multiples de $3$ sont $3$ et $6$ : $P = \dfrac{2}{6} = \dfrac{1}{3}$.

  **2.** Il y a $36$ couples et $6$ couples de somme $7$ : $(1,6), (2,5), (3,4), (4,3), (5,2), (6,1)$. Donc $P = \dfrac{6}{36} = \dfrac{1}{6}$.

  **3.** $3 \times 4 \times 2 = 24$ menus.

  **4.** La probabilité de n’obtenir aucune « face » est $\left(\dfrac{1}{2}\right)^3 = \dfrac{1}{8}$. Donc $P = 1 - \dfrac{1}{8} = \dfrac{7}{8}$.
---
