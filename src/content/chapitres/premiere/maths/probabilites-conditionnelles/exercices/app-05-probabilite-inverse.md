---
titre: Remonter l’arbre
type: application
notion: Probabilité inverse
difficulte: Moyen
ordre: 5

enonce: |
  On reprend $P(A) = 0{,}6$, $P_A(B) = 0{,}5$ et $P_{\overline{A}}(B) = 0{,}2$, avec $P(B) = 0{,}38$.

  1. Calculer $P_B(A)$ sous forme de fraction irréductible puis donner une valeur approchée à $10^{-2}$ près.
  2. Calculer $P_B(\overline{A})$ et vérifier que $P_B(A) + P_B(\overline{A}) = 1$.
  3. Que signifie $P_B(A)$ dans cette situation : « parmi les cas où $B$ est réalisé... » ?

indices:
  - |
    Piste générale : $P_B(A) = \dfrac{P(A \cap B)}{P(B)}$. Le numérateur est une feuille de l’arbre.
  - |
    Plus précis : $P(A \cap B) = 0{,}30$ et $P(B) = 0{,}38$. Simplifie $\dfrac{30}{38}$.

correction: |
  **1.** $P_B(A) = \dfrac{P(A \cap B)}{P(B)} = \dfrac{0{,}30}{0{,}38} = \dfrac{30}{38} = \dfrac{15}{19} \approx 0{,}79$.

  **2.** $P_B(\overline{A}) = \dfrac{P(\overline{A} \cap B)}{P(B)} = \dfrac{0{,}08}{0{,}38} = \dfrac{4}{19}$ et $\dfrac{15}{19} + \dfrac{4}{19} = 1$.

  **3.** Parmi les cas où $B$ est réalisé, environ $79\ \%$ sont aussi des cas où $A$ est réalisé.
---
