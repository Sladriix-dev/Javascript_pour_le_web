/*
Linter : programme qui analyse le code et détecte les erreurs de syntaxe, les variables non utilisées, les variables qui n'existent pas, la mauvaise organisation du code, le non-respect des bonnes pratiques d'écriture de code...
Exemples : JSLint / ESLint

Minifier : Permet de rendre le code le plus léger possible en retirant les espaces et retours à la ligne inutiles, en renommant les variables avec des noms plus courts etc etc.
Exemples : node-minify / UglifyJS

Bundler : Permet de packager le code pour qu'il tienne dans un seul fichier
Exemple : Webpack

Transpiler : Permet de coder avec la dernière version de Javascript (ES12) tout en étant compatible avec tous les navigateurs
Exemple : Babel

*/

/************ Compiler et exécuter son code *************/

// npm install webpack webpack-cli --save-dev
// Cette cmd permet d'installer webpack

import retrieveContent from './query.js';

async function showContent() {
    try {
        const content = await retrieveContent();

        let elt = document.createElement('div');
        elt.innerHTML = content.join('<br />');

        document.getElementsByTagName('body')[0].appendChild(elt);
    } catch (e) {
        console.log('Error', e);
    }
}

showContent();

// npm run build => execute le packaging de webpack grace au script dans package.json + a la config


/************ Transpiler avec Babel *************/

// npm install --save-dev babel-loader @babel/core @babel/preset-env babel-polyfill
// Cette cmd permet d'installer Babel mais aussi le loader qui permet de l'intégrer à Webpack

// Modification de la config de webpack + new entry pour intégrer Babel et polyfill qui peut modifier le code lors de son exécution => Il faut ensuite modifier l'index.html


/************ Créer son serveur *************/

// npm install webpack-serve --save-dev
