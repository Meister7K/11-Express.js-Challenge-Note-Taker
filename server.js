// Imports
const express = require('express');
const htmlRoute = require('./routes/html');
const apiRoute = require('./routes/api');


const PORT = process.env.PORT || 3001;

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use(express.static('public'));
app.use(htmlRoute);
app.use(apiRoute);


// listener
app.listen(PORT, () => {
    console.log(`Server running on http:localhost:${PORT}`)
});