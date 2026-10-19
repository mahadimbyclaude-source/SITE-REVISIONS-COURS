---
titre: Réflexes sur le second degré
type: application
notion: Second degré
difficulte: Moyen
ordre: 8

enonce: |
  1. Résoudre $x^2 - 5x + 6 = 0$ en cherchant la somme et le produit des racines.
  2. Écrire $x^2 - 4x + 7$ sous forme canonique. Quel est le minimum de ce trinôme ?
  3. Sans calculer les racines, donner la somme et le produit des racines de $x^2 - 7x + 10$, puis les trouver.
  4. Le trinôme $x^2 - 4x + 7$ a-t-il des racines réelles ? Justifier avec le discriminant.

indices:
  - |
    Piste générale : pour $ax^2 + bx + c$, la somme des racines est $-\dfrac{b}{a}$ et le produit est $\dfrac{c}{a}$.
  - |
    Plus précis : $x^2 - 4x = (x - 2)^2 - 4$. Le discriminant est $\Delta = b^2 - 4ac$.

correction: |
  **1.** Pour $x^2 - 5x + 6$, la somme des racines vaut $-\dfrac{b}{a} = 5$ et leur produit vaut $\dfrac{c}{a} = 6$. Les nombres de somme $5$ et de produit $6$ sont $2$ et $3$.

  $S = \{2\,;\,3\}$.

  **2.** On met sous forme canonique : $x^2 - 4x = (x - 2)^2 - 4$, donc

  $$
  x^2 - 4x + 7 = (x - 2)^2 - 4 + 7 = (x - 2)^2 + 3.
  $$

  Comme $(x - 2)^2 \geq 0$, le trinôme est supérieur ou égal à $3$, avec égalité pour $x = 2$ : son minimum est $3$.

  **3.** Pour $x^2 - 7x + 10$, la somme des racines est $7$ et leur produit est $10$. Les nombres de somme $7$ et de produit $10$ sont $2$ et $5$ : ce sont les racines.

  **4.** Le discriminant de $x^2 - 4x + 7$ est $\Delta = (-4)^2 - 4 \times 1 \times 7 = 16 - 28 = -12$. Comme $\Delta < 0$, le trinôme n'a **aucune racine réelle**. C'est cohérent avec la question 2 : son minimum est $3 > 0$, donc il ne s'annule jamais.
---
