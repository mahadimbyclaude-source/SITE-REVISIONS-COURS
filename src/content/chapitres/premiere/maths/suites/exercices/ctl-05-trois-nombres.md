---
titre: Trois nombres en progression
type: controle
difficulte: Difficile
duree_estimee: 30
chapitres_mobilises:
  - suites
  - second-degre
ordre: 5

enonce: |
  Trois nombres $x_1$, $x_2$, $x_3$ sont trois termes consécutifs d’une suite arithmétique de somme $21$. Si on leur ajoute respectivement $0$, $1$ et $6$, on obtient trois termes consécutifs d’une suite géométrique.

  On cherche ces trois nombres.

  1. Montrer que $x_2 = 7$ et que les nombres s’écrivent $7 - r$, $7$ et $7 + r$, où $r$ est la raison de la suite arithmétique.
  2. Rappeler pourquoi, si trois nombres non nuls $a$, $b$, $c$ sont des termes consécutifs d’une suite géométrique, alors $b^2 = ac$.
  3. En déduire que $r$ vérifie l’équation $r^2 + 6r - 27 = 0$.
  4. Résoudre cette équation et donner les deux triplets de nombres possibles. Vérifier chaque triplet.

indices:
  - |
    Trois termes consécutifs d’une suite arithmétique s’écrivent $x_2 - r$, $x_2$, $x_2 + r$.
  - |
    Après ajout, les trois nombres sont $7 - r$, $8$ et $13 + r$. Applique la relation $b^2 = ac$ avec $b = 8$.
  - |
    Pour la dernière question, ne te contente pas de résoudre : calcule les nombres obtenus après ajout et vérifie qu’ils forment bien une progression géométrique.

correction: |
  **1.** Les nombres sont $x_2 - r$, $x_2$ et $x_2 + r$. Leur somme vaut $3x_2 = 21$, donc $x_2 = 7$. Les nombres sont $7 - r$, $7$ et $7 + r$.

  **2.** Si $b = qa$ et $c = qb$, alors $ac = a \times q^2 a = (qa)^2 = b^2$.

  **3.** Après ajout, on obtient $7 - r$, $8$ et $13 + r$. D’après la question 2 :

  $$
  8^2 = (7 - r)(13 + r) = 91 - 6r - r^2,
  $$

  soit $64 = 91 - 6r - r^2$, c’est-à-dire $r^2 + 6r - 27 = 0$.

  **4.** $\Delta = 36 + 108 = 144$ et $\sqrt{\Delta} = 12$, donc

  $$
  r_1 = \frac{-6 - 12}{2} = -9 \qquad\text{et}\qquad r_2 = \frac{-6 + 12}{2} = 3.
  $$

  - Pour $r = 3$ : les nombres sont $4$, $7$, $10$. Après ajout : $4$, $8$, $16$, suite géométrique de raison $2$.
  - Pour $r = -9$ : les nombres sont $16$, $7$, $-2$. Après ajout : $16$, $8$, $4$, suite géométrique de raison $\dfrac{1}{2}$.

  Il y a donc deux solutions : $(4\,;\,7\,;\,10)$ et $(16\,;\,7\,;\,-2)$.
---
