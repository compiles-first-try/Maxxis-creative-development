/* Builds Space-Explorer.html: index.html with Three.js inlined into one
   self-contained, offline, double-click-to-play file.
   Run:  node build-standalone.js                                        */
const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');
let three = fs.readFileSync('vendor/three.min.js', 'utf8');

// keep any accidental </script> inside the library from closing our tag early
three = three.replace(/<\/script>/gi, '<\\/script>');

const inlined =
  '<!-- Three.js r128 inlined so this is a single, offline, double-click-to-play file -->\n' +
  '<script>\n' + three + '\n<\/script>';

html = html.replace('<script src="vendor/three.min.js"></script>', inlined);

fs.writeFileSync('Space-Explorer.html', html);
console.log('Built Space-Explorer.html (' + fs.statSync('Space-Explorer.html').size + ' bytes)');
