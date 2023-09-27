require('dotenv').config()
const express = require('express');
const app = express();
const jsxEngine = require('jsx-view-engine')
const methodOverride = require('method-override')
const mongoose = require('mongoose')
// connect to Mongoose
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })



const pokemon = require('./models/pokemon.js');
const Pokemon = require('./models/pokemon.js')



app.set('view engine', 'jsx');
// app.engine('jsx', require('jsx-view-engine').createEngine());
app.engine('jsx', jsxEngine())


app.use(express.urlencoded({extended:false}))
app.use(express.static('public'));

app.use(methodOverride('_method'))

app.use((req, res, next) => {
    console.log('I run for all routes')
    next()
})

// routes

app.get('/', (req, res)=>{
    res.send('Welcome to the Pokemon App!');
})
// Index routes
app.get('/pokemon/', async (req, res)=>{
    try{
        const pokemon = await Pokemon.find();
        res.render('Index', { pokemon: pokemon });
    } catch(error) {
        console.error(error)
    }
    
})

//New-get the form to add a new pokemon
app.get('/pokemon/new', (req, res) => {
    res.render('New');
});

//delete
app.delete('/pokemon/:id', async (req, res)=>{
    try{
        await Pokemon.findByIdAndRemove(req.params.id)
        res.redirect('/pokemon')
    } catch(error) {
        console.error(error)
    }
})

//update
app.put('/pokemon/:id', async (req, res)=> {
    try{
        await Pokemon.findByIdAndUpdate(req.params.id, req.body)
        res.redirect('/pokemon')
    }catch(error){
        console.log(error)
    }
})


//creat
app.post('/pokemon', async(req, res)=>{
    try{
        await Pokemon.create(req.body)
        res.redirect('/pokemon')
    } catch(error){
        console.log(error)
    }
})


//edit
app.get('/pokemon/:id/edit', async (req, res)=>{
    try{
        const foundPokemon = await Pokemon.findById(req.params.id)
        res.render('pokemon/Edit', {pokemon: foundPokemon})
    }catch(error){
        console.log(error)
    }
})

// Show route - one particular fruit by ID
app.get("/pokemon/:id", async (req, res) => {

    try {
      const p = await Pokemon.findById(req.params.id)
  
      res.render("fruits/Show", {p: p})
    } catch(error) {
      console.log(error)
    }
  })








app.listen(3000, () => {
    console.log('listening');
});












