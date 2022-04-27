const express = require('express');
const router = express.Router();

const Mascota = require('../models/mascota');

router.get('/', async (req, res) => {

    try {
        const arrayMascotaBD = await Mascota.find()
        console.log(arrayMascotaBD)
        res.render('mascotas', {
            arrayMascotas:arrayMascotaBD
    
        })
    }catch (err) {
        console.error("Error en mascota",err)
    }


    
})

module.exports = router;