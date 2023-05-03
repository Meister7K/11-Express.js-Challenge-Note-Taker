// Imports
const express = require('express');
const path = require('path');
const fs = require('fs');

// helper methods
const PORT = process.env.port || 3001;

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use(express.static('public'));

// homepage route
app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/index.html'))
);

