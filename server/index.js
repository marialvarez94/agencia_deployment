// importar express
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const routes = require('./routes');
const configs = require('./config');
const db = require('./config/database');

require('dotenv').config({ path: 'variables.env' })

//probar autenticacion
db.authenticate()
    .then(() => console.log('DB conectada'))
    .catch(error => console.log(error)); 



// configurar express
const app = express();

//habilitar pug
app.set('view engine' , 'pug');

//añadir las vistas
app.set('views', path.join(__dirname, './views'));

//cargar una carpeta estatica llamada public
app.use(express.static('public'));

//validar si estamos en desarrollo o en produccion
const config = configs[app.get('env')];

//creamos la variable para el sitio web
app.locals.titulo  = config.nombresitio;



//Muestra el año actual
app.use((req, res, next) => {
    //crear una nueva fecha
    const fecha = new Date();
    res.locals.fechaActual = fecha.getFullYear();
    res.locals.ruta = req.path; //genera la ruta despues del /
    return next();
})

//ejecutamos el body-parser
app.use(bodyParser.urlencoded({extended: true}));

// cargar las rutas
app.use('/', routes());


//puerto y host para la app
const host = process.env.HOST || '0.0.0.0'; //sino es la variable HOST es la direccion 0000  heroku la detecta 
const port = process.env.PORT || 3000; //heroku detecta y asigna

app.listen(port, host, () => {
    console.log('El servidor esta funcionando');
});