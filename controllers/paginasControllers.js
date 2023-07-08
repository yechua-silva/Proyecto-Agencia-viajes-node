// Controlador que se comunica con el router
import { Viaje } from '../models/Viajes.js'
import { Testimonial } from '../models/Testimoniales.js'

const viajeAttributes = ["id", "titulo", "precio", "fecha_ida", "fecha_vuelta", "imagen", "descripcion", "disponibles"]
const testimonialesAttributes = ["id", "nombre", "correo", "mensaje"]

const paginaInicio = async(req, res) => { // req lo que le mandamos a pedir, y res lo qu responde
    
    // Consultar 3 viajes del modelo viajes
    const promiseDB = []

    promiseDB.push( Viaje.findAll( {
        attributes: viajeAttributes ,
        limit: 3
    }) )
    promiseDB.push( Testimonial.findAll( { 
        attributes: testimonialesAttributes,
        limit: 3 } ) )

    try {
        // Asi ambas consultas se hacen al mismo tiempo
        const resultado = await Promise.all(promiseDB)

        res.render('inicio', {
            pagina: 'Inicio',
            clase: 'home',
            viajes: resultado[0],
            testimoniales: resultado[1]
        })
    } catch (error) {
        console.log(error);
    }


}

const paginaNosotros = (req, res) => { 
    res.render('nosotros', {
        pagina: 'Nosotros'
    }) // se le pasa el nombre del archivo pug
}

const paginaViajes = async (req, res) => { 
    // Consultar base de datos
    const viajes = await Viaje.findAll({
        attributes: viajeAttributes
    }) // Trae todos los resultados de la tabla



    res.render('viajes', {
        // Texto que sale en la pagina
        pagina: 'Próximos Viajes',
        viajes,
    })
} 

const paginaTestimoniales = async (req, res) => { 

    try {
        const testimoniales = await Testimonial.findAll({
            attributes: testimonialesAttributes
        })
        res.render('testimoniales', {
            pagina: 'Testimoniales',
            testimoniales
        })
    } catch (error) {
        console.log(error);
    }


}

// Muestra un viaje por su elug
const paginaDetalleViaje = async (req, res) => {
    // El viaje - es el nombre que se dimos al comodin en el router

    const { slug } = req.params

    try { // Hace un where al que coincida con le slug
        const viaje = await Viaje.findOne( { 
            attributes: viajeAttributes,
            where: { slug } } )

        res.render('viaje', {
            pagina: 'Información Viaje',
            viaje
        })
    } catch (error) {
        console.log(error);
    }
}


export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales,
    paginaDetalleViaje
}