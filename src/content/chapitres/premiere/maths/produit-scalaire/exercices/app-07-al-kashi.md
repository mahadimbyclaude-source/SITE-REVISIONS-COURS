---
titre: Théorème d’Al-Kashi
type: application
notion: Al-Kashi
difficulte: Moyen
ordre: 7

enonce: |
  1. Dans un triangle $ABC$, on a $AB = 5$, $AC = 7$ et $\widehat{BAC} = 60^\circ$. Calculer $BC$.
  2. Dans un triangle $ABC$, on a $AB = 3$, $AC = 5$ et $BC = 7$. Déterminer l’angle $\widehat{BAC}$.

indices:
  - |
    Piste générale : $BC^2 = AB^2 + AC^2 - 2\,AB \times AC \times \cos\widehat{BAC}$.
  - |
    Plus précis : pour la 2, isole le cosinus : $\cos\widehat{BAC} = \dfrac{AB^2 + AC^2 - BC^2}{2 \times AB \times AC}$.

correction: |
  Le théorème d'Al-Kashi donne $BC^2 = AB^2 + AC^2 - 2\,AB \times AC \times \cos\widehat{BAC}$.

  **1.**

  $$
  BC^2 = 5^2 + 7^2 - 2 \times 5 \times 7 \times \cos 60^\circ = 25 + 49 - 70 \times \frac{1}{2} = 74 - 35 = 39.
  $$

  Donc $BC = \sqrt{39} \approx 6,24$.

  **2.** On isole le cosinus dans la formule d'Al-Kashi :

  $$
  \cos\widehat{BAC} = \frac{AB^2 + AC^2 - BC^2}{2 \times AB \times AC} = \frac{9 + 25 - 49}{2 \times 3 \times 5} = \frac{-15}{30} = -\frac{1}{2}.
  $$

  Comme l'angle appartient à $[0^\circ\,;\,180^\circ]$ et que $\cos 120^\circ = -\dfrac{1}{2}$, on obtient $\widehat{BAC} = 120^\circ$.
---
