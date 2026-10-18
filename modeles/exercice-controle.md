---
# ─────────────────────────────────────────────────────────────────────────────
# MODÈLE — Exo type contrôle
# Copier ce fichier dans :
#   src/content/chapitres/<classe>/<matiere>/<chapitre>/exercices/ctl-04-mon-exercice.md
# (le nom du fichier sert d'ancre dans l'URL : minuscules, tirets, sans accents)
#
# Rappels :
#  - Problème long en plusieurs questions, qui mobilise tout le chapitre
#    et des notions des chapitres précédents.
#  - Toute expression mathématique en LaTeX : $...$ dans le texte, $$...$$ centré.
#  - Fractions avec \dfrac{a}{b} (jamais a/b), virgule décimale : $0,25$.
#  - Intervalles : \interoo{a}{b} = ]a;b[, \interff = [a;b], \interof = ]a;b], \interfo = [a;b[
#  - Tableaux de signes / variations : \begin{array}...\end{array} dans un bloc $$.
#  - Le « | » après enonce/indices/correction permet d'écrire sur plusieurs lignes.
#    Garder l'indentation de 2 espaces (4 sous un tiret d'indice).
# ─────────────────────────────────────────────────────────────────────────────

titre: Étude d'une fonction polynôme de degré 3   # pas de formule dans le titre
type: controle                                     # ne pas modifier
difficulte: Difficile                              # Moyen, Difficile ou Très difficile
duree_estimee: 35                                  # obligatoire, en minutes
chapitres_mobilises:                               # obligatoire, au moins un
  - derivation                                     # slug d'un chapitre existant → lien cliquable
  - second-degre
  # - Fonctions (Seconde)                          # ou texte libre pour une notion antérieure
ordre: 4                                           # facultatif : position dans l'onglet

enonce: |
  Soit $f$ la fonction définie sur $\R$ par $f(x) = 2x^3 - 3x^2 - 12x + 5$.

  1. Calculer $f'(x)$.
  2. Étudier le signe de $f'(x)$.
  3. Dresser le tableau de variations de $f$.
  4. Déterminer une équation de la tangente à la courbe de $f$ au point d’abscisse $0$.

indices:
  # Au moins deux indices, du plus général au plus précis.
  # Le site affiche déjà « Indice 1 · piste générale », « Indice 2 · plus précis » :
  # inutile de l’écrire dans le texte de l’indice.
  - |
    Le signe de $f'(x)$ donne les variations de $f$. Ici $f'(x)$ est un trinôme du second degré.
  - |
    $f'(x) = 6x^2 - 6x - 12 = 6(x^2 - x - 2)$, dont les racines sont $-1$ et $2$.

correction: |
  **1.** $f'(x) = 6x^2 - 6x - 12 = 6(x^2 - x - 2)$.

  **2.** $\Delta = 1 + 8 = 9$, racines $\dfrac{1 - 3}{2} = -1$ et $\dfrac{1 + 3}{2} = 2$. Le trinôme est positif à l’extérieur des racines.

  **3.** $f(-1) = -2 - 3 + 12 + 5 = 12$ et $f(2) = 16 - 12 - 24 + 5 = -15$.

  $$
  \begin{array}{|c|ccccccc|}
  \hline
  x & -\infty & & -1 & & 2 & & +\infty \\
  \hline
  f'(x) & & + & 0 & - & 0 & + & \\
  \hline
   & & & 12 & & & & \\
  f & & \nearrow & & \searrow & & \nearrow & \\
   & & & & & -15 & & \\
  \hline
  \end{array}
  $$

  **4.** $f(0) = 5$ et $f'(0) = -12$, donc la tangente a pour équation $y = -12x + 5$.
---
