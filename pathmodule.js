const path = require('path');

const filePath = '/user/local/bin/file.txt';
console.log(`Directory Name: ${path.dirname(filePath)}`);
console.log(`Base Name: ${path.basename(filePath)}`);
console.log(`Extension Name: ${path.extname(filePath)}`);

const joinedPath = path.join('/user', 'local', 'bin', 'file.txt');
console.log(`Joined Path: ${joinedPath}`);

const resolvedPath = path.resolve('user', 'local', 'bin', 'file.txt');
console.log(`Resolved Path: ${resolvedPath}`);