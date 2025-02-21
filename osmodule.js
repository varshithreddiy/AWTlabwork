const os = require('os');

console.log(`Architecture: ${os.arch()}`);

console.log(`Platform: ${os.platform()}`);

console.log(`Total Memory: ${(os.totalmem() / (1024 ** 3)).toFixed(2)} GB`);

console.log(`Free Memory: ${os.freemem()}`);

console.log(`Hostname: ${os.hostname()}`);

console.log(`Home Directory: ${os.homedir()}`);

const cpus = os.cpus();
console.log(`CPU Model: ${cpus[0].model}`);
console.log(`Number of Cores: ${cpus.length}`);