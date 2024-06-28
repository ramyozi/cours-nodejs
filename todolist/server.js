const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');

const app = express();
const port = process.env.PORT || 3000;
const path = require('path');


const dbConfig = require('./src/config/db');

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('views', path.join(__dirname, 'src', 'views')); 
app.set('view engine', 'ejs');
app.use('/fonts', express.static(__dirname + '/node_modules/@fortawesome/fontawesome-free'));
app.use(methodOverride('_method'));


const routes = require('./src/routes/index');
app.use('/', routes); 

 app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

