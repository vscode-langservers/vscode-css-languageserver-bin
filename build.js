
const { readFileSync, writeFileSync, createReadStream, createWriteStream } = require('fs');
const { spawnSync } = require('child_process');
const { join } = require('path');
const { green, cyan } = require('chalk');
const SHEBANG = '#!/usr/bin/env node';

const throwIfError = res => {
	if (res.status != 0) throw 'Process exited with non-zero status code: ' + res.status
	if (res.error) throw err;
}

console.log(green(`Installing ${cyan('vscode-css-languageserver')} dependencies`));
throwIfError(spawnSync('npm', ['install'], {
	cwd: join(__dirname, 'vscode-css-languageserver'),
	stdio: 'inherit'
}));

console.log(green(`Compiling ${cyan('vscode-css-languageserver')}`));
const tsconfig = require('./vscode-css-languageserver/tsconfig.json')
throwIfError(spawnSync('tsc', [
	'-p', 'vscode-css-languageserver',
	'--outDir', 'dist',
	'--lib', tsconfig.compilerOptions.lib.join(','),
	'--target', tsconfig.compilerOptions.target,
	'--listEmittedFiles'
], {
	cwd: __dirname,
	stdio: 'inherit',
	env: Object.assign({}, process.env, {
		PATH: `${join(__dirname, 'node_modules', '.bin')}:${process.env.PATH}`
	})
}));

console.log(green(`Adding shebang to ${cyan('vscode-css-languageserver')} bin`));
const file = join(__dirname, 'dist', 'cssServerMain.js');
const lines = readFileSync(file, 'utf8').split('\n');
lines.unshift(SHEBANG);
writeFileSync(file, lines.join('\n'), 'utf8')

console.log(green(`Merging package.json files`));
const currentPackage = require('./package.json');
const CSSLSPackage = require('./vscode-css-languageserver/package.json');

writeFileSync(join(__dirname, 'dist', 'package.json'), JSON.stringify(Object.assign(CSSLSPackage, currentPackage, {
	scripts: {},
	dependencies: Object.assign({}, CSSLSPackage.dependencies, currentPackage.dependencies),
	devDependencies: {}
}), null, 2));

console.log(green(`Copying README.md and LICENSE`));
createReadStream(join(__dirname, 'README.md')).pipe(createWriteStream(join(__dirname, 'dist', 'README.md')));
createReadStream(join(__dirname, 'LICENSE')).pipe(createWriteStream(join(__dirname, 'dist', 'LICENSE')));