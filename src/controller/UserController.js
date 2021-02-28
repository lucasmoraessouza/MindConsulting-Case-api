const knex = require('../database')
const bcrypt = require('bcrypt')

module.exports = {
  async desative(req, res) {
    try {
      const { id } = req.params

      await knex('user').update('level', 0).where('id', id)

      return res.json({ message: 'Usuário desativado com sucesso.' })
    } catch (err) {
      return res.json({ error: 'Não foi possível alterar o level.' })
    }
  },

  async active(req, res) {
    try {
      const { id } = req.params

      await knex('user').update('level', 1).where('id', id)

      return res.json({ message: 'Usuário ativado com sucesso.' })
    } catch (err) {
      return res.json({ error: 'Não foi possível alterar o level.' })
    }
  },

  async update(req, res) {
    try {
      const { id } = req.params
      let dataUser = req.body
      if (dataUser.password) {
        dataUser.password = await bcrypt.hashSync(dataUser.password, 10)
      }

      await knex('user').update(dataUser).where('id', id)
      return res.json({ message: 'Dados alterado com sucesso.' })
    } catch (err) {
      return res.json({ error: 'Não foi possível alterar os dados.' })
    }
  },

  async select(req, res) {
    try {
      const levelUser = req.userLevel
      if (levelUser !== '999') {
        return res.json({ error: 'Usuário não autorizado.' })
      }
      const tabelaUsers = await knex('user').select()

      return res.json(tabelaUsers)
    } catch (err) {
      return res.json({ error: 'Não foi possível listar' })
    }
  },

  async selectOne(req, res) {
    try {
      const { id } = req.params
      const tabelaUser = await knex('user').select().where('id', id)
      if (tabelaUser.length === 0) {
        return res.json({ error: 'Usuário não encontrado.' })
      }
      tabelaUser[0].password = undefined
      return res.json({ user: tabelaUser[0] })
    } catch (err) {
      return res.json({ error: 'Não foi possível listar' })
    }
  },

  async destroy(req, res) {
    try {
      const { id } = req.params

      await knex('user').del().where('id', id)

      return res.json({ message: 'Usuário excluído com sucesso.' })
    } catch (err) {
      return res.json({ error: 'Não foi possível excluir usuário.' })
    }
  },
  async upload(req, res) {
    try {
      const { filename } = req.file
      const { id } = req.params

      await knex('user').update({ image: filename }).where('id', id)

      return res.json({ image: filename })
    } catch (err) {
      return res.json({ error: 'Não foi possível excluir usuário.' })
    }
  },
}
