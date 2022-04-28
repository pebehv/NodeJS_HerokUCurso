const { application } = require('express');
var express = require('express');
var app = express();

require('dotenv').config();

const port = process.env.PORT || 3000;

//Conexion a BD Mongo DB
const mongoose = require('mongoose');


//const uri = 'mongodb+srv://nodejs_yt:xSVhWhk7bRYv5GMI@cluster0.dfmua.mongodb.net/veterianaria?retryWrites=true&w=majority';
//const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.dfmua.mongodb.net/${process.env.NAMEBD}?retryWrites=true&w=majority`;

mongoose.connect(process.env.URI, ()=>{
   // useNewUrlParser: true
    console.log("uri", process.env.URI);
})
.then(() => console.log('BD Exito '))
.catch(err => console.log("Error", err))

//console.log(process.env.DATABASE_URL);
//motor de plantillas
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + '/public'));

//Rutas Web 

app.use('/', require('./router/rutasWeb'));
app.use('/mascotas', require('./router/mascotas'));


/*app.listen(port, function(err){
	if (err) console.log(err);
	console.log("Server listening on port", port);
});*/

app.use((req, res, next) => {
    res.status(404).render("404" , {
        title:"Error 404",
        description: "Descriptio"
    })
})

app.listen(port, function(err){
	if (err) console.log(err);
	console.log("Server listening on port", port);
});