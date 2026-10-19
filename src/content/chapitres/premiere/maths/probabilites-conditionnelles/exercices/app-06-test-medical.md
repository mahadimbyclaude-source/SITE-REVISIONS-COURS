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
  **1.** *Arbre pondéré.* Premier niveau : $M$ avec la probabilité $0{,}02$ et $\overline{M}$ avec $1 - 0{,}02 = 0{,}98$. Deuxième niveau :

  - après $M$ : $T$ avec $0{,}95$ et $\overline{T}$ avec $0{,}05$ ;
  - après $\overline{M}$ : $T$ avec $0{,}10$ et $\overline{T}$ avec $0{,}90$.

  **2.** Les événements $M$ et $\overline{M}$ forment une partition de l'univers. D'après la formule des probabilités totales,

  $$
  P(T) = P(M) \times P_M(T) + P(\overline{M}) \times P_{\overline{M}}(T) = 0{,}02 \times 0{,}95 + 0{,}98 \times 0{,}10 = 0{,}019 + 0{,}098 = 0{,}117.
  $$

  **3.** On cherche $P_T(M)$ :

  $$
  P_T(M) = \frac{P(M \cap T)}{P(T)} = \frac{0{,}019}{0{,}117} = \frac{19}{117} \approx 0{,}16.
  $$

  *Commentaire.* Malgré un test performant, seulement environ $16\ \%$ des personnes testées positives sont malades. La maladie est rare : les faux positifs, issus des $98\ \%$ de personnes saines ($0{,}098$ au total), sont bien plus nombreux que les vrais positifs ($0{,}019$).
---
