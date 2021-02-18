//criando tabela
exports.up = (knex)=> knex.schema.createTable('user', (table)=> {
    table.increments('id').primary()
    table.string('name').notNullable()
    table.string('cpf').notNullable()
    table.string('email').notNullable()
    table.string('password').notNullable()
    table.string('level').notNullable()
    table.string('image').notNullable()

} ) 

//excluindo tabela
exports.down = (knex)=> knex.schema.dropTable('user')






// funcao normal
// exports.down = function(knex) {
//     knex.schema.createTable('properties', function(table){

//     })
// };