---
titre: Démontrer des égalités
type: application
notion: Calcul avec exponentielle
difficulte: Moyen
ordre: 8

enonce: |
  Démontrer les égalités suivantes, valables pour tout réel $x$.

  1. $\dfrac{\mathrm{e}^{2x} - 1}{\mathrm{e}^{x} + 1} = \mathrm{e}^{x} - 1$
  2. $\dfrac{\mathrm{e}^{x}}{1 + \mathrm{e}^{x}} = \dfrac{1}{1 + \mathrm{e}^{-x}}$

indices:
  - |
    Piste générale : pour la 1, reconnais une identité remarquable au numérateur : $\mathrm{e}^{2x} = \left(\mathrm{e}^{x}\right)^2$.
  - |
    Plus précis : pour la 2, multiplie le numérateur et le dénominateur de la fraction de droite par $\mathrm{e}^{x}$ et utilise $\mathrm{e}^{-x} \times \mathrm{e}^{x} = 1$.

correction: |
  **1.** Pour tout réel $x$, $\mathrm{e}^{2x} = \left(\mathrm{e}^{x}\right)^2$. On reconnaît une différence de deux carrés :

  $$
  \mathrm{e}^{2x} - 1 = \left(\mathrm{e}^{x}\right)^2 - 1^2 = \left(\mathrm{e}^{x} - 1\right)\left(\mathrm{e}^{x} + 1\right).
  $$

  Comme $\mathrm{e}^{x} + 1 > 0$, le dénominateur n'est jamais nul et on peut simplifier :

  $$
  \frac{\mathrm{e}^{2x} - 1}{\mathrm{e}^{x} + 1} = \frac{\left(\mathrm{e}^{x} - 1\right)\left(\mathrm{e}^{x} + 1\right)}{\mathrm{e}^{x} + 1} = \mathrm{e}^{x} - 1.
  $$

  **2.** On part du membre de droite et on multiplie le numérateur et le dénominateur par $\mathrm{e}^{x}$, qui est non nul. Comme $\mathrm{e}^{x} \times \mathrm{e}^{-x} = 1$ :

  $$
  \frac{1}{1 + \mathrm{e}^{-x}} = \frac{1 \times \mathrm{e}^{x}}{\left(1 + \mathrm{e}^{-x}\right)\mathrm{e}^{x}} = \frac{\mathrm{e}^{x}}{\mathrm{e}^{x} + \mathrm{e}^{-x}\mathrm{e}^{x}} = \frac{\mathrm{e}^{x}}{\mathrm{e}^{x} + 1}.
  $$

  Cela démontre l'égalité demandée.
---
