const app = require('express').Router();
const noteId = require('../helpers/noteid')

const fs = require('fs');

// !routes
// get route 
/* issue here 
SyntaxError: Unexpected token u in JSON at position 0
    at JSON.parse (<anonymous>)
    at C:\Users\19527\bootcamp\Assignments\Homework\11-Express.js-Challenge-Note-Taker\routes\api.js:9:21
C:\Users\19527\bootcamp\Assignments\Homework\11-Express.js-Challenge-Note-Taker\routes\api.js:13    
            res.json(db);
                     ^

ReferenceError: Cannot access 'db' before initialization
    at C:\Users\19527\bootcamp\Assignments\Homework\11-Express.js-Challenge-Note-Taker\routes\api.js:13:22
    
    possibly parsing undefined?
    */

app.get('/api/notes', async (req, res) =>{
    const db = await JSON.parse(fs.readFileSync('db/db.json', 'utf8'));
    res.json(db); 
});
// post route
app.post('/api/notes', (req,res) =>{
    const db = JSON.parse(fs.readFileSync('db/db.json', 'utf8'))
        const newNote = {
            title: req.body.title,
            text: req.body.text,
            id: noteId(),
    };
    db.push(newNote);
    fs.writeFileSync('db/db.json',JSON.stringify(db));
    res.json(db);
});
// TODO delete route if time


// export
module.exports = app;