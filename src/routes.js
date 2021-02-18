const express = require('express')
const { login } = require('./controller/AuthController')
const routes = express.Router()
const middletoken = require('./middleware/token')

const AuthController = require('./controller/AuthController')
const UserController = require('./controller/UserController')

//metodo de rota
//get - pegar somentes dados
//post - envia e recebe dados
//delete - deletar dados
//put - alterar dados

routes.post('/register', AuthController.register)
routes.post('/login', AuthController.login)

routes.use(middletoken)
routes.delete('/user/:id', UserController.destroy)
routes.get('/user/:id', UserController.selectOne)
routes.get('/users', UserController.select)
routes.put('/user/:id', UserController.update)
routes.put('/desative/:id', UserController.desative)
routes.put('/active/:id', UserController.active)

module.exports = routes
