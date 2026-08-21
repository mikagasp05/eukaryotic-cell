# ADN 3D — de la cellule à l'ADN

Expérience 3D interactive (Three.js) pour le cours de génétique.

Un écran de choix en vue 360° présente un champ de cellules ; on en sélectionne une et on plonge
dedans. Deux parcours :

- **Cellule animale** → plongée *powers of ten* continue : **cellule → chromosome métaphasique →
  fibre de chromatine (la fibre 30 nm se déroule en collier 10 nm) → nucléosome → double hélice →
  atomes**, avec l'atlas des protéines de l'ADN (16 structures PDB réelles, rendues avec 3Dmol).
- **Cellule végétale** → cellule → chloroplaste → membrane thylakoïdale, et atlas de la photosynthèse.
- **Cellule musculaire** → fibre → sarcomère → ponts d'union, et atlas de la contraction.

## Lancer en développement

Prérequis : [Node.js](https://nodejs.org) 18 ou plus.

```bash
npm install      # une seule fois
npm run dev      # démarre Vite et ouvre le site
```

Vite affiche une URL locale (en général `http://localhost:5173`), avec rechargement à chaud
à chaque sauvegarde.

## Build de production

```bash
npm run build    # génère dist/
npm run preview  # sert le build pour vérification
```

`dist/` est entièrement statique et à chemins relatifs (`base: './'`) : il fonctionne à la racine
d'un domaine, dans un sous-dossier, ou même ouvert depuis le disque.

## Mise en ligne

- **GitHub Pages** — le workflow `.github/workflows/deploy.yml` construit et publie à chaque push
  sur `main`. À activer une fois : *Settings → Pages → Source = GitHub Actions*.
- **Netlify / Vercel / Cloudflare Pages** — commande de build `npm run build`, dossier publié `dist`.
  (Ou glisser-déposer `dist/` directement sur Netlify.)

## Structure

| Chemin | Rôle |
|---|---|
| `index.html` | Toute la page : écran de chargement, écran de choix, plongée, atlas des protéines |
| `assets/engine.js` | Moteur 3D de la plongée |
| `assets/three.module-*.js` | Three.js utilisé par le moteur |
| `public/cellule-vegetale.html` | Page autonome de la cellule végétale, chargée en iframe |
| `public/cellule-musculaire.html` | Page autonome de la cellule musculaire, chargée en iframe |
| `public/vendor/dc-runtime.js` | Runtime des deux pages ci-dessus (voir *Pages de cellules*) |
| `public/vendor/three.module.min.js` | Three.js servi en local pour ces pages |
| `public/pdb/*.pdb` | 16 structures RCSB PDB servies localement (atlas hors-ligne) |

Tout ce qui est dans `public/` est copié tel quel dans `dist/` par Vite.

## Notes techniques

- **Écran de chargement.** Il couvre la construction du champ 3D *et* le préchargement des
  16 structures PDB (~5 Mo compressés) ; sa barre suit l'avancement réel, avec un plancher de
  2,8 s pour l'animation et un plafond de 12 s pour ne jamais bloquer une connexion lente.
  Grâce à lui l'atlas s'ouvre ensuite sans écran d'attente. Constantes `DUR` et `MAX` dans `index.html`.
- **Structures PDB.** Mises en cache localement (~20 Mo) pour que l'atlas fonctionne hors-ligne et
  ne dépende pas de la disponibilité de RCSB, qui reste le repli. Pour mettre une structure à jour :
  `https://files.rcsb.org/download/<ID>.pdb`.
- **Biologie.** Vérifiée sur sources NCBI/PMC. À noter : la *fibre de 30 nm* est présentée comme un
  modèle classique **in vitro** — sa présence **in vivo** est largement réfutée (ChromEMT, Ou et al. 2017).
- **Pages de cellules.** La végétale et la musculaire sont des exports Claude Design. Leur runtime
  d'origine (`support.js`) n'est pas distribuable : il attend React injecté par l'outil. Il est
  remplacé par `public/vendor/dc-runtime.js`, ~150 lignes qui couvrent exactement les cinq formes
  que ces gabarits utilisent (`sc-if`, `sc-for`, `ref`, les handlers, l'interpolation `{{ }}`).
  Ces pages ne sont donc plus des bundles, mais du code lisible et modifiable.
  Elles chargent Three.js par *import map* depuis `public/vendor/` : `public/` n'est pas traité par
  Vite, et le site doit fonctionner hors-ligne. En développement Vite réécrit malgré tout le
  specifier `three` vers sa propre copie, d'où un avertissement « Multiple instances of Three.js »
  qui ne concerne que le serveur de dev — le build ne charge que le fichier servi localement.
- **Three.js en double.** `assets/engine.js` est un chunk pré-construit qui embarque sa propre copie
  de Three, alors que les scripts de la page importent `three` depuis `node_modules` : la console
  affiche un avertissement « Multiple instances of Three.js ». Sans conséquence fonctionnelle,
  mais c'est de la dette — la résoudre demanderait de reconstruire le moteur depuis ses sources.
