---
titre: Retards et transport scolaire
type: controle
difficulte: Difficile
duree_estimee: 30
chapitres_mobilises:
  - probabilites-conditionnelles
ordre: 1

enonce: |
  Dans un lycée, $55\ \%$ des élèves viennent en bus. Parmi ceux qui viennent en bus, $20\ \%$ arrivent en retard. Parmi ceux qui ne viennent pas en bus, $5\ \%$ arrivent en retard. On choisit un élève au hasard. On note $B$ « il vient en bus » et $R$ « il arrive en retard ».

  1. Construire l’arbre pondéré.
  2. Calculer la probabilité qu’un élève vienne en bus et soit en retard.
  3. Montrer que $P(R) = 0{,}1325$.
  4. Un élève est en retard. Quelle est la probabilité qu’il soit venu en bus ? Donner la valeur exacte sous forme de fraction irréductible puis une valeur approchée à $10^{-2}$ près.
  5. Les événements $B$ et $R$ sont-ils indépendants ? Justifier.
  6. On choisit deux élèves de manière indépendante. Quelle est la probabilité qu’au moins un des deux soit en retard ?

indices:
  - |
    Piste générale : $P(B) = 0{,}55$, $P_B(R) = 0{,}20$ et $P_{\overline{B}}(R) = 0{,}05$.
  - |
    Pour la question 4 : $P_R(B) = \dfrac{P(B \cap R)}{P(R)} = \dfrac{0{,}11}{0{,}1325}$. Multiplie en haut et en bas par $10000$ pour simplifier.
  - |
    Pour la question 6, passe par l’événement contraire : « aucun des deux n’est en retard ». Les choix étant indépendants, on multiplie les probabilités.

correction: |
  **1.** Premier niveau : $B$ ($0{,}55$) et $\overline{B}$ ($0{,}45$). Après $B$ : $R$ ($0{,}20$) et $\overline{R}$ ($0{,}80$). Après $\overline{B}$ : $R$ ($0{,}05$) et $\overline{R}$ ($0{,}95$).

  **2.** $P(B \cap R) = 0{,}55 \times 0{,}20 = 0{,}11$.

  **3.** $B$ et $\overline{B}$ forment une partition, donc

  $$
  P(R) = P(B \cap R) + P(\overline{B} \cap R) = 0{,}11 + 0{,}45 \times 0{,}05 = 0{,}11 + 0{,}0225 = 0{,}1325.
  $$

  **4.**

  $$
  P_R(B) = \frac{P(B \cap R)}{P(R)} = \frac{0{,}11}{0{,}1325} = \frac{1100}{1325} = \frac{44}{53} \approx 0{,}83.
  $$

  **5.** $P_B(R) = 0{,}20 \neq 0{,}1325 = P(R)$, donc $B$ et $R$ ne sont pas indépendants. (On peut aussi comparer $P(B) \times P(R) = 0{,}55 \times 0{,}1325 \approx 0{,}0729$ avec $P(B \cap R) = 0{,}11$.)

  **6.** L’événement contraire est « aucun des deux n’est en retard », de probabilité $(1 - 0{,}1325)^2 = 0{,}8675^2 = 0{,}75255625$. La probabilité cherchée est donc $1 - 0{,}75255625 = 0{,}24744375$, soit environ $0{,}25$.
---
