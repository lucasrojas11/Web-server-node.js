const express = require('express');
const hbs = require('hbs');
require('dotenv').config();

const app = express();
const port = 3000;

//Handlebars 
app.set('view engine', 'hbs'); //renderisar vistas sencillas 
hbs.registerPartials(__dirname + '/views/partials');


//servir contenido estatico
app.use(express.static('public'));


app.get('/', (req, res) => {
  res.render('home');
});

app.get('/generic', (req, res) => {
  res.render( 'generic' );
})

app.get('/elements', (req, res) => {
  res.render( 'elements' );
})


app.get('*', (req, res) => {
  res.sendFile( __dirname + '/public/template/404.html');
})


app.listen(port, () => {
  console.log('Example app listening on port ' + port);
})