exports.up = function (knex, Promise) {
  return knex.schema.createTable('users', function (table) {
    // TABLE COLUMN DEFINITIONS HERE
    table.increments() // This is the id, auto-increments
    table.string('firstName', 255).notNullable().defaultTo('')
    table.string('lastName', 255).notNullable().defaultTo('')
    table.string('email', 255).notNullable().defaultTo('')
    table.string('photo', 255).notNullable().defaultTo('')
    table.string('bio', 255).notNullable().defaultTo('')
    table.timestamps(true, true)
  })
}
exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('users')
}