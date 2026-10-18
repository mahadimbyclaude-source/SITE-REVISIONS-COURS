---
titre: Une équation qui se ramène à un trinôme
type: application
notion: 'Équation avec $\mathrm{e}^{2x}$'
difficulte: Moyen
ordre: 10

enonce: |
  On considère l’équation $(E)$ : $\mathrm{e}^{2x} - (\mathrm{e} + 1)\mathrm{e}^{x} + \mathrm{e} = 0$.

  1. On pose $X = \mathrm{e}^{x}$. Écrire l’équation vérifiée par $X$.
  2. Résoudre cette équation en $X$ (on remarquera que $\Delta = (\mathrm{e} - 1)^2$).
  3. En déduire les solutions de $(E)$.
  4. En déduire les solutions de l’inéquation $\mathrm{e}^{2x} - (\mathrm{e} + 1)\mathrm{e}^{x} + \mathrm{e} \leq 0$.

indices:
  - |
    Piste générale : $\mathrm{e}^{2x} = \left(\mathrm{e}^{x}\right)^2 = X^2$. On obtient un trinôme en $X$.
  - |
    Plus précis : $\Delta = (\mathrm{e} + 1)^2 - 4\mathrm{e} = (\mathrm{e} - 1)^2$, donc $\sqrt{\Delta} = \mathrm{e} - 1$. Les racines sont $X_1 = 1$ et $X_2 = \mathrm{e}$.
  - |
    Pour la dernière question, un trinôme de coefficient dominant positif est négatif entre ses racines.

correction: |
  **1.** $\mathrm{e}^{2x} = X^2$, donc $X^2 - (\mathrm{e} + 1)X + \mathrm{e} = 0$.

  **2.** $\Delta = (\mathrm{e} + 1)^2 - 4\mathrm{e} = \mathrm{e}^2 + 2\mathrm{e} + 1 - 4\mathrm{e} = (\mathrm{e} - 1)^2 > 0$. Les racines sont

  $$
  X_1 = \frac{(\mathrm{e} + 1) - (\mathrm{e} - 1)}{2} = 1 \qquad \text{et} \qquad X_2 = \frac{(\mathrm{e} + 1) + (\mathrm{e} - 1)}{2} = \mathrm{e}.
  $$

  **3.** Les deux valeurs sont strictement positives, on les garde. $\mathrm{e}^{x} = 1 = \mathrm{e}^{0}$ donne $x = 0$ et $\mathrm{e}^{x} = \mathrm{e} = \mathrm{e}^{1}$ donne $x = 1$. L’ensemble des solutions est $\{0\,;\,1\}$.

  **4.** Le trinôme $X^2 - (\mathrm{e} + 1)X + \mathrm{e}$ est négatif ou nul pour $1 \leq X \leq \mathrm{e}$, soit $\mathrm{e}^{0} \leq \mathrm{e}^{x} \leq \mathrm{e}^{1}$, c’est-à-dire $0 \leq x \leq 1$. Solutions : $\interff{0}{1}$.
---
