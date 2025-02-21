const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/html') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>Welcome to the HTML Page</h1>');
    } else if (req.url === '/text') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('This is a plain text response');
    } else if (req.url === '/json') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'This is a JSON response', status: 'success' }));
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Resource not found');
    }
});

server.listen(3000, () => {
    console.log('Server is listening on port 3000');
});