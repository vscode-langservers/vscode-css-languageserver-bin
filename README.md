# vscode-css-languageserver-bin

Binary version published on npm of [vscode-css-languageserver](https://github.com/vscode-langservers/vscode-css-languageserver) extracted from [VSCode tree](https://github.com/Microsoft/vscode/tree/master/extensions/css/server)

# Features

- [x] CSS Support
- [x] LESS Support
- [x] SASS Support
- [x] Completion provider
- [x] [Color provider](https://github.com/Microsoft/vscode-languageserver-node/blob/master/protocol/src/protocol.colorProvider.proposed.md)
- [x] Code Actions (rename mispelled properties)
- [x] Validation (syntax and lint errros)
- [X] Hover tooltip provider
- [x] Definition provider
- [x] Hover provider
- [x] References provider
- [x] Document Symbols & Highlights
- [x] Rename symbol

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

To install this Language Server you need [npm](https://www.npmjs.com/get-npm) on your machine

### Installing

```bash
npm install --global vscode-css-languageserver-bin
```

### Launching the Server

The common way to launch it is by using stdio transport:

```bash
css-languageserver --stdio
```

However the server can be launched also with one of the following transports:

```bash
css-languageserver --socket={number}
css-languageserver --node-ipc
```

## Deployment

```bash
npm run publish
# or to try locally
npm run pack
```

## Contributing

PRs are welcome.
To setup the repo locally run:
```bash
git clone --recursive https://github.com/vscode-langservers/vscode-css-languageserver-bin
cd vscode-css-languageserver-bin
npm install
npm run pack
```

## Versioning

We use [SemVer](http://semver.org/) for versioning.

Because we [can't guess](https://github.com/vscode-langservers/vscode-css-languageserver/blob/master/package.json#L4) VSCode extention version, we update `MINOR` when submodule is updated and 'PATCH' when only build method is updated

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
This is a derived work please see [VSCode's LICENSE.txt](https://github.com/Microsoft/vscode/blob/master/LICENSE.txt) for the original copyright and license.

