
const Viaje = require('../models/Viajes');
const Testimonial = require('../models/Testimoniales');

// con promises
/* exports.consultasHomePage = (req, res) => { //cuando estemos en la pagina principal
    const promises = [];

    promises.push(Viaje.findAll({
        limit:3
    }))

    promises.push(Testimonial.findAll({
        limit:3
    }))

    //pasar el promise y ejecutarlo
    const resultado = Promise.all(promises);


    resultado.then(resultado => res.render('index', {
        pagina: 'Proximos Viajes',
        clase: 'home',
        viajes : resultado[0],
        testimoniales : resultado[1]
    }))
    .catch(error => console.log(error));  
} */

//con async await

exports.consultasHomePage = async (req, res) => { //cuando estemos en la pagina principal
    const viajes = await (Viaje.findAll({ limit:3 }));
    const testimoniales = await (Testimonial.findAll({ limit:3 }))

    res.render('index', {
        pagina: 'Proximos Viajes',
        clase: 'home',
        viajes,
        testimoniales
    })
}





