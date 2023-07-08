import { Testimonial } from "../models/Testimoniales.js";

const guardarTestimonial = async ( req, res ) => {
    // Validar...

    const { id, nombre, correo, mensaje } = req.body;

    const errores = [];

    const testimonialesAttributes = ["id", "nombre", "correo", "mensaje"]


    // trim quita espacios en blanco al principio y al final
    if ( nombre.trim() === '' ) {
        errores.push( { mensaje: 'El Nombre esta vacio' } );
    }
    if ( correo.trim() === '' ) {
        errores.push( { mensaje: 'El Correo esta vacio' } );
    }
    if ( mensaje.trim() === '' ) {
        errores.push( { mensaje: 'El Mensaje esta vacio' } );
    }
    if ( errores.length > 0 ) {
        // Consultar testimoniales existentes
        const testimoniales = await Testimonial.findAll({
            attributes: testimonialesAttributes
        });

        // Mostrar la vista con errores
        res.render( 'testimoniales', {
            pagina: 'Testimoniales',
            errores,
            // Para que no se borren mensajes cuando alla un error
            id,
            nombre,
            correo,
            mensaje,
            testimoniales
        })
    } else {
        // Almacenar los datos en la base de datos
        try {
            const testimoniales = await Testimonial.findAll({
                attributes: testimonialesAttributes
            })
            await Testimonial.create({ 
                id: testimoniales.length + 2,
                nombre, 
                correo, 
                mensaje 
            })

            // Redirecciona a testimoniales
            res.redirect( '/testimoniales' );

        } catch (error) {
            console.log( error );
        }
    }
}

export {
    guardarTestimonial,
}