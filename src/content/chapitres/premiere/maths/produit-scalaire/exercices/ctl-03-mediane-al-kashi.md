---
titre: Médiane et angle obtus
type: controle
difficulte: Moyen
duree_estimee: 30
chapitres_mobilises:
  - produit-scalaire
ordre: 3

enonce: |
  Soit $ABC$ un triangle avec $AB = 6$, $AC = 4$ et $BC = 8$. On note $I$ le milieu de $[BC]$.

  1. Montrer que $\overrightarrow{AB} \cdot \overrightarrow{AC} = -6$.
  2. En déduire $\cos\widehat{BAC}$. L’angle $\widehat{BAC}$ est-il aigu ou obtus ?
  3. Exprimer $\overrightarrow{AI}$ en fonction de $\overrightarrow{AB}$ et $\overrightarrow{AC}$.
  4. Calculer $AI^2$ puis $AI$.

indices:
  - |
    Piste générale : $\overrightarrow{AB} \cdot \overrightarrow{AC} = \dfrac{1}{2}\left(AB^2 + AC^2 - BC^2\right)$.
  - |
    Plus précis : $I$ est le milieu de $[BC]$, donc $\overrightarrow{AI} = \dfrac{1}{2}\left(\overrightarrow{AB} + \overrightarrow{AC}\right)$. Élève au carré en utilisant $\|\vec{u} + \vec{v}\|^2 = \|\vec{u}\|^2 + 2\,\vec{u} \cdot \vec{v} + \|\vec{v}\|^2$.

correction: |
  **1.** Dans un triangle, $\overrightarrow{AB} \cdot \overrightarrow{AC} = \dfrac{1}{2}\left(AB^2 + AC^2 - BC^2\right)$. Donc

  $$
  \overrightarrow{AB} \cdot \overrightarrow{AC} = \frac{1}{2}\left(36 + 16 - 64\right) = \frac{1}{2} \times (-12) = -6.
  $$

  **2.** D'autre part, $\overrightarrow{AB} \cdot \overrightarrow{AC} = AB \times AC \times \cos\widehat{BAC} = 24\cos\widehat{BAC}$. Ainsi $24\cos\widehat{BAC} = -6$, soit

  $$
  \cos\widehat{BAC} = -\frac{1}{4}.
  $$

  Le cosinus est négatif : l'angle $\widehat{BAC}$ est **obtus**.

  **3.** Le point $I$ est le milieu de $[BC]$, donc $\overrightarrow{AI} = \dfrac{1}{2}\left(\overrightarrow{AB} + \overrightarrow{AC}\right)$.

  **4.** On élève au carré :

  $$
  AI^2 = \frac{1}{4}\left\|\overrightarrow{AB} + \overrightarrow{AC}\right\|^2 = \frac{1}{4}\left(AB^2 + 2\,\overrightarrow{AB} \cdot \overrightarrow{AC} + AC^2\right) = \frac{1}{4}\left(36 - 12 + 16\right) = \frac{40}{4} = 10.
  $$

  Donc $AI = \sqrt{10}$.
---
