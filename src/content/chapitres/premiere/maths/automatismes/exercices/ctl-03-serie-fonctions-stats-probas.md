---
titre: Série 3 — fonctions, statistiques et probabilités
type: controle
difficulte: Moyen
duree_estimee: 15
chapitres_mobilises:
  - automatismes
ordre: 3

enonce: |
  Sans calculatrice, répondre à chaque question.

  1. Soit $f(x) = -3x + 5$. Calculer $f(2)$.
  2. Déterminer l’antécédent de $8$ par $f$.
  3. Déterminer l’expression de la fonction affine dont la droite passe par $(0\,;\,2)$ et $(4\,;\,-2)$.
  4. Factoriser $x^2 - 4x + 3$ puis donner sa forme canonique.
  5. Dériver $g(x) = 3x^2 - 5x + 1$.
  6. Calculer la moyenne et la médiane de la série $2$ ; $4$ ; $4$ ; $6$ ; $9$.
  7. Une urne contient $3$ boules rouges et $2$ boules bleues. On tire deux boules sans remise. Quelle est la probabilité de tirer deux rouges ?
  8. Deux événements indépendants $A$ et $B$ vérifient $P(A) = 0{,}3$ et $P(B) = 0{,}5$. Calculer $P(A \cap B)$ puis $P(A \cup B)$.
  9. Une suite arithmétique a pour premier terme $u_0 = 4$ et pour raison $3$. Calculer $u_{10}$.
  10. Une suite géométrique a pour premier terme $v_0 = 2$ et pour raison $3$. Calculer $v_4$.

indices:
  - |
    Piste générale : pour une suite arithmétique $u_n = u_0 + nr$, pour une suite géométrique $v_n = v_0 \times q^n$.
  - |
    Plus précis : pour la 7, la probabilité de la première rouge est $\dfrac{3}{5}$ et il reste ensuite $4$ boules dont $2$ rouges.

correction: |
  **1.** $f(2) = -3 \times 2 + 5 = -1$.

  **2.** L'antécédent de $8$ est la solution de $f(x) = 8$ : $-3x + 5 = 8 \iff -3x = 3 \iff x = -1$.

  **3.** Le coefficient directeur est $m = \dfrac{-2 - 2}{4 - 0} = -1$ et l'ordonnée à l'origine est $2$ (la droite passe par $(0\,;\,2)$). La fonction est $g(x) = -x + 2$. On vérifie : $g(4) = -2$.

  **4.** Les racines de $x^2 - 4x + 3$ sont $1$ et $3$ (somme $4$, produit $3$), donc $x^2 - 4x + 3 = (x - 1)(x - 3)$. Pour la forme canonique, $x^2 - 4x + 3 = (x - 2)^2 - 4 + 3 = (x - 2)^2 - 1$.

  **5.** $g'(x) = 3 \times 2x - 5 = 6x - 5$.

  **6.** La moyenne est $\dfrac{2 + 4 + 4 + 6 + 9}{5} = \dfrac{25}{5} = 5$. La série comporte $5$ valeurs rangées dans l'ordre croissant : la médiane est la $3^{\text{e}}$, soit $4$.

  **7.** Au premier tirage, $P(\text{rouge}) = \dfrac{3}{5}$. Sans remise, il reste $4$ boules dont $2$ rouges, donc la probabilité d'une seconde rouge sachant la première est $\dfrac{2}{4}$. Ainsi

  $$
  P = \frac{3}{5} \times \frac{2}{4} = \frac{6}{20} = \frac{3}{10}.
  $$

  **8.** Les événements $A$ et $B$ sont indépendants, donc $P(A \cap B) = P(A) \times P(B) = 0{,}3 \times 0{,}5 = 0{,}15$. Puis $P(A \cup B) = P(A) + P(B) - P(A \cap B) = 0{,}3 + 0{,}5 - 0{,}15 = 0{,}65$.

  **9.** Pour une suite arithmétique, $u_n = u_0 + nr$, donc $u_{10} = 4 + 10 \times 3 = 34$.

  **10.** Pour une suite géométrique, $v_n = v_0 \times q^n$, donc $v_4 = 2 \times 3^4 = 2 \times 81 = 162$.
---
