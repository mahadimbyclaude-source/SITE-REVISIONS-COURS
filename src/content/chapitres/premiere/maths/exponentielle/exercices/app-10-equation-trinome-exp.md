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
  **1.** Pour tout réel $x$, $\mathrm{e}^{2x} = \left(\mathrm{e}^{x}\right)^2 = X^2$. L'équation $(E)$ devient

  $$
  X^2 - (\mathrm{e} + 1)X + \mathrm{e} = 0.
  $$

  **2.** Le discriminant est $\Delta = (\mathrm{e} + 1)^2 - 4\mathrm{e} = \mathrm{e}^2 + 2\mathrm{e} + 1 - 4\mathrm{e} = (\mathrm{e} - 1)^2 > 0$, donc $\sqrt{\Delta} = \mathrm{e} - 1$. Les deux racines sont

  $$
  X_1 = \frac{(\mathrm{e} + 1) - (\mathrm{e} - 1)}{2} = 1 \qquad\text{et}\qquad X_2 = \frac{(\mathrm{e} + 1) + (\mathrm{e} - 1)}{2} = \mathrm{e}.
  $$

  **3.** Comme $X = \mathrm{e}^{x}$, on résout $\mathrm{e}^{x} = 1$ et $\mathrm{e}^{x} = \mathrm{e}$ (les deux valeurs sont strictement positives, donc possibles) :

  - $\mathrm{e}^{x} = 1 = \mathrm{e}^{0}$ donne $x = 0$ ;
  - $\mathrm{e}^{x} = \mathrm{e} = \mathrm{e}^{1}$ donne $x = 1$.

  $S = \{0\,;\,1\}$.

  **4.** Le trinôme $X^2 - (\mathrm{e} + 1)X + \mathrm{e}$ a un coefficient dominant positif : il est négatif ou nul entre ses racines, c'est-à-dire pour $1 \leq X \leq \mathrm{e}$. Cela s'écrit $\mathrm{e}^{0} \leq \mathrm{e}^{x} \leq \mathrm{e}^{1}$, soit $0 \leq x \leq 1$ par croissance de l'exponentielle.

  $S = \interff{0}{1}$.
---
