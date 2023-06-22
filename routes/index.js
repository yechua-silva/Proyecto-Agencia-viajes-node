import express from 'express'
import { 
    paginaInicio, 
    paginaNosotros, 
    paginaTestimoniales, 
    paginaViajes, 
    paginaDetalleViaje  
} from '../controllers/paginasControllers.js';
import { 
    guardarTestimonial 
} from '../controllers/testimonialControllers.js';

const router = express.Router();

router.get('/', paginaInicio )

router.get('/nosotros', paginaNosotros )

router.get('/viajes', paginaViajes )

// Para hacer dinamicas las URL se hace por medio de un comodin "/:<nombre-eleguir>"
router.get('/viajes/:slug', paginaDetalleViaje )

router.get('/testimoniales', paginaTestimoniales )
router.post('/testimoniales', guardarTestimonial )

export default router