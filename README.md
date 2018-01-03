## What is isVirtual?

[isVirtual](https://www.npmjs.com/package/isvirtual) is a tiny utility to quickly determine if a Windows system has virtualization enabled. Virtualization is needed when using [Docker for Windows](https://docs.docker.com/docker-for-windows/troubleshoot/#hyper-v)

This repo can also be useful as a starter boilerplate for npm libraries

## How to use

```sh
$ npm install -g isvirtual # note all lowercase


$ isVirtual # Will indicate if virtualization is enabled and steps to remedy if not
```

Usage from a script:

```sh
$ npm install --save isvirtual

```

```js
const { isVirtual } = require('isVirtual');

console.log(isVirtual()); #The tool will return 1 if virtualization is enabled and 0 if not
```
## Rebuild/recompile

```sh
$ node-gyp configure build
```

If node-gyp is unavailable, [install node-gyp](https://github.com/nodejs/node-gyp) and [add dependencies](https://github.com/felixrieseberg/windows-build-tools)

## Run Tests

```sh
$ npm test
```
