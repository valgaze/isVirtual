#!/usr/bin/env node
'use strict';

var addOn = require('../build/Release/isvirtual.node');
console.log('Virtualization enabled: ' + (addOn.isVirtual() ? true : false));

if (!addOn.isVirtual()) {
  console.log('\n*******************************************************************\nYou can find instructions for enabling virtualization here:\n\nhttps://docs.docker.com/docker-for-windows/troubleshoot/#hyper-v\n\nIf you are running Windows on a Mac using Bootcamp:\n\n1. Make sure hyper-v is running\n2. Enable virtualization by setting Bootcamp as the startup disk:\n   [From Mac]: System Preferences > Target Disk > Bootcamp (https://apple.stackexchange.com/a/122071)\n\n*******************************************************************\n');
}