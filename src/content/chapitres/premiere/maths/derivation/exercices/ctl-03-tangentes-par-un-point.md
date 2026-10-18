---
titre: Tangentes passant par un point donné
type: controle
difficulte: Très difficile
duree_estimee: 50
chapitres_mobilises:
  - derivation
  - second-degre
ordre: 3
enonce: |
  Soit $f$ la fonction définie sur $\R$ par $f(x) = x^2 - 2x + 3$, et $\mathcal{P}$ sa courbe (une parabole). Pour tout réel $a$, on note $T_a$ la tangente à $\mathcal{P}$ au point d’abscisse $a$.

  **Partie A**

  1. Montrer que $T_a$ a pour équation $y = (2a - 2)x - a^2 + 3$.
  2. On considère le point $A(1\,;\,-2)$. Montrer que $T_a$ passe par $A$ si et seulement si $a^2 - 2a - 3 = 0$.
  3. En déduire les équations des tangentes à $\mathcal{P}$ qui passent par $A$.

  **Partie B**

  Soit $m$ un réel et $A_m(1\,;\,m)$.

  1. Montrer que $T_a$ passe par $A_m$ si et seulement si $a^2 - 2a + m - 1 = 0$.
  2. Déterminer, selon les valeurs de $m$, le nombre de tangentes à $\mathcal{P}$ passant par $A_m$.
  3. Calculer $f(1)$ et interpréter graphiquement le résultat de la question précédente.
indices:
  - |
    Partie A : utilise $y = f'(a)(x - a) + f(a)$, puis écris que les coordonnées de $A$ vérifient l’équation de $T_a$. Partie B : même idée, l’inconnue est $a$ et $m$ est un paramètre.
  - |
    $f'(a) = 2a - 2$. En remplaçant $x$ par $1$ dans l’équation de $T_a$, on obtient $y = -a^2 + 2a + 1$. Partie B : le nombre de tangentes est le nombre de solutions $a$ de $a^2 - 2a + m - 1 = 0$, donc il dépend du signe de son discriminant $\Delta = 8 - 4m$.
correction: |
  **Partie A**

  **1.** $f'(x) = 2x - 2$, donc $f'(a) = 2a - 2$ et $f(a) = a^2 - 2a + 3$.

  $$
  T_a : y = (2a - 2)(x - a) + a^2 - 2a + 3 = (2a - 2)x - 2a^2 + 2a + a^2 - 2a + 3 = (2a - 2)x - a^2 + 3.
  $$

  **2.** $A \in T_a \iff -2 = (2a - 2) \times 1 - a^2 + 3 \iff -2 = -a^2 + 2a + 1 \iff a^2 - 2a - 3 = 0$.

  **3.** $\Delta = 4 + 12 = 16$, d’où $a = \dfrac{2 - 4}{2} = -1$ ou $a = \dfrac{2 + 4}{2} = 3$.

  - $a = -1$ : $T_{-1} : y = -4x + 2$.
  - $a = 3$ : $T_3 : y = 4x - 6$.

  Deux tangentes passent par $A$. Vérification : $-4 + 2 = -2$ et $4 - 6 = -2$.

  **Partie B**

  **1.** $A_m \in T_a \iff m = (2a - 2) - a^2 + 3 \iff a^2 - 2a + m - 1 = 0$.

  **2.** Équation du second degré d’inconnue $a$ : $\Delta = 4 - 4(m - 1) = 8 - 4m = 4(2 - m)$.

  - Si $m < 2$ : $\Delta > 0$, **deux** tangentes passent par $A_m$.
  - Si $m = 2$ : $\Delta = 0$, **une seule** tangente (pour $a = 1$).
  - Si $m > 2$ : $\Delta < 0$, **aucune** tangente ne passe par $A_m$.

  **3.** $f(1) = 1 - 2 + 3 = 2$ : le point $A_2$ est sur la parabole, et la seule tangente qui passe par lui est la tangente en ce point. Les points $A_m$ avec $m > 2$ sont au-dessus de $\mathcal{P}$, à l’intérieur de la parabole : aucune tangente ne les atteint. Les points avec $m < 2$ sont en dessous de $\mathcal{P}$ : on peut tracer deux tangentes, comme pour $A$ dans la partie A.
---
