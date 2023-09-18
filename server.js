const express = require('express');
const app = express();
const jsxEngine = require('jsx-view-engine')


app.get('/', function(req, res){
    res.send('Welcome to the Pokemon App!');
})















app.listen(3000,() => {
    console.log('listening');
});