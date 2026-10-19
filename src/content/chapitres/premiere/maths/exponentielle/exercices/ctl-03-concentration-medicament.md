---
titre: Concentration d’un médicament
type: controle
difficulte: Moyen
duree_estimee: 35
chapitres_mobilises:
  - exponentielle
  - suites
ordre: 3

enonce: |
  La concentration d’un médicament dans le sang, en mg/L, est modélisée en fonction du temps $t$ (en heures, $t \geq 0$) par $C(t) = 5\,\mathrm{e}^{-0{,}4t}$.

  1. Calculer $C(0)$. Calculer $C'(t)$ et en déduire le sens de variation de $C$.
  2. On note $c_n = C(n)$ pour tout entier $n$. Montrer que $(c_n)$ est une suite géométrique dont on précisera la raison et le premier terme.
  3. Donner une valeur approchée de $C(5)$ à $10^{-2}$ près (on admet que $\mathrm{e}^{-2} \approx 0{,}135$).
  4. On cherche le premier entier $n$ à partir duquel la concentration devient inférieure à $1$ mg/L. Compléter le programme suivant puis donner la valeur affichée.

  ```python
  from math import exp
  n = 0
  while ...:
      n = n + 1
  print(n)
  ```

indices:
  - |
    Piste générale : $C(t) = 5\,\mathrm{e}^{at}$ avec $a = -0{,}4$ et la dérivée de $\mathrm{e}^{at}$ est $a\,\mathrm{e}^{at}$.
  - |
    Plus précis : $c_{n+1} = 5\,\mathrm{e}^{-0{,}4(n+1)} = 5\,\mathrm{e}^{-0{,}4n} \times \mathrm{e}^{-0{,}4}$.
  - |
    Pour le programme, la boucle doit continuer tant que la concentration est supérieure ou égale à $1$ : la condition utilise $5 \times \exp(-0{,}4 \times n)$.

correction: |
  **1.** $C(0) = 5\,\mathrm{e}^{0} = 5$ : la concentration initiale est de $5$ mg/L.

  La fonction $C$ est dérivable sur $\interfo{0}{+\infty}$ et $C'(t) = 5 \times (-0{,}4)\,\mathrm{e}^{-0{,}4t} = -2\,\mathrm{e}^{-0{,}4t}$. Comme $\mathrm{e}^{-0{,}4t} > 0$, on a $C'(t) < 0$ pour tout $t \geq 0$ : la fonction $C$ est **strictement décroissante**.

  **2.** Pour tout entier $n$ :

  $$
  c_{n+1} = 5\,\mathrm{e}^{-0{,}4(n+1)} = 5\,\mathrm{e}^{-0{,}4n} \times \mathrm{e}^{-0{,}4} = \mathrm{e}^{-0{,}4}\,c_n.
  $$

  La suite $(c_n)$ est donc **géométrique** de raison $\mathrm{e}^{-0{,}4}$ et de premier terme $c_0 = C(0) = 5$.

  **3.** $C(5) = 5\,\mathrm{e}^{-0{,}4 \times 5} = 5\,\mathrm{e}^{-2} \approx 5 \times 0{,}135 = 0{,}675$. Au bout de $5$ heures, la concentration est d'environ $0{,}68$ mg/L.

  **4.** On incrémente $n$ tant que la concentration est encore supérieure ou égale à $1$ mg/L :

  ```python
  from math import exp
  n = 0
  while 5 * exp(-0.4 * n) >= 1:
      n = n + 1
  print(n)
  ```

  Pour $n = 4$, $5\,\mathrm{e}^{-1{,}6} \approx 1,01 \geq 1$ : la boucle continue. Pour $n = 5$, $5\,\mathrm{e}^{-2} \approx 0,68 < 1$ : la boucle s'arrête. Le programme affiche **5** : c'est à partir de la $5^{\text{e}}$ heure que la concentration est inférieure à $1$ mg/L.
---
