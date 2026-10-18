---
titre: Une partition en trois événements
type: application
notion: Probabilités totales (partition à trois)
difficulte: Moyen
ordre: 10

enonce: |
  Une usine possède trois machines $M_1$, $M_2$ et $M_3$ qui produisent respectivement $50\ \%$, $30\ \%$ et $20\ \%$ des pièces. Les taux de pièces défectueuses sont respectivement $2\ \%$, $3\ \%$ et $5\ \%$. On prélève une pièce au hasard et on note $D$ « la pièce est défectueuse ».

  1. Calculer $P(D)$.
  2. La pièce est défectueuse. Quelle est la probabilité qu’elle provienne de $M_1$ ?
  3. Quelle machine est la plus probable pour une pièce défectueuse ? Justifier.

indices:
  - |
    Piste générale : $M_1$, $M_2$ et $M_3$ forment une partition de l’univers. Fais un arbre à trois branches au premier niveau.
  - |
    Plus précis : $P(D) = P(M_1) \, P_{M_1}(D) + P(M_2) \, P_{M_2}(D) + P(M_3) \, P_{M_3}(D)$ et $P_D(M_i) = \dfrac{P(M_i \cap D)}{P(D)}$.

correction: |
  **1.** $M_1$, $M_2$, $M_3$ forment une partition, donc

  $$
  P(D) = 0{,}5 \times 0{,}02 + 0{,}3 \times 0{,}03 + 0{,}2 \times 0{,}05 = 0{,}010 + 0{,}009 + 0{,}010 = 0{,}029.
  $$

  **2.** $P_D(M_1) = \dfrac{P(M_1 \cap D)}{P(D)} = \dfrac{0{,}010}{0{,}029} = \dfrac{10}{29} \approx 0{,}34$.

  **3.** $P_D(M_2) = \dfrac{0{,}009}{0{,}029} = \dfrac{9}{29}$ et $P_D(M_3) = \dfrac{0{,}010}{0{,}029} = \dfrac{10}{29}$. Les machines $M_1$ et $M_3$ sont à égalité, avec $\dfrac{10}{29}$ chacune, et $M_2$ est moins probable. Le total vaut bien $\dfrac{10 + 9 + 10}{29} = 1$.
---
