#!/usr/bin/env node
const addOn = require("../build/Release/isvirtual.node");
console.log(`Virtualization enabled: ${addOn.isVirtual() ? true : false}`);


if (!addOn.isVirtual()) {
  console.log(`
*******************************************************************
You can find instructions for enabling virtualization here:

https://docs.docker.com/docker-for-windows/troubleshoot/#hyper-v

If you are running Windows on a Mac using Bootcamp:

1. Make sure hyper-v is running
2. Enable virtualization by setting Bootcamp as the startup disk:
   [From Mac]: System Preferences > Target Disk > Bootcamp (https://apple.stackexchange.com/a/122071)

*******************************************************************
`)
}
