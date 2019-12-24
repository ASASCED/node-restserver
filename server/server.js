require('./config/config')
require('colors')

const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const app = express()

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Habilitar la carpeta public
app.use(express.static(path.resolve(__dirname, '../public')))

app.use(require('./routes/index'))

mongoose.connect(
    process.env.URLDB,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    },
    (err, res) => {
        if (err) throw err

        console.log('Base de datos ONLINE'.yellow)
    }
)

app.listen(process.env.PORT, () => {
    console.log(`Escuchando puerto: ${process.env.PORT}`.bgGreen)
})
