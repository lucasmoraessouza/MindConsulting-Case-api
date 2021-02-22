const express = require('express')
const routes = require('./src/routes')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json()) //formato de enviar dados
app.use(routes)

app.listen(3000, () => console.log('running'))
