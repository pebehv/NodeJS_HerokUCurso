const { application } = require('express');
var express = require('express');
var app = express();

var PORT = 3000;

//motor de plantillas
app.set('view engine', 'ejs');
app.set('views', __dirname+ '/views');

app.use(express.static(__dirname + '/public'));

app.get('/', (req,res) => {
    res.render("index", {title: "dinamico"})
})

app.get('/servicios', function(req, res){
	res.render("servicio", {title: "Servicios"});
});

// Without middleware
app.get('/', function(req, res){
	res.send("ggde");
});


app.listen(PORT, function(err){
	if (err) console.log(err);
	console.log("Server listening on PORT", PORT);
});

app.use((req, res, next) => {
    res.status(404).render("404" , {
        title:"Error 404",
        description: "Descriptio"
    })
})