---
titre: Équations, inéquations et système
type: application
notion: Équations de degré 1
difficulte: Facile
ordre: 6

enonce: |
  1. Résoudre $3x - 7 = 11$.
  2. Résoudre $5 - 2x > 9$.
  3. Résoudre $\dfrac{x - 1}{3} = \dfrac{2x + 1}{4}$.
  4. Résoudre le système $\begin{cases} 2x + y = 7 \\ x - y = -1 \end{cases}$.

indices:
  - |
    Piste générale : isole $x$ en faisant les mêmes opérations des deux côtés. Attention au sens de l’inégalité quand tu divises par un nombre négatif.
  - |
    Plus précis : pour la 3, utilise le produit en croix. Pour le système, additionne les deux équations pour éliminer $y$.

correction: |
  **1.** $3x - 7 = 11 \iff 3x = 18 \iff x = 6$.

  $S = \{6\}$.

  **2.** $5 - 2x > 9 \iff -2x > 4$. En divisant par $-2$ qui est négatif, on change le sens de l'inégalité : $x < -2$.

  $S = \interoo{-\infty}{-2}$.

  **3.** On utilise le produit en croix (les dénominateurs $3$ et $4$ sont non nuls) :

  $$
  \frac{x - 1}{3} = \frac{2x + 1}{4} \iff 4(x - 1) = 3(2x + 1) \iff 4x - 4 = 6x + 3 \iff -2x = 7 \iff x = -\frac{7}{2}.
  $$

  $S = \left\{-\dfrac{7}{2}\right\}$.

  **4.** On additionne les deux équations pour éliminer $y$ : $(2x + y) + (x - y) = 7 + (-1)$, soit $3x = 6$ et $x = 2$. En remplaçant dans la première équation : $2 \times 2 + y = 7$, donc $y = 3$. Vérification dans la seconde : $2 - 3 = -1$.

  $S = \{(2\,;\,3)\}$.
---
