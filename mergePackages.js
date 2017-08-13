const { readFileSync, writeFileSync } = require('fs');

const currentPackage = JSON.parse(readFileSync('package.json'));
const CSSLSPackage = JSON.parse(readFileSync('vscode-css-languageserver/package.json'));

writeFileSync('dist/package.json', JSON.stringify(Object.assign(CSSLSPackage, currentPackage, { scripts: {} }), null, 2));
