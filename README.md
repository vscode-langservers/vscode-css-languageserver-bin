# vscode-css-languageserver-bin

[![npm](https://img.shields.io/npm/v/vscode-css-languageserver-bin.svg)](https://www.npmjs.com/package/vscode-css-languageserver-bin)
[![Join the chat at https://gitter.im/vscode-langservers/Lobby](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/vscode-langservers/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

Binary version published on npm of [vscode-css-languageserver](https://github.com/vscode-langservers/vscode-css-languageserver) extracted from [VSCode tree](https://github.com/Microsoft/vscode/tree/master/extensions/css/server)

# Features

-   [x] CSS Support
-   [x] LESS Support
-   [x] SASS Support
-   [x] Completion provider (Need Snippets Support)
-   [x] [Color provider](https://github.com/Microsoft/vscode-languageserver-node/blob/master/protocol/src/protocol.colorProvider.proposed.md)
-   [x] Code Actions (rename mispelled properties)
-   [x] Validation (syntax and lint errros)
-   [X] Hover tooltip provider
-   [x] Definition provider
-   [x] Hover provider
-   [x] References provider
-   [x] Document Symbols & Highlights
-   [x] Rename symbol
-   [x] [Scoped Settings](https://github.com/Microsoft/vscode-languageserver-node/blob/master/protocol/src/protocol.configuration.proposed.md)

# Clients

-   [Oni](https://github.com/onivim/oni)
-   [ide-css](https://github.com/liuderchi/ide-css)

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

The server can also be launched with one of the following transports:

```bash
css-languageserver --socket={number}
css-languageserver --node-ipc
```

## Settings

This Language Server accepts some settings sent with [workspace/didChangeConfiguration](https://microsoft.github.io/language-server-protocol/specification#workspace_didChangeConfiguration)

```typescript
type Level = "ignore" | "error" | "warning"

type LintSettings = {
	// From: https://github.com/Microsoft/vscode-css-languageservice/blob/master/src/services/lintRules.ts#L25

	compatibleVendorPrefixes?: Level, // When using a vendor-specific prefix make sure to also include all other vendor-specific properties. Default: Ignore
	vendorPrefix?: Level, // When using a vendor-specific prefix also include the standard property. Default: Warning
	duplicateProperties?: Level, //, localize('rule.duplicateDeclarations', "Do not use duplicate style definitions. Default: Ignore
	emptyRules?: Level, // Do not use empty rulesets. Default: Warning
	importStatement?: Level, // Import statements do not load in parallel. Default: Ignore
	boxModel?: Level, // Do not use width or height when using padding or border. Default: Ignore
	universalSelector?: Level, // The universal selector (*) is known to be slow. Default: Ignore
	zeroUnits?: Level, // No unit for zero needed. Default: Ignore
	fontFaceProperties?: Level, // @font-face rule must define 'src' and 'font-family' properties. Default: Warning
	hexColorLength?: Level, // Hex colors must consist of three, four, six or eight hex numbers. Default: Error
	argumentsInColorFunction?: Level, // Invalid number of parameters. Default: Error
	unknownProperties?: Level, // Unknown property. Default: Warning
	ieHack?: Level, // IE hacks are only necessary when supporting IE7 and older. Default: Ignore
	unknownVendorSpecificProperties?: Level // Unknown vendor specific property. Default: Ignore
	propertyIgnoredDueToDisplay?: Level, // Property is ignored due to the display. Default: Warning
	important?: Level, // Avoid using !important. It is an indication that the specificity of the entire CSS has gotten out of control and needs to be refactored. Default: Ignore
	float?: Level, // Avoid using 'float'. Floats lead to fragile CSS that is easy to break if one aspect of the layout changes. Default: Ignore
	idSelector?: Level // Selectors should not contain IDs because these rules are too tightly coupled with the HTML. Default: Ignore
};

interface LanguageSettings {
	validate?: boolean;
	lint?: LintSettings;
}

interface Settings {
	css?: LanguageSettings,
	scss?: LanguageSettings,
	less?: LanguageSettings
}
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

Because we [can't guess](https://github.com/vscode-langservers/vscode-css-languageserver/blob/master/package.json#L4) VSCode extention version, we update `MINOR` when submodule is updated and `PATCH` when only build method is updated

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

This is a derived work please see [VSCode's LICENSE.txt](https://github.com/Microsoft/vscode/blob/master/LICENSE.txt) for the original copyright and license.

