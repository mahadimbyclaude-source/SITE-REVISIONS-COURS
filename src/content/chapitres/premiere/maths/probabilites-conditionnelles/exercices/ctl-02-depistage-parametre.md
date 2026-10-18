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
  **1.** Premier niveau : $M$ ($p$) et $\overline{M}$ ($1 - p$). Après $M$ : $T$ ($0{,}9$) et $\overline{T}$ ($0{,}1$). Après $\overline{M}$ : $T$ ($0{,}1$) et $\overline{T}$ ($0{,}9$).

  **2.** Par les probabilités totales : $P(T) = p \times 0{,}9 + (1 - p) \times 0{,}1 = 0{,}9p + 0{,}1 - 0{,}1p = 0{,}8p + 0{,}1$.

  **3.** $P_T(M) = \dfrac{P(M \cap T)}{P(T)} = \dfrac{0{,}9p}{0{,}8p + 0{,}1}$.

  **4.** Pour $p = 0{,}01$ : $P_T(M) = \dfrac{0{,}009}{0{,}108} = \dfrac{1}{12} \approx 0{,}08$. Pour $p = 0{,}1$ : $P_T(M) = \dfrac{0{,}09}{0{,}18} = \dfrac{1}{2}$.

  Quand la maladie est rare ($1\ \%$), un test positif ne signifie que $8\ \%$ de chances d’être malade. Quand elle est plus fréquente ($10\ \%$), la probabilité monte à $50\ \%$.

  **5.** Comme $0{,}8p + 0{,}1 > 0$, l’inéquation $\dfrac{0{,}9p}{0{,}8p + 0{,}1} \geq 0{,}5$ équivaut à $0{,}9p \geq 0{,}4p + 0{,}05$, soit $0{,}5p \geq 0{,}05$, donc $p \geq 0{,}1$.

  Il faut qu’au moins $10\ \%$ de la population soit malade pour qu’un test positif donne au moins une chance sur deux d’être réellement malade.
---
