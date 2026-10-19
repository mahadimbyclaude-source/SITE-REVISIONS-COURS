---
titre: Série 2 — calcul littéral et équations
type: controle
difficulte: Moyen
duree_estimee: 15
chapitres_mobilises:
  - automatismes
ordre: 2

enonce: |
  Sans calculatrice, répondre à chaque question.

  1. Développer $(x - 4)(2x + 1)$.
  2. Développer $(3x - 2)^2$.
  3. Factoriser $x^2 - 49$.
  4. Factoriser $4x^2 - 12x + 9$.
  5. Factoriser $(x - 1)(2x + 3) + (x - 1)(x - 5)$.
  6. Résoudre $5x - 3 = 2x + 9$.
  7. Résoudre $(x - 2)(3x + 6) = 0$.
  8. Résoudre $x^2 - 3x - 10 = 0$.
  9. Résoudre $-2x + 6 \leq 0$.
  10. Résoudre le système $\begin{cases} x + y = 10 \\ 2x - y = 2 \end{cases}$.

indices:
  - |
    Piste générale : cherche d’abord une identité remarquable ou un facteur commun avant de développer.
  - |
    Plus précis : pour la 8, cherche deux nombres de somme $3$ et de produit $-10$. Pour la 9, attention au sens de l’inégalité.

correction: |
  **1.** $(x - 4)(2x + 1) = 2x^2 + x - 8x - 4 = 2x^2 - 7x - 4$.

  **2.** Identité remarquable $(a - b)^2 = a^2 - 2ab + b^2$ : $(3x - 2)^2 = 9x^2 - 12x + 4$.

  **3.** Différence de deux carrés : $x^2 - 49 = x^2 - 7^2 = (x - 7)(x + 7)$.

  **4.** On reconnaît $(2x)^2 - 2 \times 2x \times 3 + 3^2$ : $4x^2 - 12x + 9 = (2x - 3)^2$.

  **5.** Le facteur $(x - 1)$ est commun :

  $$
  (x - 1)(2x + 3) + (x - 1)(x - 5) = (x - 1)\left[(2x + 3) + (x - 5)\right] = (x - 1)(3x - 2).
  $$

  **6.** $5x - 3 = 2x + 9 \iff 3x = 12 \iff x = 4$. $S = \{4\}$.

  **7.** Un produit est nul si et seulement si l'un de ses facteurs est nul : $x - 2 = 0$ ou $3x + 6 = 0$, soit $x = 2$ ou $x = -2$. $S = \{-2\,;\,2\}$.

  **8.** On cherche deux nombres de somme $3$ et de produit $-10$ : ce sont $5$ et $-2$. Donc $x^2 - 3x - 10 = (x - 5)(x + 2)$, d'où $x = 5$ ou $x = -2$. $S = \{-2\,;\,5\}$.

  **9.** $-2x + 6 \leq 0 \iff -2x \leq -6$. En divisant par $-2$ (négatif), on change le sens : $x \geq 3$. $S = \interfo{3}{+\infty}$.

  **10.** On additionne les deux équations pour éliminer $y$ : $3x = 12$, donc $x = 4$. Puis $y = 10 - x = 6$. Vérification : $2 \times 4 - 6 = 2$. $S = \{(4\,;\,6)\}$.
---
