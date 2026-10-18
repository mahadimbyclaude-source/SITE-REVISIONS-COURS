---
titre: Une équation qui dépend d’un paramètre
type: controle
difficulte: Difficile
duree_estimee: 40
chapitres_mobilises:
  - second-degre
  - Signe d’un quotient (Seconde)
ordre: 1
enonce: |
  Pour tout réel $m$, on considère l’équation d’inconnue $x$ :

  $$
  (E_m) : \quad (m - 1)x^2 - 2mx + m + 2 = 0.
  $$

  1. Résoudre l’équation $(E_1)$, c’est-à-dire le cas $m = 1$.
  2. On suppose désormais $m \neq 1$.
     1. Justifier que $(E_m)$ est une équation du second degré et montrer que son discriminant vaut $\Delta = 4(2 - m)$.
     2. Discuter, selon les valeurs de $m$, le nombre de solutions de $(E_m)$.
  3. Déterminer la valeur de $m$ pour laquelle $-1$ est solution de $(E_m)$, puis trouver l’autre solution sans calculer de discriminant.
  4. Déterminer les valeurs de $m$ pour lesquelles $(E_m)$ admet deux solutions de signes contraires.
indices:
  - |
    Pour $m = 1$, le coefficient de $x^2$ s’annule : l’équation n’est plus du second degré. Ensuite, identifie $a = m - 1$, $b = -2m$ et $c = m + 2$, et utilise les propriétés du cours (discriminant, somme et produit des racines).
  - |
    Question 3 : remplace $x$ par $-1$, puis utilise le produit des racines $\dfrac{c}{a}$. Question 4 : deux racines sont de signes contraires exactement quand leur produit $\dfrac{c}{a} = \dfrac{m + 2}{m - 1}$ est strictement négatif (et dans ce cas $ac < 0$ garantit $\Delta > 0$). Fais un tableau de signes de ce quotient.
correction: |
  **1.** Pour $m = 1$ : $0 \times x^2 - 2x + 3 = 0$, soit $-2x + 3 = 0$, donc $x = \dfrac{3}{2}$. $S = \left\{\dfrac{3}{2}\right\}$.

  **2.a.** Si $m \neq 1$, le coefficient $a = m - 1$ est non nul : c’est une équation du second degré, avec $b = -2m$ et $c = m + 2$.

  $$
  \Delta = (-2m)^2 - 4(m - 1)(m + 2) = 4m^2 - 4(m^2 + m - 2) = -4m + 8 = 4(2 - m).
  $$

  **2.b.** Le signe de $\Delta$ est celui de $2 - m$ :

  - si $m < 2$ (et $m \neq 1$) : $\Delta > 0$, deux solutions distinctes ;
  - si $m = 2$ : $\Delta = 0$, une seule solution $x_0 = -\dfrac{b}{2a} = \dfrac{2 \times 2}{2 \times 1} = 2$ (on a bien $x^2 - 4x + 4 = (x - 2)^2$) ;
  - si $m > 2$ : $\Delta < 0$, aucune solution.

  En tenant compte de la question 1 : une seule solution pour $m = 1$ et pour $m = 2$.

  **3.** $-1$ est solution si et seulement si $(m - 1) + 2m + m + 2 = 0$, soit $4m + 1 = 0$, donc $m = -\dfrac{1}{4}$.

  Dans ce cas, $\dfrac{c}{a} = \dfrac{m + 2}{m - 1} = \dfrac{\frac{7}{4}}{-\frac{5}{4}} = -\dfrac{7}{5}$. Comme $x_1 = -1$, on obtient $x_2 = \dfrac{7}{5}$.

  Vérification avec la somme : $-\dfrac{b}{a} = \dfrac{2m}{m - 1} = \dfrac{-\frac{1}{2}}{-\frac{5}{4}} = \dfrac{2}{5}$ et $-1 + \dfrac{7}{5} = \dfrac{2}{5}$.

  **4.** Deux solutions de signes contraires existent si et seulement si $\dfrac{c}{a} < 0$ (alors $ac < 0$, donc $\Delta = b^2 - 4ac > 0$). On étudie le signe de $\dfrac{m + 2}{m - 1}$ :

  $$
  \begin{array}{|c|ccccccc|}
  \hline
  m & -\infty & & -2 & & 1 & & +\infty \\
  \hline
  m + 2 & & - & 0 & + & | & + & \\
  m - 1 & & - & | & - & 0 & + & \\
  \hline
  \dfrac{m + 2}{m - 1} & & + & 0 & - & \| & + & \\
  \hline
  \end{array}
  $$

  Les solutions sont de signes contraires si et seulement si $m \in \interoo{-2}{1}$.
---
