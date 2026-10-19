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
  **1.** Une flèche montante correspond à une dérivée positive et une flèche descendante à une dérivée négative :

  - $f'(x) > 0$ sur $\interoo{-\infty}{-2}$ ;
  - $f'(x) < 0$ sur $\interoo{-2}{1}$ ;
  - $f'(x) > 0$ sur $\interoo{1}{+\infty}$ ;
  - $f'(-2) = 0$ et $f'(1) = 0$ (extremums locaux).

  **2.** La fonction $f$ passe de croissante à décroissante en $-2$ et de décroissante à croissante en $1$. Elle admet donc un **maximum local** égal à $3$ en $x = -2$ et un **minimum local** égal à $-1$ en $x = 1$.

  **3.** Équation $f(x) = 0$. On étudie chaque intervalle de monotonie (sur chacun, $f$ est continue et strictement monotone) :

  - sur $\interof{-\infty}{-2}$, $f$ est croissante de $-\infty$ à $3$ et $0$ est dans cet intervalle de valeurs : une solution ;
  - sur $\interff{-2}{1}$, $f$ est décroissante de $3$ à $-1$ et $0$ est compris entre ces valeurs : une solution ;
  - sur $\interfo{1}{+\infty}$, $f$ est croissante de $-1$ à $+\infty$ : une solution.

  L'équation possède **3 solutions**.

  **4.** Équation $f(x) = 5$. Sur $\interof{-\infty}{-2}$ et sur $\interff{-2}{1}$, les valeurs de $f$ sont inférieures ou égales à $3 < 5$ : aucune solution. Sur $\interfo{1}{+\infty}$, $f$ est croissante de $-1$ à $+\infty$ et $5$ est dans cet intervalle de valeurs : une solution.

  L'équation possède **1 solution**.

  **5.** Équation $f(x) = -1$. Sur $\interof{-\infty}{-2}$, $f$ est croissante de $-\infty$ à $3$ et $-1$ est dans cet intervalle de valeurs : une solution (strictement inférieure à $-2$). Sur $\interff{-2}{1}$, $f$ décroît jusqu'à $-1$, valeur qui n'est atteinte qu'en $x = 1$. Sur $\interfo{1}{+\infty}$, $f$ est strictement supérieure à $-1$ pour $x > 1$ ; la valeur $-1$ est atteinte en $x = 1$, déjà compté.

  L'équation possède **2 solutions** : l'une dans $\interoo{-\infty}{-2}$ et $x = 1$.
---
