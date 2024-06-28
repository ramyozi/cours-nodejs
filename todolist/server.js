require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 3000;

const dbConfig = require('./src/config/db');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

const routes = require('./src/routes/index');
app.use('/', routes); 

mongoose.connect(process.env.DB_URL)
    .then(() => console.log("Successfully connected to MongoDB"))
    .catch(err => console.error("Could not connect to MongoDB", err));

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
