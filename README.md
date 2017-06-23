# Handy `.gitignore` generator

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

[![JavaScript Style Guide](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

A tool/package that automatically detects and generates suitable `.gitignore`
content based on a given directory content(in addition to some other hacks). It
utilizes official GitHub's [collection] for `.gitignore` templates.

## Installation

### Command line interface

```sh
$ npm install -g handy-gi-cli
```

### Node package

```sh
$ npm install --save handy-gi
```

## Usage

### Command line interface

```sh
$ gi ignore path/to/your/target/folder
```

See [handy-gi-cli](./packages/cli) package documentation for more info

### Programmatic API

```js
var gi = require('handy-gi')

gi('path/to/your/target/folder')
  .then((gitignore) => {
    // Do what you want with the produced .gitignore string
  })
```

See [handy-gi](./packages/core) package documentation for more info

## Supported templates

See [templates] folder to see which of the GitHub's [collection] templates are
currently supported.

[collection]: https://github.com/github/gitignore

[templates]: ./packages/core/src/templates


## License

MIT © [Ahmed Tajelsir](https://github.com/ahmed-taj)
