---
titre: Simplifier des expressions
type: application
notion: Propriétés algébriques
difficulte: Facile
ordre: 1

enonce: |
  Simplifier les expressions suivantes.

  1. $A = \mathrm{e}^{3} \times \mathrm{e}^{-5}$
  2. $B = \dfrac{\left(\mathrm{e}^{2}\right)^3}{\mathrm{e}^{4}}$
  3. $C(x) = \dfrac{\mathrm{e}^{x+1}}{\mathrm{e}^{x-2}}$
  4. $D(x) = \left(\mathrm{e}^{x} + \mathrm{e}^{-x}\right)^2 - \left(\mathrm{e}^{x} - \mathrm{e}^{-x}\right)^2$

indices:
  - |
    Piste générale : utilise $\mathrm{e}^a \times \mathrm{e}^b = \mathrm{e}^{a+b}$, $\dfrac{\mathrm{e}^a}{\mathrm{e}^b} = \mathrm{e}^{a-b}$ et $\left(\mathrm{e}^a\right)^n = \mathrm{e}^{na}$.
  - |
    Plus précis : pour $D(x)$, développe avec les identités remarquables et utilise $\mathrm{e}^{x} \times \mathrm{e}^{-x} = \mathrm{e}^0 = 1$.

correction: |
  On utilise, pour tous réels $a$, $b$ et tout entier $n$ : $\mathrm{e}^a \times \mathrm{e}^b = \mathrm{e}^{a+b}$, $\dfrac{\mathrm{e}^a}{\mathrm{e}^b} = \mathrm{e}^{a-b}$ et $\left(\mathrm{e}^a\right)^n = \mathrm{e}^{na}$.

  **1.** $A = \mathrm{e}^{3 + (-5)} = \mathrm{e}^{-2}$.

  **2.** $B = \dfrac{\mathrm{e}^{3 \times 2}}{\mathrm{e}^{4}} = \dfrac{\mathrm{e}^{6}}{\mathrm{e}^{4}} = \mathrm{e}^{6 - 4} = \mathrm{e}^{2}$.

  **3.** $C(x) = \mathrm{e}^{(x+1) - (x-2)} = \mathrm{e}^{3}$, qui ne dépend pas de $x$.

  **4.** On développe avec les identités remarquables, en utilisant $\mathrm{e}^{x} \times \mathrm{e}^{-x} = \mathrm{e}^{0} = 1$ :

  $$
  \left(\mathrm{e}^{x} + \mathrm{e}^{-x}\right)^2 = \mathrm{e}^{2x} + 2 + \mathrm{e}^{-2x} \qquad\text{et}\qquad \left(\mathrm{e}^{x} - \mathrm{e}^{-x}\right)^2 = \mathrm{e}^{2x} - 2 + \mathrm{e}^{-2x}.
  $$

  En soustrayant, les termes $\mathrm{e}^{2x}$ et $\mathrm{e}^{-2x}$ disparaissent :

  $$
  D(x) = (2 + \mathrm{e}^{2x} + \mathrm{e}^{-2x}) - (-2 + \mathrm{e}^{2x} + \mathrm{e}^{-2x}) = 4.
  $$
---
