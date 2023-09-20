const express = require('express');
const app = express();
const jsxEngine = require('jsx-view-engine')




const pokemon = require('./models/pokemon.js');


app.set('view engine', 'jsx');
// app.engine('jsx', require('jsx-view-engine').createEngine());
app.engine('jsx', jsxEngine())


app.get('/', (req, res)=>{
    res.send('Welcome to the Pokemon App!');
})

app.get('/pokemon/', function(req, res){
    res.render('Index', { pokemon: pokemon });
})


app.listen(3000, () => {
    console.log('listening');
});












