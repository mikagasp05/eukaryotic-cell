import { defineConfig } from 'vite'

// Page unique :
//   /index.html → la plongée « De la cellule à l'ADN » (la double hélice est déjà une strate du zoom).
// (L'ancienne carte ADN dédiée `helice.html` a été retirée du site — redondante avec la strate hélice.
//  Le fichier source reste sur le disque mais n'est plus ni lié ni construit.)

/* Routes lisibles ------------------------------------------------------------
   Les écrans du site ont chacun leur adresse : recharger « /molecules » rouvre
   l'atlas des molécules, et non le début de l'animation.

   Toutes tiennent en UN segment, à dessein. Les pages appellent leurs fichiers en
   relatif (pdb/1SU4.pdb, assets/engine.js) : sous « /molecules/serca » le
   navigateur irait les chercher dans /molecules/, et rien ne se chargerait. Ce
   qui précise une route passe donc par la requête — /molecules?m=serca.

   La table est reprise à l'identique dans netlify.toml : ici pour `npm run dev`,
   là-bas pour le site déployé. Deux moteurs, une seule liste — les modifier
   ensemble ou pas du tout. */
const ROUTES = {
  '/cell-choice': '/index.html',          // l'écran de choix de la cellule
  '/animal-cell': '/index.html',          // la plongée, cellule animale
  '/plant-cell': '/index.html',           // la cellule végétale (en iframe)
  '/muscle-cell': '/index.html',          // la fibre musculaire (en iframe)
  '/enzymes': '/index.html',              // l'atlas des enzymes de l'ADN
  '/mechanisms': '/index.html',           // les mécanismes et leurs frises
  '/contraction': '/contraction.html',    // l'animation de la contraction
  '/molecules': '/contraction.html',      // l'atlas des molécules de la contraction
  '/cellule-musculaire': '/cellule-musculaire.html',
  '/cellule-vegetale': '/cellule-vegetale.html'
}

function routesLisibles() {
  return {
    name: 'routes-lisibles',
    configureServer(server) {
      server.middlewares.use((req, _res, next) => {
        const q = req.url.indexOf('?')
        const chemin = q < 0 ? req.url : req.url.slice(0, q)
        const cible = ROUTES[chemin.replace(/\/+$/, '')]
        if (cible) req.url = cible + (q < 0 ? '' : req.url.slice(q))
        next()
      })
    }
  }
}

export default defineConfig({
  // chemins d'assets relatifs → le dossier dist/ se déploie tel quel sur n'importe quel hébergeur
  // (racine de domaine, sous-dossier type GitHub Pages, ou même ouvert en local).
  base: './',
  plugins: [routesLisibles()],
  server: {
    open: '/',
  },
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
      },
    },
  },
})
