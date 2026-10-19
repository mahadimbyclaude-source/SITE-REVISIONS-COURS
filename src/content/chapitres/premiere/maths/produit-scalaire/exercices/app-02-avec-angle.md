---
titre: Produit scalaire avec un angle
type: application
notion: Produit scalaire et cosinus
difficulte: Facile
ordre: 2

enonce: |
  Dans un triangle $ABC$, on a $AB = 4$ et $AC = 3$.

  1. Calculer $\overrightarrow{AB} \cdot \overrightarrow{AC}$ lorsque $\widehat{BAC} = 60^\circ$.
  2. Calculer $\overrightarrow{AB} \cdot \overrightarrow{AC}$ lorsque $\widehat{BAC} = 120^\circ$.
  3. Calculer $\overrightarrow{AB} \cdot \overrightarrow{AC}$ lorsque $\widehat{BAC} = 90^\circ$. Que peut-on dire du triangle ?

indices:
  - |
    Piste générale : $\overrightarrow{AB} \cdot \overrightarrow{AC} = AB \times AC \times \cos\widehat{BAC}$.
  - |
    Plus précis : $\cos 60^\circ = \dfrac{1}{2}$, $\cos 120^\circ = -\dfrac{1}{2}$ et $\cos 90^\circ = 0$.

correction: |
  On utilise la formule $\overrightarrow{AB} \cdot \overrightarrow{AC} = AB \times AC \times \cos\widehat{BAC}$, avec $AB \times AC = 4 \times 3 = 12$.

  **1.** $\overrightarrow{AB} \cdot \overrightarrow{AC} = 12 \times \cos 60^\circ = 12 \times \dfrac{1}{2} = 6$.

  **2.** $\overrightarrow{AB} \cdot \overrightarrow{AC} = 12 \times \cos 120^\circ = 12 \times \left(-\dfrac{1}{2}\right) = -6$.

  **3.** $\overrightarrow{AB} \cdot \overrightarrow{AC} = 12 \times \cos 90^\circ = 0$. Le produit scalaire est nul, donc les vecteurs $\overrightarrow{AB}$ et $\overrightarrow{AC}$ sont orthogonaux (ce que l'on savait déjà puisque l'angle vaut $90^\circ$) : le triangle $ABC$ est **rectangle en $A$**.
---
