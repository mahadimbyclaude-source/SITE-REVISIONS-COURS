---
titre: Parité et périodicité
type: application
notion: Parité et période
difficulte: Moyen
ordre: 10

enonce: |
  Pour chaque fonction, étudier la parité, puis donner une période lorsque c’est demandé.

  1. $f(x) = \sin(2x)$ : parité, et montrer que $\pi$ est une période.
  2. $g(x) = \cos x + \cos(2x)$ : parité, et montrer que $2\pi$ est une période.
  3. $h(x) = x\cos x$ : parité.

indices:
  - |
    Piste générale : $f$ est paire si $f(-x) = f(x)$ et impaire si $f(-x) = -f(x)$, pour tout $x$ de $\R$.
  - |
    Plus précis : pour montrer que $T$ est une période, vérifie que $f(x + T) = f(x)$ pour tout $x$.

correction: |
  **1.** $f(-x) = \sin(-2x) = -\sin(2x) = -f(x)$ : $f$ est impaire. Et $f(x + \pi) = \sin(2x + 2\pi) = \sin(2x) = f(x)$ : $\pi$ est une période.

  **2.** $g(-x) = \cos(-x) + \cos(-2x) = \cos x + \cos(2x) = g(x)$ : $g$ est paire. Et $g(x + 2\pi) = \cos(x + 2\pi) + \cos(2x + 4\pi) = \cos x + \cos(2x) = g(x)$ : $2\pi$ est une période.

  **3.** $h(-x) = (-x)\cos(-x) = -x\cos x = -h(x)$ : $h$ est impaire.
---
