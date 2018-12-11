exports.up = function (knex, Promise) {
  return knex.schema.createTable('teams', function (table) {
    // TABLE COLUMN DEFINITIONS HERE
    table.increments()
    table.string('name', 255).notNullable().defaultTo('')
    table.integer('creator_id').notNullable().defaultTo('')
    //TODO:
    /*
      This is where I left off on Tuesday. My plan for the next step was to make creator_id a foriegn key.
     */
    table.timestamps(true, true)
    // OR
    // table.dateTime('created_at').notNullable().defaultTo(knex.raw('now()'))
    // table.dateTime('updated_at').notNullable().defaultTo(knex.raw('now()'))
  })
}
exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('teams')
}