---
# ─────────────────────────────────────────────────────────────────────────────
# MODÈLE — Exercice d'application
# Copier ce fichier dans :
#   src/content/chapitres/<classe>/<matiere>/<chapitre>/exercices/app-08-mon-exercice.md
# (le nom du fichier sert d'ancre dans l'URL : minuscules, tirets, sans accents)
#
# Rappels :
#  - Une seule méthode du chapitre, 1 à 3 questions courtes.
#  - Toute expression mathématique en LaTeX : $...$ dans le texte, $$...$$ centré.
#  - Fractions avec \dfrac{a}{b} (jamais a/b), virgule décimale : $0,25$.
#  - Intervalles : \interoo{a}{b} = ]a;b[, \interff = [a;b], \interof = ]a;b], \interfo = [a;b[
#  - Le « | » après enonce/indices/correction permet d'écrire sur plusieurs lignes.
#    Garder l'indentation de 2 espaces (4 sous un tiret d'indice).
# ─────────────────────────────────────────────────────────────────────────────

titre: Résoudre une équation du second degré   # pas de formule dans le titre
type: application                              # ne pas modifier
notion: Discriminant et racines                # regroupe les exercices dans l'onglet (même texte = même groupe)
difficulte: Facile                             # Facile ou Moyen uniquement
ordre: 8                                       # facultatif : position dans l'onglet
# duree_estimee: 10                            # facultatif pour un exercice d'application (en minutes)

enonce: |
  Résoudre dans $\R$ les équations suivantes.

  1. $2x^2 - 3x - 2 = 0$
  2. $x^2 + x + 1 = 0$

indices:
  # Au moins deux indices, du plus général au plus précis.
  # Le site affiche déjà « Indice 1 · piste générale », « Indice 2 · plus précis » :
  # inutile de l’écrire dans le texte de l’indice.
  - |
    Identifie $a$, $b$ et $c$, puis calcule le discriminant.
  - |
    $\Delta = b^2 - 4ac$. Si $\Delta > 0$, les solutions sont $\dfrac{-b - \sqrt{\Delta}}{2a}$ et $\dfrac{-b + \sqrt{\Delta}}{2a}$.

correction: |
  **1.** $a = 2$, $b = -3$, $c = -2$. $\Delta = 9 + 16 = 25 > 0$ et $\sqrt{25} = 5$.

  $$
  x_1 = \frac{3 - 5}{4} = -\frac{1}{2}
  \qquad\text{et}\qquad
  x_2 = \frac{3 + 5}{4} = 2.
  $$

  $S = \left\{-\dfrac{1}{2}\,;\,2\right\}$.

  **2.** $\Delta = 1 - 4 = -3 < 0$ : pas de solution réelle, $S = \varnothing$.
---
