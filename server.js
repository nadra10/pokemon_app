const express = require('express');
const app = express();
const jsxEngine = require('jsx-view-engine')



const pokemon = require('./models/pokemon.js');

app.get('/', function(req, res){
    res.send('Welcome to the Pokemon App!');
})

app.get('/pokemon', function(req, res){
    res.send(pokemon)
})















app.listen(3000,() => {
    console.log('listening');
});