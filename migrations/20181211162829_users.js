exports.up = function (knex, Promise) {
  return knex.schema.createTable('users', function (table) {
    // TABLE COLUMN DEFINITIONS HERE
    table.increments() // This is the id, auto-increments
    table.string('firstName', 255).notNullable().defaultTo('')
    table.string('lastName', 255).notNullable().defaultTo('')
    table.string('username', 255).notNullable().defaultTo('')
    table.string('email', 255).notNullable().defaultTo('')
    // This needs testing.
    //table.string('photo', 255).notNullable().defaultTo('')
    table.string('bio', 255).notNullable().defaultTo('')
    table.integer('githubId').notNullable()
    table.timestamps(true, true)
    // OR
    // table.dateTime('created_at').notNullable().defaultTo(knex.raw('now()'))
    // table.dateTime('updated_at').notNullable().defaultTo(knex.raw('now()'))
  })
}
exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('users')
}