---
titre: Normes d’une somme et d’une différence
type: application
notion: Identités remarquables
difficulte: Moyen
ordre: 6

enonce: |
  Soit $\vec{u}$ et $\vec{v}$ deux vecteurs tels que $\|\vec{u}\| = 3$, $\|\vec{v}\| = 4$ et $\vec{u} \cdot \vec{v} = -5$.

  1. Calculer $\|\vec{u} + \vec{v}\|^2$.
  2. Calculer $\|\vec{u} - \vec{v}\|^2$.
  3. Calculer $(\vec{u} + \vec{v}) \cdot (\vec{u} - \vec{v})$.

indices:
  - |
    Piste générale : $\|\vec{u} + \vec{v}\|^2 = \|\vec{u}\|^2 + 2\,\vec{u} \cdot \vec{v} + \|\vec{v}\|^2$.
  - |
    Plus précis : pour la 3, développe avec la bilinéarité : $(\vec{u} + \vec{v}) \cdot (\vec{u} - \vec{v}) = \|\vec{u}\|^2 - \|\vec{v}\|^2$.

correction: |
  On utilise les identités $\|\vec{u} \pm \vec{v}\|^2 = \|\vec{u}\|^2 \pm 2\,\vec{u} \cdot \vec{v} + \|\vec{v}\|^2$.

  **1.** $\|\vec{u} + \vec{v}\|^2 = 3^2 + 2 \times (-5) + 4^2 = 9 - 10 + 16 = 15$.

  **2.** $\|\vec{u} - \vec{v}\|^2 = 3^2 - 2 \times (-5) + 4^2 = 9 + 10 + 16 = 35$.

  **3.** Par bilinéarité du produit scalaire, les termes croisés se compensent :

  $$
  (\vec{u} + \vec{v}) \cdot (\vec{u} - \vec{v}) = \vec{u} \cdot \vec{u} - \vec{u} \cdot \vec{v} + \vec{v} \cdot \vec{u} - \vec{v} \cdot \vec{v} = \|\vec{u}\|^2 - \|\vec{v}\|^2 = 9 - 16 = -7.
  $$
---
