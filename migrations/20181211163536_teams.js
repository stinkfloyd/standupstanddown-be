exports.up = function (knex, Promise) {
  return knex.schema.createTable('teams', function (table) {
    // TABLE COLUMN DEFINITIONS HERE
    table.increments()
    table.string('name', 255).notNullable().defaultTo('')
    table.integer('creator_id').notNullable()
    table.foreign(`creator_id`).references(`users.id`).onDelete(`CASCADE`)
    table.timestamps(true, true)
  })
}
exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('teams')
}