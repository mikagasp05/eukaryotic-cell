#!/bin/bash
# Double-cliquez pour lancer le serveur de dev Vite (ouvre le navigateur automatiquement).
cd "$(dirname "$0")"
command -v npm >/dev/null 2>&1 || { echo "Node.js / npm introuvable. Installez Node depuis https://nodejs.org puis relancez."; read -r _; exit 1; }
[ -d node_modules ] || { echo "Première installation des dépendances…"; npm install; }
npm run dev
