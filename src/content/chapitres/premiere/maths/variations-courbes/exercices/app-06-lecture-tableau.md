---
titre: Lire un tableau de variations
type: application
notion: Lecture de tableau
difficulte: Facile
ordre: 6

enonce: |
  On donne le tableau de variations d’une fonction $f$ définie sur $\R$ :

  $$
  \begin{array}{c|ccccccc}
  x & -\infty & & -2 & & 1 & & +\infty \\ \hline
  f & & \nearrow & 3 & \searrow & -1 & \nearrow &
  \end{array}
  $$

  On admet que $f(x)$ tend vers $-\infty$ quand $x$ tend vers $-\infty$ et vers $+\infty$ quand $x$ tend vers $+\infty$.

  1. Donner le signe de $f'(x)$ sur chaque intervalle.
  2. Quels sont les extremums locaux de $f$ ?
  3. Combien de solutions possède l’équation $f(x) = 0$ ?
  4. Combien de solutions possède l’équation $f(x) = 5$ ?
  5. Combien de solutions possède l’équation $f(x) = -1$ ?

indices:
  - |
    Piste générale : flèche montante signifie $f' > 0$, flèche descendante signifie $f' < 0$.
  - |
    Plus précis : pour compter les solutions de $f(x) = k$, regarde chaque intervalle de monotonie et vérifie si $k$ est strictement entre les valeurs des bornes. Pour la question 5, attention à la valeur $-1$ atteinte en un point précis.

correction: |
  **1.** $f'(x) > 0$ sur $\interof{-\infty}{-2}$, $f'(x) < 0$ sur $\interff{-2}{1}$ et $f'(x) > 0$ sur $\interfo{1}{+\infty}$.

  **2.** Maximum local $3$ en $x = -2$ et minimum local $-1$ en $x = 1$.

  **3.** $f(x) = 0$ : sur $\interof{-\infty}{-2}$, $f$ va de $-\infty$ à $3$ (une solution) ; sur $\interff{-2}{1}$, $f$ va de $3$ à $-1$ (une solution) ; sur $\interfo{1}{+\infty}$, $f$ va de $-1$ à $+\infty$ (une solution). Il y a **3 solutions**.

  **4.** $f(x) = 5$ : sur les deux premiers intervalles, $f$ reste inférieure ou égale à $3$, donc aucune solution. Sur $\interfo{1}{+\infty}$, $f$ va de $-1$ à $+\infty$ : une solution. Il y a **1 solution**.

  **5.** $f(x) = -1$ : sur $\interof{-\infty}{-2}$, $f$ va de $-\infty$ à $3$ : une solution. Sur $\interff{-2}{1}$ et sur $\interff{1}{+\infty}$, la valeur $-1$ n’est atteinte qu’en $x = 1$, déjà compté une seule fois. Il y a **2 solutions**.
---
