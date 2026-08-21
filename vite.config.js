import { defineConfig } from 'vite'

// Page unique :
//   /index.html → la plongée « De la cellule à l'ADN » (la double hélice est déjà une strate du zoom).
// (L'ancienne carte ADN dédiée `helice.html` a été retirée du site — redondante avec la strate hélice.
//  Le fichier source reste sur le disque mais n'est plus ni lié ni construit.)
export default defineConfig({
  // chemins d'assets relatifs → le dossier dist/ se déploie tel quel sur n'importe quel hébergeur
  // (racine de domaine, sous-dossier type GitHub Pages, ou même ouvert en local).
  base: './',
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
