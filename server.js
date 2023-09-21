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

app.get('/pokemon/new', (req, res) => {
    res.render('New');
});

app.post('/pokemon', (req, res)=>{
    console.log(req.body);
    res.send('data received');
});


app.post('/pokemon', (req, res)=>{

    pokemon.push(req.body);
    console.log(pokemon);
    // res.send('data received');
    res.redirect('/pokemon'); //send the user back to /fruits
});

//show Router
app.get('/pokemon/:id', function(req, res){
    res.render('Show', { 
        p: pokemon[req.params.id] 
    });
});  





app.listen(3000, () => {
    console.log('listening');
});












