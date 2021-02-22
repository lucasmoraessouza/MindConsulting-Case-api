const bcrypt = require('bcrypt')
const knex = require('../database')
const jwt = require('jsonwebtoken')

const key = require('../config/auth.json')

// consulta no banco de dados ---- select
// cadastrar no banco de d*ados --- insert
// deletar no banco de dados ----- delete
// alterar no banco de dados ----- update

module.exports = {
  async register(req, res) {
    try {
      //receber os dados do front
      let { name, cpf, email, password } = req.body

      password = await bcrypt.hashSync(password, 10)
      const userCPF = await knex('user').select().where('cpf', cpf)

      if (userCPF.length > 0) {
        return res.json({ error: 'CPF já cadastrado.' })
      }

      const userEmail = await knex('user').select().where('email', email)

      if (userEmail.length > 0) {
        return res.json({ error: 'Email já cadastrado.' })
      }

      const infoUser = {
        name,
        cpf,
        email,
        password,
        level: 1,
        image: 'null',
      }

      const id = await knex('user').insert(infoUser)
      const user = { ...infoUser, id: id[0] }
      return res.json({
        user,
        token: jwt.sign({ id: user.id, level: user.level }, key.secret, {
          expiresIn: '3h',
        }),
      })
    } catch (err) {
      console.log(err)
      return res.json({ error: 'Não foi possível registrar o usuário' })
    }
  },

  async login(req, res) {
    try {
      const { usuario, password } = req.body

      let user = await knex('user').select().where('email', usuario)

      if (user.length === 0) {
        user = await knex('user').select().where('cpf', usuario)

        if (user.length === 0) {
          return res.json({ error: 'Email ou CPF inválido.' })
        }
      }

      if (!(await bcrypt.compare(password, user[0].password))) {
        return res.json({ error: 'Senha inválida.' })
      }

      user[0].password = undefined
      if (user[0].level == 0) return res.json({ error: 'Usuario Desativado!' })

      return res.json({
        user: user[0],
        token: jwt.sign({ id: user[0].id, level: user[0].level }, key.secret, {
          expiresIn: '3h',
        }),
      })
    } catch (err) {
      return res.json({ error: 'Usuario não encontrado.' })
    }
  },
}
