/* Builds the single-file, offline, double-click-to-play games by inlining
   Three.js into each dev HTML:
     index.html         -> Space-Explorer.html
     mars-terraform.html -> Mars-Terraform.html
   Run:  node build-standalone.js                                        */
const fs = require('fs');

let three = fs.readFileSync('vendor/three.min.js', 'utf8');
// keep any accidental </script> inside the library from closing our tag early
three = three.replace(/<\/script>/gi, '<\\/script>');
const inlined =
  '<!-- Three.js r128 inlined so this is a single, offline, double-click-to-play file -->\n' +
  '<script>\n' + three + '\n<\/script>';

const builds = [
  ['index.html', 'Space-Explorer.html'],
  ['mars-terraform.html', 'Mars-Terraform.html'],
];

for (const [src, out] of builds) {
  if (!fs.existsSync(src)) { console.warn('skip ' + src + ' (not found)'); continue; }
  const html = fs.readFileSync(src, 'utf8')
    .replace('<script src="vendor/three.min.js"></script>', inlined);
  fs.writeFileSync(out, html);
  console.log('Built ' + out + ' (' + fs.statSync(out).size + ' bytes)');
}
