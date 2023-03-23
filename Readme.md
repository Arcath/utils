# Utils

[![codecov](https://codecov.io/gh/Arcath/utils/branch/master/graph/badge.svg?token=2R7fS9DBHW)](https://codecov.io/gh/Arcath/utils)
[![buid status](https://img.shields.io/github/workflow/status/arcath/utils/validate?logo=github&style=flat-square)](https://github.com/arcath/utils/actions?query=workflow%3Avalidate)
[![NPM](https://img.shields.io/npm/v/@arcath/utils.svg?style=flat-square)](https://www.npmjs.com/package/@arcath/utils)

A collection of utility functions bundled into one easy to install library.

## Install

```
npm install --save @arcath/utils

or

yarn add @arcath/utils
```

## More

A full list of functions and classes can be found at https://utils.arcath.net

## Developing

Each function/class should have its own file with a spec file along side.
Similar functions can be in the same file e.g. `increment` and `decrement`.

The index is generated using a comment at the bottom of the file to define the
exports. For example

```js
// {increment, decrement}
```
