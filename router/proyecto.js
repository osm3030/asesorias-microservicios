const { Router } = require('express');
const Proyecto = require('../models/Proyecto');
const Cliente = require('../models/Cliente');
const TipoProyecto = require('../models/TipoProyecto');
const Etapa = require('../models/Etapa');
const Universidad = require('../models/Universidad');

const router = Router();


router.get('/', async function (req, res){
    try {
        const proyectos = await Proyecto.find().populate([
            {
                path: 'cliente', select: 'nombre email'
            },
            {
                path: 'universidad', select: 'nombre direccion telefono'
            },
            {
                path: 'tipoProyecto', select: 'nombre'
            },
            {
                path: 'etapa', select: 'nombre'
            }
        ]);
        res.send(proyectos);
    } catch (error) {
        console.log(error);
        res.status(500).send('Ocurrió un error al consultar los proyectos');
    }
});



module.exports = router;