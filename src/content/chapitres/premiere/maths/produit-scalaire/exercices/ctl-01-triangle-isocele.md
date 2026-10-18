---
titre: Un triangle isocèle dans un repère
type: controle
difficulte: Difficile
duree_estimee: 35
chapitres_mobilises:
  - produit-scalaire
  - second-degre
ordre: 1

enonce: |
  Dans un repère orthonormé, on donne $A(1\,;\,1)$, $B(5\,;\,2)$ et $C(2\,;\,5)$.

  1. Calculer $AB$, $AC$ et $BC$. Quelle est la nature du triangle $ABC$ ?
  2. Calculer $\overrightarrow{AB} \cdot \overrightarrow{AC}$ puis en déduire $\cos\widehat{BAC}$.
  3. Vérifier le résultat avec le théorème d’Al-Kashi.
  4. Déterminer une équation de la hauteur issue de $A$.
  5. Calculer l’aire du triangle $ABC$ de deux façons : avec le milieu $H$ de $[BC]$ et les coordonnées de $H$, puis avec la formule $\dfrac{1}{2}\left|x_{\overrightarrow{AB}}\,y_{\overrightarrow{AC}} - y_{\overrightarrow{AB}}\,x_{\overrightarrow{AC}}\right|$.

indices:
  - |
    Piste générale : $\overrightarrow{AB}(4\,;\,1)$, $\overrightarrow{AC}(1\,;\,4)$ et $\overrightarrow{BC}(-3\,;\,3)$.
  - |
    Plus précis : la hauteur issue de $A$ est la droite passant par $A$ et de vecteur normal $\overrightarrow{BC}$.
  - |
    Pour l’aire avec $H$ : $H$ milieu de $[BC]$, $\text{aire} = \dfrac{1}{2} \times BC \times AH$ car $(AH)$ est une hauteur dans un triangle isocèle en $A$.

correction: |
  **1.** $AB = \sqrt{16 + 1} = \sqrt{17}$, $AC = \sqrt{1 + 16} = \sqrt{17}$ et $BC = \sqrt{9 + 9} = \sqrt{18} = 3\sqrt{2}$. On a $AB = AC$ : le triangle est isocèle en $A$ (et pas équilatéral).

  **2.** $\overrightarrow{AB} \cdot \overrightarrow{AC} = 4 \times 1 + 1 \times 4 = 8$. Or $\overrightarrow{AB} \cdot \overrightarrow{AC} = AB \times AC \times \cos\widehat{BAC} = 17\cos\widehat{BAC}$, donc $\cos\widehat{BAC} = \dfrac{8}{17}$.

  **3.** Al-Kashi : $BC^2 = AB^2 + AC^2 - 2\,AB \times AC \times \cos\widehat{BAC} = 17 + 17 - 2 \times 17 \times \dfrac{8}{17} = 34 - 16 = 18$. On retrouve bien $BC^2 = 18$.

  **4.** La hauteur issue de $A$ passe par $A(1\,;\,1)$ et a pour vecteur normal $\overrightarrow{BC}(-3\,;\,3)$ : $-3(x - 1) + 3(y - 1) = 0$, soit $-3x + 3y = 0$, c’est-à-dire $y = x$.

  **5.** Le milieu de $[BC]$ est $H\left(\dfrac{7}{2}\,;\,\dfrac{7}{2}\right)$, qui est bien sur la droite $y = x$. Alors $\overrightarrow{AH}\left(\dfrac{5}{2}\,;\,\dfrac{5}{2}\right)$ et $AH = \dfrac{5\sqrt{2}}{2}$. L’aire vaut

  $$
  \frac{1}{2} \times BC \times AH = \frac{1}{2} \times 3\sqrt{2} \times \frac{5\sqrt{2}}{2} = \frac{1}{2} \times \frac{30}{2} = \frac{15}{2}.
  $$

  Avec les coordonnées : $\dfrac{1}{2}\left|4 \times 4 - 1 \times 1\right| = \dfrac{15}{2}$. Les deux méthodes donnent $7{,}5$.
---
