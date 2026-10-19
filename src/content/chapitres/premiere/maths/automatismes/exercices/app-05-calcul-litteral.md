---
titre: Développer et factoriser
type: application
notion: Calcul littéral
difficulte: Facile
ordre: 5

enonce: |
  1. Développer $(2x - 3)^2$.
  2. Factoriser $9x^2 - 16$.
  3. Factoriser $x^2 + 6x + 9$.
  4. Factoriser $(x + 2)(x - 5) - 3(x + 2)$.

indices:
  - |
    Piste générale : cherche d’abord une identité remarquable ou un facteur commun.
  - |
    Plus précis : $(a - b)^2 = a^2 - 2ab + b^2$ et $a^2 - b^2 = (a - b)(a + b)$. Pour la 4, le facteur commun est $(x + 2)$.

correction: |
  **1.** On applique l'identité remarquable $(a - b)^2 = a^2 - 2ab + b^2$ avec $a = 2x$ et $b = 3$ :

  $$
  (2x - 3)^2 = (2x)^2 - 2 \times 2x \times 3 + 3^2 = 4x^2 - 12x + 9.
  $$

  **2.** On reconnaît une différence de deux carrés, $a^2 - b^2 = (a - b)(a + b)$, avec $a = 3x$ et $b = 4$ :

  $$
  9x^2 - 16 = (3x)^2 - 4^2 = (3x - 4)(3x + 4).
  $$

  **3.** On reconnaît l'identité $(a + b)^2 = a^2 + 2ab + b^2$ avec $a = x$ et $b = 3$ (le double produit est $2 \times x \times 3 = 6x$) :

  $$
  x^2 + 6x + 9 = (x + 3)^2.
  $$

  **4.** Le facteur $(x + 2)$ est commun aux deux termes :

  $$
  (x + 2)(x - 5) - 3(x + 2) = (x + 2)\left[(x - 5) - 3\right] = (x + 2)(x - 8).
  $$
---
