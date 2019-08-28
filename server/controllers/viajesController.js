const Viaje = require('../models/Viajes');

/* exports.mostrarViajes = (req, res) => { //esto es usando promises
    Viaje.findAll()
        .then(viajes => res.render('viajes', {
            pagina: 'Proximos Viajes',
            viajes
        }))
        .catch(error => console.log(error));
} */

exports.mostrarViajes = async (req, res) => { //esto es usando async await
    const viajes = await Viaje.findAll()
    res.render('viajes', {
        pagina: 'Proximos Viajes',
        viajes
    })
       
}

/* exports.mostrarViaje = (req, res) => { //esto es usando promises
    Viaje.findByPk(req.params.id)
        .then(viaje => res.render('viaje', {
            viaje
        }))
        .catch(error => console.log(error));

} */

exports.mostrarViaje = async (req, res) => { //esto es usando promises
    const viaje = await Viaje.findByPk(req.params.id)
    res.render('viaje', {
        viaje
    })
}
    