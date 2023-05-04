
const app = require('express').Router();
const path = require('path');


// homepage route
app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname, '../public/index.html'))
});

// notes router
app.get('/notes', (req,res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'))
});

// export
module.exports = app;