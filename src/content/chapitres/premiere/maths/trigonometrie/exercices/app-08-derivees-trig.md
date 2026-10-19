---
titre: Dériver avec cos et sin
type: application
notion: Dérivées trigonométriques
difficulte: Facile
ordre: 8

enonce: |
  Calculer la dérivée de chaque fonction sur $\R$.

  1. $f(x) = \cos(2x)$
  2. $g(x) = \sin(3x + 1)$
  3. $h(x) = x\sin x$
  4. $k(x) = 2\cos x - \sin x$

indices:
  - |
    Piste générale : $\left(\cos(ax + b)\right)' = -a\sin(ax + b)$ et $\left(\sin(ax + b)\right)' = a\cos(ax + b)$.
  - |
    Plus précis : pour $h$, utilise la dérivée d’un produit avec $u(x) = x$ et $v(x) = \sin x$.

correction: |
  On utilise $\left(\cos(ax+b)\right)' = -a\sin(ax+b)$ et $\left(\sin(ax+b)\right)' = a\cos(ax+b)$. Les quatre fonctions sont dérivables sur $\R$.

  **1.** $f'(x) = -2\sin(2x)$.

  **2.** $g'(x) = 3\cos(3x + 1)$.

  **3.** $h = uv$ avec $u(x) = x$ et $v(x) = \sin x$, donc $u'(x) = 1$ et $v'(x) = \cos x$. D'après la formule $(uv)' = u'v + uv'$ :

  $$
  h'(x) = 1 \times \sin x + x\cos x = \sin x + x\cos x.
  $$

  **4.** $k'(x) = 2 \times (-\sin x) - \cos x = -2\sin x - \cos x$.
---
