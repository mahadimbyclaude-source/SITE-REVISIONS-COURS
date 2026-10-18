---
titre: Un test de dépistage
type: application
notion: Arbre, totales et inverse
difficulte: Moyen
ordre: 6

enonce: |
  Dans une population, $2\ \%$ des personnes sont atteintes d’une maladie $M$. Un test est positif ($T$) pour $95\ \%$ des personnes malades et pour $10\ \%$ des personnes non malades.

  1. Construire l’arbre pondéré.
  2. Calculer la probabilité qu’une personne choisie au hasard ait un test positif.
  3. Une personne a un test positif. Quelle est la probabilité qu’elle soit malade ? Commenter.

indices:
  - |
    Piste générale : $P(M) = 0{,}02$, $P_M(T) = 0{,}95$ et $P_{\overline{M}}(T) = 0{,}10$.
  - |
    Plus précis : $P(T) = P(M) \, P_M(T) + P(\overline{M}) \, P_{\overline{M}}(T)$ puis $P_T(M) = \dfrac{P(M \cap T)}{P(T)}$.

correction: |
  **1.** Premier niveau : $M$ ($0{,}02$) et $\overline{M}$ ($0{,}98$). Après $M$ : $T$ ($0{,}95$) et $\overline{T}$ ($0{,}05$). Après $\overline{M}$ : $T$ ($0{,}10$) et $\overline{T}$ ($0{,}90$).

  **2.** $M$ et $\overline{M}$ forment une partition, donc

  $$
  P(T) = 0{,}02 \times 0{,}95 + 0{,}98 \times 0{,}10 = 0{,}019 + 0{,}098 = 0{,}117.
  $$

  **3.** $P_T(M) = \dfrac{P(M \cap T)}{P(T)} = \dfrac{0{,}019}{0{,}117} = \dfrac{19}{117} \approx 0{,}16$.

  Malgré un test performant, seulement environ $16\ \%$ des personnes testées positives sont malades : la maladie est rare, donc les faux positifs (parmi $98\ \%$ de personnes saines) sont bien plus nombreux que les vrais positifs.
---
