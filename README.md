## What is isVirtual?

[isVirtual](https://www.npmjs.com/package/isvirtual) is a tiny utility to quickly determine if a Windows system has virtualization enabled. Virtualization is needed when using [Docker for Windows](https://docs.docker.com/docker-for-windows/troubleshoot/#hyper-v)

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

Install node-gyp and follow instructions. Setup up Python your shell (see the guide for instructions on how to do that:b)

https://github.com/felixrieseberg/windows-build-tools

(Note: If you don't already have Python installed you will need to perform one additional step of adding its directory to your shell's path. ```windows-build-tools``` saves Python to path ```c:/Users/$username/.windows-build-tools/python``` On Windows10, select the start menu and search for *"environmental variables"* and select **"Edit environment variables for your account"** On the popup select *Path* option at from the top panel and then click edit)

## Tests

```sh
$ npm test
```
