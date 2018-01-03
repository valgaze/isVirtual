const { isVirtual } = require('./dist/index');
console.log(`Virtualization: ${isVirtual() > 0 ? true : false}`);
