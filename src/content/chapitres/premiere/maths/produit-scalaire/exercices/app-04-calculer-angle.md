---
titre: Calculer un angle
type: application
notion: Angle entre deux vecteurs
difficulte: Moyen
ordre: 4

enonce: |
  Dans un repère orthonormé, déterminer une mesure de l’angle formé par les vecteurs suivants.

  1. $\vec{u}(1\,;\,1)$ et $\vec{v}(0\,;\,2)$.
  2. $\vec{a}(1\,;\,\sqrt{3})$ et $\vec{b}(-1\,;\,0)$.

indices:
  - |
    Piste générale : $\cos\theta = \dfrac{\vec{u} \cdot \vec{v}}{\|\vec{u}\|\,\|\vec{v}\|}$.
  - |
    Plus précis : identifie ensuite l’angle avec les valeurs remarquables : $\cos 45^\circ = \dfrac{\sqrt{2}}{2}$ et $\cos 120^\circ = -\dfrac{1}{2}$.

correction: |
  **1.** $\vec{u} \cdot \vec{v} = 1 \times 0 + 1 \times 2 = 2$, $\|\vec{u}\| = \sqrt{2}$ et $\|\vec{v}\| = 2$. Donc

  $$
  \cos\theta = \frac{2}{\sqrt{2} \times 2} = \frac{1}{\sqrt{2}} = \frac{\sqrt{2}}{2}, \qquad \text{soit } \theta = 45^\circ.
  $$

  **2.** $\vec{a} \cdot \vec{b} = 1 \times (-1) + \sqrt{3} \times 0 = -1$, $\|\vec{a}\| = \sqrt{1 + 3} = 2$ et $\|\vec{b}\| = 1$. Donc

  $$
  \cos\theta = \frac{-1}{2 \times 1} = -\frac{1}{2}, \qquad \text{soit } \theta = 120^\circ.
  $$
---
