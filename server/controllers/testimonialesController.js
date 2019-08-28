const Testimonial = require('../models/Testimoniales');

/* exports.mostrarTestimoniales = (req, res) => { //usanso promeises
    Testimonial.findAll()
    .then(testimoniales => res.render('testimoniales', {
        pagina: 'Testimonios',
        testimoniales
    }))
    
} */


exports.mostrarTestimoniales = async (req, res) => { //con async await
    const testimoniales = await Testimonial.findAll()
    res.render('testimoniales', {
        pagina: 'Testimonios',
        testimoniales
    })
    
}

/* exports.agregarTestimonial = (req, res) => { //con promises
    //validar que todos los campos esten llenos
    let {nombre, correo, mensaje} = req.body;

    let errores = [];
    if(!nombre) {
        errores.push({'mensaje' : 'Agrega tu nombre'});
    }
    if(!correo) {
        errores.push({'mensaje' : 'Agrega tu correo'});
    }
    if(!mensaje) {
        errores.push({'mensaje' : 'Agrega tu Mensaje'});
    }
    
    //revisar por errores
    if(errores.length > 0 ) {
        //muestra la vista por errores
        res.render('testimoniales', {
            errores,
            nombre,
            correo,
            mensaje
        })

    }else{
        //almacenar en la BD
        Testimonial.create({
            nombre,
            correo,
            mensaje
        })
        .then(testimonial => res.redirect('/testimoniales'))
        .catch(error => console.log(error));

    }
} */


//con async await

exports.agregarTestimonial = async (req, res) => { //con promises
    //validar que todos los campos esten llenos
    let {nombre, correo, mensaje} = req.body;

    let errores = [];
    if(!nombre) {
        errores.push({'mensaje' : 'Agrega tu nombre'});
    }
    if(!correo) {
        errores.push({'mensaje' : 'Agrega tu correo'});
    }
    if(!mensaje) {
        errores.push({'mensaje' : 'Agrega tu Mensaje'});
    }
    
    //revisar por errores
    if(errores.length > 0 ) {
        //muestra la vista por errores
        const testimoniales = await Testimonial.findAll()
        res.render('testimoniales', {
            errores,
            nombre,
            correo,
            mensaje,
            pagina: 'Testimoniales',
            testimoniales
        })

    }else{
        //almacenar en la BD
        Testimonial.create({
            nombre,
            correo,
            mensaje
        })
        .then(testimonial => res.redirect('/testimoniales'))
        .catch(error => console.log(error));

    }
}