require('./config/config')

const express = require('express')
const app = express()

const mongoose = require('mongoose');


const bodyParser = require('body-parser')
    // create application/x-www-form-urlencoded parser
app.use(bodyParser.urlencoded({ extended: false }))
    // create application/json parser
app.use(bodyParser.json())

//Configuración global de rutas
app.use(require('./routes/index'));

mongoose.connect(process.env.URLDB, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true },
    (err, res) => {
        if (err) throw err;
        console.log('Base de datos corriendo');
    });

app.listen(process.env.PORT, () => {
    console.log('Conectado puerto:', process.env.PORT);
})