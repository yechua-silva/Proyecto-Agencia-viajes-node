import express from 'express'

const router = express.Router();

router.get('/', (req, res) => { // req lo que le mandamos a pedir, y res lo qu responde
    res.render('inicio', {
        pagina: 'Inicio'
    })
} )

router.get('/nosotros', (req, res) => { 
    res.render('nosotros', {
        pagina: 'Nosotros'
    }) // se le pasa el nombre del archivo pug
} )

router.get('/viajes', (req, res) => { 
    res.render('viajes', {
        pagina: 'Viajes'
    })
} )

router.get('/testimoniales', (req, res) => { 
    res.render('testimoniales', {
        pagina: 'Testimoniales'
    })
} )

export default router