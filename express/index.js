const express = require('express');
const http = require('http');
const products = require('./data.json');

const app = express();

const server = http.createServer(app);
const port = 3000;
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

app.get('', HomeController);
app.get('/about', AboutController);

app.get('/contact', ContactController);

app.get('/products', ProductsController );

//Controllers

function HomeController(req, res) {
    res.send('<div class="home"><h1>Welcome to our website!</h1><p>Choose an option from the menu:</p><ul><li><a href="/">Home</a></li><li><a href="/about">About</a></li><li><a href="/contact">Contact</a></li><li><a href="/products">Products</a></li></ul></div>');
}

function AboutController(req, res) {
    res.send('<div class="about"><h1>About</h1><p>This is a simple website created with Node.js and Express.js</p></div>');
}

function ContactController(req, res) {
    res.send('<div class="contact"><h1>Contact</h1><p>Phone: 123-456-7890</p><p>Email: test@toto.fr</p></div>');
}

function ProductsController(res) {
    let table = '<table>';
    table += '<tr><th>Name</th><th>Price</th></tr>';
    if (Array.isArray(products)) {
        products.forEach(product => {
            table += `<tr><td>${product.name}</td><td>${product.price}</td></tr>`;
        });
    } else {
        table += '<tr><td colspan="2">No products available</td></tr>';
    }
    table += '</table>';
    res.send(table);
}
