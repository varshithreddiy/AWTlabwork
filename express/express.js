const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Welcome to the Home Page</h1>');
});

app.get('/text', (req, res) => {
    res.type('text/plain');
    res.send('This is a plain text response');
});

app.get('/json', (req, res) => {
    res.json({ message: 'This is a JSON response', status: 'success' });
});

app.get('/html', (req, res) => {
    res.type('text/html');
    res.send('<h2>This is an HTML response</h2>');
});

app.use((req, res) => {
    res.status(404).send('Resource not found');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});