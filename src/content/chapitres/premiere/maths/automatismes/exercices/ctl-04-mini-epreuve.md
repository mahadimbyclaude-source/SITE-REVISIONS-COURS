---
titre: Mini-épreuve — tout le programme
type: controle
difficulte: Difficile
duree_estimee: 25
chapitres_mobilises:
  - automatismes
  - derivation
  - suites
  - probabilites-conditionnelles
  - produit-scalaire
  - trigonometrie
  - exponentielle
ordre: 4

enonce: |
  Sans calculatrice, répondre à chaque question. On vise un maximum de réponses justes en $25$ minutes.

  1. Calculer $25\ \%$ de $2{,}4$.
  2. Calculer $\dfrac{1}{3} + \dfrac{1}{6}$.
  3. Calculer $(-2)^3 + 3^2$.
  4. Simplifier $\sqrt{45} - \sqrt{20}$.
  5. Développer et réduire $(x + 3)^2 - x^2$.
  6. Résoudre $2x^2 - 8 = 0$.
  7. Soit $f(x) = x^3 - 3x$. Calculer $f'(x)$.
  8. Dresser le tableau de variations de $f$ sur $\R$ en donnant les extremums locaux.
  9. Une suite géométrique a pour premier terme $u_0 = 64$ et pour raison $\dfrac{1}{2}$. Calculer $u_6$.
  10. On a $P(A) = 0{,}5$ et $P(A \cap B) = 0{,}2$. Calculer $P_A(B)$.
  11. Dans un repère orthonormé, les vecteurs $\vec{u}(2\,;\,-1)$ et $\vec{v}(1\,;\,2)$ sont-ils orthogonaux ?
  12. Calculer $\cos\dfrac{\pi}{3} + \sin\dfrac{\pi}{6}$.
  13. Dériver $h(x) = \mathrm{e}^{3x}$.

indices:
  - |
    Piste générale : traite d’abord les questions les plus rapides (1 à 6) pour sécuriser des points, puis passe aux questions de cours.
  - |
    Plus précis : pour la 8, factorise $f'(x) = 3(x - 1)(x + 1)$ et utilise le signe d’un trinôme de coefficient dominant positif.

correction: |
  **1.** $25\ \%$ de $2{,}4$ : $0{,}25 \times 2{,}4 = 0{,}6$.

  **2.** On met au même dénominateur $6$ : $\dfrac{1}{3} + \dfrac{1}{6} = \dfrac{2}{6} + \dfrac{1}{6} = \dfrac{3}{6} = \dfrac{1}{2}$.

  **3.** $(-2)^3 = -8$ et $3^2 = 9$, donc $(-2)^3 + 3^2 = -8 + 9 = 1$.

  **4.** On simplifie chaque racine : $\sqrt{45} = \sqrt{9 \times 5} = 3\sqrt{5}$ et $\sqrt{20} = \sqrt{4 \times 5} = 2\sqrt{5}$. Donc $\sqrt{45} - \sqrt{20} = 3\sqrt{5} - 2\sqrt{5} = \sqrt{5}$.

  **5.** $(x + 3)^2 - x^2 = x^2 + 6x + 9 - x^2 = 6x + 9$.

  **6.** $2x^2 - 8 = 0 \iff x^2 = 4 \iff x = 2$ ou $x = -2$. $S = \{-2\,;\,2\}$.

  **7.** La fonction $f$ est dérivable sur $\R$ et $f'(x) = 3x^2 - 3$.

  **8.** On factorise : $f'(x) = 3(x^2 - 1) = 3(x - 1)(x + 1)$. C'est un trinôme de coefficient dominant positif de racines $-1$ et $1$ : il est positif à l'extérieur de $[-1\,;\,1]$ et négatif entre. On calcule $f(-1) = -1 + 3 = 2$ et $f(1) = 1 - 3 = -2$.

  $$
  \begin{array}{c|ccccccc}
  x & -\infty & & -1 & & 1 & & +\infty \\ \hline
  f'(x) & & + & 0 & - & 0 & + & \\ \hline
  f & & \nearrow & 2 & \searrow & -2 & \nearrow &
  \end{array}
  $$

  La fonction $f$ admet un maximum local égal à $2$ en $x = -1$ et un minimum local égal à $-2$ en $x = 1$.

  **9.** Pour une suite géométrique, $u_n = u_0 \times q^n$. Donc $u_6 = 64 \times \left(\dfrac{1}{2}\right)^6 = 64 \times \dfrac{1}{64} = 1$.

  **10.** Par définition de la probabilité conditionnelle : $P_A(B) = \dfrac{P(A \cap B)}{P(A)} = \dfrac{0{,}2}{0{,}5} = 0{,}4$.

  **11.** On calcule le produit scalaire : $\vec{u} \cdot \vec{v} = 2 \times 1 + (-1) \times 2 = 0$. Le produit scalaire est nul, donc les vecteurs $\vec{u}$ et $\vec{v}$ sont **orthogonaux**.

  **12.** $\cos\dfrac{\pi}{3} = \dfrac{1}{2}$ et $\sin\dfrac{\pi}{6} = \dfrac{1}{2}$, donc la somme vaut $1$.

  **13.** On utilise $\left(\mathrm{e}^{ax}\right)' = a\,\mathrm{e}^{ax}$ : $h'(x) = 3\,\mathrm{e}^{3x}$.
---
