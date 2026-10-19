---
titre: Nature d’un triangle
type: application
notion: Orthogonalité et aire
difficulte: Moyen
ordre: 10

enonce: |
  Dans un repère orthonormé, on donne $A(0\,;\,0)$, $B(4\,;\,2)$ et $C(5\,;\,0)$.

  1. Montrer que le triangle $ABC$ est rectangle en $B$.
  2. Calculer les longueurs $BA$ et $BC$.
  3. En déduire l’aire du triangle $ABC$.

indices:
  - |
    Piste générale : calcule $\overrightarrow{BA} \cdot \overrightarrow{BC}$ avec les coordonnées.
  - |
    Plus précis : $\overrightarrow{BA}(-4\,;\,-2)$ et $\overrightarrow{BC}(1\,;\,-2)$. L’aire d’un triangle rectangle en $B$ est $\dfrac{1}{2} \times BA \times BC$.

correction: |
  **1.** On a $\overrightarrow{BA}(0 - 4\,;\,0 - 2) = (-4\,;\,-2)$ et $\overrightarrow{BC}(5 - 4\,;\,0 - 2) = (1\,;\,-2)$. Donc

  $$
  \overrightarrow{BA} \cdot \overrightarrow{BC} = -4 \times 1 + (-2) \times (-2) = -4 + 4 = 0.
  $$

  Les vecteurs $\overrightarrow{BA}$ et $\overrightarrow{BC}$ sont orthogonaux : le triangle $ABC$ est **rectangle en $B$**.

  **2.** $BA = \sqrt{(-4)^2 + (-2)^2} = \sqrt{20} = 2\sqrt{5}$ et $BC = \sqrt{1^2 + (-2)^2} = \sqrt{5}$.

  **3.** Le triangle est rectangle en $B$, donc son aire est

  $$
  \mathcal{A} = \frac{1}{2} \times BA \times BC = \frac{1}{2} \times 2\sqrt{5} \times \sqrt{5} = \frac{1}{2} \times 10 = 5.
  $$
---
