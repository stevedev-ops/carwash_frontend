const fs = require('fs');
const path = require('path');

const outDirs = ['dist', 'public'];

for (const dir of outDirs) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.copyFileSync('index.html', path.join(dir, 'index.html'));
  fs.copyFileSync('sw.js', path.join(dir, 'sw.js'));
  fs.copyFileSync('manifest.json', path.join(dir, 'manifest.json'));
}

console.log('Build complete: static files copied to dist and public.');

