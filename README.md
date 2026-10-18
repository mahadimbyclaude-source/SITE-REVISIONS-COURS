# Révisions Spé

Site statique de révisions de spécialité (lycée général) : cours, fiche de révision, exercices d’application et exos type contrôle, avec indices progressifs et corrections. Construit avec [Astro](https://astro.build), formules rendues par [KaTeX](https://katex.org), recherche par [Pagefind](https://pagefind.app), hébergé gratuitement sur Cloudflare Pages.

**Version 1** : Mathématiques de Première, chapitres *Second degré* et *Dérivation*. Terminale et Physique-chimie s’affichent « Bientôt disponible » ; ils s’activent automatiquement dès qu’on ajoute du contenu.

## Commandes

| Commande | Rôle |
| --- | --- |
| `npm install` | Installe les dépendances (Node 20.3 minimum, Node 22 conseillé) |
| `npm run dev` | Serveur de développement sur <http://localhost:4321> (la recherche n’y fonctionne pas) |
| `npm run build` | Construit le site dans `dist/`, crée l’index de recherche, puis vérifie toutes les formules |
| `npm run preview` | Sert le site construit, recherche comprise |
| `npm run test:visuel` | Test visuel dans un vrai navigateur (après `npm run build`) |

## Ajouter du contenu

Tout le contenu est dans `src/content/chapitres/<classe>/<matière>/<chapitre>/` :

```
src/content/chapitres/premiere/maths/second-degre/
├── cours.mdx                      → onglet « Cours » (son frontmatter décrit le chapitre)
├── fiche.mdx                      → onglet « Fiche de révision »
└── exercices/
    ├── app-01-forme-canonique.md  → type: application → onglet « Exercices d’application »
    └── ctl-01-equation-parametre.md → type: controle  → onglet « Exos type contrôle »
```

Pour mettre un chapitre en avant sur l’accueil (comme les Automatismes, pour l’épreuve anticipée), ajoute-le à `CHAPITRES_EN_AVANT` dans `src/lib/catalogue.ts`.

**Ajouter un chapitre = créer un dossier avec ces fichiers.** Aucune autre modification : la liste des chapitres, les onglets, la navigation et la recherche se mettent à jour seuls. Les classes possibles sont `premiere` et `terminale`, les matières `maths` et `physique-chimie` (voir `src/lib/catalogue.ts`).

### Le cours (`cours.mdx`)

```mdx
---
titre: Second degré
ordre: 1                 # position dans la liste des chapitres
description: Forme canonique, discriminant, racines…
---

## Titre de section

<Bloc type="definition" titre="Discriminant">

Le **discriminant** est $\Delta = b^2 - 4ac$.

</Bloc>
```

Types de `<Bloc>` : `definition`, `propriete`, `theoreme`, `methode`, `exemple`, `remarque`, `attention`, `demonstration` (repliable). Laisser une ligne vide après la balise ouvrante et avant la balise fermante. La fiche (`fiche.mdx`) s’écrit de la même façon.

### Un exercice (`exercices/*.md`)

Un fichier par exercice ; tout est dans le frontmatter. `enonce`, chaque indice et `correction` sont du Markdown avec LaTeX (utiliser `|` pour écrire sur plusieurs lignes).

```yaml
---
titre: Calculer le discriminant et résoudre
type: application            # application | controle
notion: Discriminant et racines   # application : regroupe les exercices par notion
difficulte: Facile           # application : Facile | Moyen
                             # controle    : Moyen | Difficile | Très difficile
duree_estimee: 40            # minutes — obligatoire pour un exo type contrôle
chapitres_mobilises:         # obligatoire pour un exo type contrôle
  - derivation               # slug d’un chapitre → lien vers ce chapitre
  - Fonctions (Seconde)      # ou texte libre
ordre: 3                     # facultatif : ordre d’affichage
enonce: |
  Résoudre $3x^2 - 5x - 2 = 0$.
indices:                     # au moins deux, du plus général au plus précis
  - |
    Identifie $a$, $b$ et $c$.
  - |
    $\Delta = b^2 - 4ac$, puis $x_{1,2} = \dfrac{-b \pm \sqrt{\Delta}}{2a}$.
correction: |
  $\Delta = 49$, donc …
---
```

Ces règles sont vérifiées au build : un exercice d’application « Difficile » ou un exo type contrôle sans durée fait échouer `npm run build` avec un message clair.

## Écrire les formules

- Toute expression mathématique est en LaTeX : `$…$` dans le texte, `$$…$$` pour une formule centrée.
- Fractions : `\frac{a}{b}` (ou `\dfrac` dans le texte), **jamais** `a/b`.
- Virgule décimale : écrire `$0,25$` ; elle est automatiquement collée (`0{,}25`). Pour une liste de nombres, utiliser le point-virgule : `\{1\,;\,2\}`.
- Raccourcis disponibles : `\R`, `\N`, `\Z`, `\Q` et les intervalles à la française `\interoo{-\infty}{-1}` → ]−∞ ; −1[, `\interff`, `\interof`, `\interfo` (o = ouvert, f = fermé).
- Tableaux de signes et de variations : `\begin{array}…\end{array}` dans un bloc `$$` (voir les exemples dans les cours). Les formules larges défilent horizontalement sur téléphone.
- Les titres peuvent contenir une formule entre `$…$` : sections (`##`), encadrés (`titre="Suite $(\mathrm{e}^{an})$"`), exercices (`titre:`) et notions (`notion:`). Jamais de formule en texte simple (`e^(2x)`, `f(x) = k`).
- Seule exception : la `description` d’un chapitre reste en texte simple (elle sert aussi de résumé pour les moteurs de recherche), donc sans formule.
- Indices : inutile de commencer par « Piste générale : » ou « Plus précis : ». Si c’est le cas, le site s’en sert comme étiquette de l’indice au lieu de le répéter.

## Vérifications automatiques

1. **`scripts/verifier-formules.mjs`** (lancé à la fin de `npm run build`, donc aussi sur Cloudflare) : parcourt chaque page de `dist/` et échoue s’il trouve une erreur KaTeX, du LaTeX brut visible (`$`, `\frac`…), une fraction écrite avec `/`, un nombre décimal avec un point, ou un indice/une correction indexé par la recherche. Un site avec une formule cassée n’est donc jamais déployé.
2. **`tests/visuel.spec.ts`** (Playwright) : ouvre chaque page en format téléphone et ordinateur, déplie tous les indices et corrections, vérifie le rendu KaTeX, l’absence de LaTeX brut et de débordement horizontal, teste la recherche, puis enregistre des captures pleine page dans `test-results/captures/`. Sous Windows, il utilise Microsoft Edge déjà installé ; ailleurs : `PW_CHANNEL=chrome npm run test:visuel` ou `npx playwright install chromium`.

## Recherche

Pagefind indexe uniquement le contenu des onglets de chapitre (cours, fiche, énoncés). Les **indices et corrections ne sont pas indexés**. Chaque résultat affiche le chapitre, l’onglet et un extrait dont les formules sont rendues par KaTeX. Raccourcis : `/` ou `Ctrl+K`.

## Déployer sur Cloudflare Pages

1. Créer un dépôt GitHub et y pousser ce dossier.
2. Dans le tableau de bord Cloudflare : **Workers & Pages → Créer → Pages → Se connecter à Git**, puis choisir le dépôt.
3. Paramètres de build :
   - Préréglage : **Astro**
   - Commande de build : `npm run build`
   - Répertoire de sortie : `dist`
4. Enregistrer et déployer. Chaque `git push` sur la branche principale redéploie le site ; chaque autre branche obtient une URL de prévisualisation.

La version de Node utilisée par Cloudflare est fixée par `.nvmrc` (Node 22).

## Arborescence du code

```
src/
├── content.config.ts         schémas des collections (cours, fiches, exercices)
├── content/chapitres/        tout le contenu
├── data/annales.ts           liens vers Éduscol et l’APMEP
├── lib/
│   ├── catalogue.ts          classes, matières, onglets
│   ├── contenu.ts            assemblage des chapitres
│   ├── markdown.ts           rendu Markdown + KaTeX des champs d’exercice
│   ├── extrait.ts            rendu KaTeX des extraits de recherche
│   └── math/                 options KaTeX et plugins remark/rehype partagés
├── components/               Bloc, Exercice (indices + correction), Recherche…
├── layouts/Base.astro
├── pages/                    accueil, annales, classe, matière, onglets de chapitre
└── styles/global.css         design (bleu foncé, accents jaunes)
```
