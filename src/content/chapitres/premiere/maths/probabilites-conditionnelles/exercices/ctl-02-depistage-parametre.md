---
titre: Dépistage et fréquence de la maladie
type: controle
difficulte: Difficile
duree_estimee: 40
chapitres_mobilises:
  - probabilites-conditionnelles
  - second-degre
ordre: 2

enonce: |
  Une maladie touche une proportion $p$ de la population, avec $0 < p < 1$. Un test est positif ($T$) avec une probabilité $0{,}9$ pour une personne malade ($M$) et avec une probabilité $0{,}1$ pour une personne non malade.

  1. Construire l’arbre pondéré en fonction de $p$.
  2. Montrer que $P(T) = 0{,}8p + 0{,}1$.
  3. Montrer que $P_T(M) = \dfrac{0{,}9p}{0{,}8p + 0{,}1}$.
  4. Calculer $P_T(M)$ pour $p = 0{,}01$ puis pour $p = 0{,}1$. Commenter.
  5. Pour quelles valeurs de $p$ a-t-on $P_T(M) \geq 0{,}5$ ? Interpréter.

indices:
  - |
    Piste générale : $P(M) = p$ et $P(\overline{M}) = 1 - p$. Les probabilités conditionnelles sont $P_M(T) = 0{,}9$ et $P_{\overline{M}}(T) = 0{,}1$.
  - |
    Plus précis : $P(T) = 0{,}9p + 0{,}1(1 - p)$. Développe et réduis.
  - |
    Pour la question 5, comme $0{,}8p + 0{,}1 > 0$, tu peux multiplier les deux membres de l’inéquation par ce dénominateur sans changer le sens.

correction: |
  **1.** *Arbre pondéré.* Premier niveau : $M$ avec la probabilité $p$ et $\overline{M}$ avec $1 - p$. Deuxième niveau :

  - après $M$ : $T$ avec $0{,}9$ et $\overline{T}$ avec $0{,}1$ ;
  - après $\overline{M}$ : $T$ avec $0{,}1$ et $\overline{T}$ avec $0{,}9$.

  **2.** Les événements $M$ et $\overline{M}$ forment une partition de l'univers. D'après la formule des probabilités totales,

  $$
  P(T) = P(M) \times P_M(T) + P(\overline{M}) \times P_{\overline{M}}(T) = 0{,}9p + 0{,}1(1 - p) = 0{,}9p + 0{,}1 - 0{,}1p = 0{,}8p + 0{,}1.
  $$

  **3.** Par définition de la probabilité conditionnelle, avec $P(M \cap T) = P(M) \times P_M(T) = 0{,}9p$ :

  $$
  P_T(M) = \frac{P(M \cap T)}{P(T)} = \frac{0{,}9p}{0{,}8p + 0{,}1}.
  $$

  **4.** Pour $p = 0{,}01$ : $P_T(M) = \dfrac{0{,}009}{0{,}008 + 0{,}1} = \dfrac{0{,}009}{0{,}108} = \dfrac{1}{12} \approx 0{,}08$.

  Pour $p = 0{,}1$ : $P_T(M) = \dfrac{0{,}09}{0{,}08 + 0{,}1} = \dfrac{0{,}09}{0{,}18} = \dfrac{1}{2}$.

  *Commentaire.* Quand la maladie est rare ($1\ \%$ de la population), un test positif ne correspond qu'à environ $8\ \%$ de chances d'être malade. Quand elle est plus fréquente ($10\ \%$), cette probabilité monte à $50\ \%$.

  **5.** Comme $0{,}8p + 0{,}1 > 0$, on peut multiplier les deux membres par ce dénominateur sans changer le sens de l'inégalité :

  $$
  \frac{0{,}9p}{0{,}8p + 0{,}1} \geq 0{,}5 \iff 0{,}9p \geq 0{,}5(0{,}8p + 0{,}1) = 0{,}4p + 0{,}05 \iff 0{,}5p \geq 0{,}05 \iff p \geq 0{,}1.
  $$

  *Interprétation.* Il faut qu'au moins $10\ \%$ de la population soit malade pour qu'une personne testée positive ait au moins une chance sur deux d'être réellement malade.
---
