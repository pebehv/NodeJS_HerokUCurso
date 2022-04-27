const express = require('express');
const router = express.Router();

// Without middleware
router .get('/', (req,res) => {
    res.render("index", {title: "dinamico"})
})

router.get('/servicios', function(req, res){
	res.render("servicio", {title: "Servicios"});
});

module.exports = router;

