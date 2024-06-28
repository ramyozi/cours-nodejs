const express = require('express');
const http = require('http');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

const server = http.createServer(app);
const port = 3000;
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

app.get('/about', (req, res) => {
    res.send('This is the About page');
});

app.get('/contact', (req, res) => {
    res.send('This is the Contact page');
});

app.get('/products', (req, res) => {
    res.send('This is the Products page');
});
