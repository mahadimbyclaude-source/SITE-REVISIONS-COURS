---
titre: Dériver des fonctions avec exponentielle
type: application
notion: 'Dérivation de $\exp(ax+b)$'
difficulte: Facile
ordre: 2

enonce: |
  Calculer la dérivée de chaque fonction (définie sur $\R$).

  1. $f(x) = \mathrm{e}^{2x}$
  2. $g(x) = 3\mathrm{e}^{-x}$
  3. $h(x) = \mathrm{e}^{x} + x^2$
  4. $k(x) = (x + 1)\mathrm{e}^{x}$
  5. $l(x) = \mathrm{e}^{3x - 1}$

indices:
  - |
    Piste générale : $\left(\mathrm{e}^{ax+b}\right)' = a\,\mathrm{e}^{ax+b}$. Pour un produit $uv$, $(uv)' = u'v + uv'$.
  - |
    Plus précis : pour $k(x)$, prends $u(x) = x + 1$ et $v(x) = \mathrm{e}^{x}$ puis factorise par $\mathrm{e}^{x}$.

correction: |
  Les cinq fonctions sont dérivables sur $\R$. On utilise $\left(\mathrm{e}^{ax+b}\right)' = a\,\mathrm{e}^{ax+b}$ et $(uv)' = u'v + uv'$.

  **1.** $f'(x) = 2\mathrm{e}^{2x}$.

  **2.** $g'(x) = 3 \times (-1)\,\mathrm{e}^{-x} = -3\mathrm{e}^{-x}$.

  **3.** $h'(x) = \mathrm{e}^{x} + 2x$.

  **4.** $k = uv$ avec $u(x) = x + 1$ et $v(x) = \mathrm{e}^{x}$, donc $u'(x) = 1$ et $v'(x) = \mathrm{e}^{x}$. Ainsi

  $$
  k'(x) = 1 \times \mathrm{e}^{x} + (x + 1)\,\mathrm{e}^{x} = (x + 2)\,\mathrm{e}^{x}.
  $$

  **5.** $l'(x) = 3\,\mathrm{e}^{3x - 1}$.
---
