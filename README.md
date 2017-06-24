# Handy `.gitignore` generator

> Check [handy-gi-cli](https://github.com/ahmed-taj/handy-gi-cli) for the command line version

[![JavaScript Style Guide](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

[![Build Status](https://travis-ci.org/ahmed-taj/handy-gi.svg?branch=master)](https://travis-ci.org/ahmed-taj/handy-gi)
[![Greenkeeper badge](https://badges.greenkeeper.io/ahmed-taj/handy-gi.svg)](https://greenkeeper.io/)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

A package that automatically detects and generates suitable `.gitignore` string
based on a given directory contents(it also perform other magical checks). It
utilizes official GitHub's [collection] for `.gitignore` templates.

## Installation

```sh
$ npm install --save handy-gi
```

## How it works

Handy-gi simply runs a bunch of checkers (called [matchers]) against the given
directory, a matcher is a simple JavaScript code that tries to infer whether
the contents of that directory matches its specification or not. Take a look at
the [Node.js][matcher] as an example:

```javascript
// a couple of imports ...

export const info = {
  name: 'Node.js',  // A humanized name

  template: 'Node', // must match the file name (with ext) of the official
                    // GitHub's collection.

  global: false     // whether or not the .gitignore file lives inside
                    // 'templates/Global' folder
}

export const match = async (files) => {
  // The pattern we test against
  const pattern = '**/package.json'

  // Try to find 'package.json' ?
  const matches = filterByGlob(pattern, files)

  // Did we?
  return matches.length > 0
}
```

See! very simple

> NOTE: matchers can also perform other checks, such as OS, available editors
> ..etc

After finding all matches, Handy-gi then will build the final `.gitignore`
string for you :)

[matchers]: ./lib/matchers

[node.js]: http://nodejs.org

[matcher]: ./lib/matchers/node.js

## Usage

```js
var gi = require('handy-gi')

gi('path/to/your/target/folder')
  .then((gitignore) => {
    // Do what you want with the produced .gitignore string
  })
```

## Supported templates

See [templates] folder to see which of the GitHub's [collection] templates are
currently supported.

[collection]: https://github.com/github/gitignore

[templates]: ./templates

## Modules

<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

### generate

Asynchronously iterate over a list of template pairs to generate a string
containing all corrspondent .gitignore files contents

**Parameters**

-   `tempaltesList` **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)** of {name, template} pairs of target templates

**Examples**

```javascript
generate([name: 'Node.js', template: 'Node'])
 .then(gi => { console.log(gi) })
// outputs the following string
// ### Node.js ###
// # Logs
// logs
// .log
// ...
```

Returns **[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)** with the full .gitignore string

### match

Asynchronously matches the given files list against all available matchers

**Parameters**

-   `files` **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)** to match against

**Examples**

```javascript
match(['README.md', 'package.json'])
 .then(matchers => { console.log(matchers) })
// outputs: [{name: 'Node.js', template: 'Node'}]
```

Returns **[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)** with an array of { name, tempalte} of the
                        corresponding matchers

## License

MIT © [Ahmed Tajelsir](https://github.com/ahmed-taj)
