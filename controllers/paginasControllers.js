// Controlador que se comunica con el router

const paginaInicio = (req, res) => { // req lo que le mandamos a pedir, y res lo qu responde
    res.render('inicio', {
        pagina: 'Inicio'
    })
}

const paginaNosotros = (req, res) => { 
    res.render('nosotros', {
        pagina: 'Nosotros'
    }) // se le pasa el nombre del archivo pug
}

const paginaViajes = (req, res) => { 
    res.render('viajes', {
        pagina: 'Viajes'
    })
} 

const paginaTestimoniales = (req, res) => { 
    res.render('testimoniales', {
        pagina: 'Testimoniales'
    })
}


export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales
}