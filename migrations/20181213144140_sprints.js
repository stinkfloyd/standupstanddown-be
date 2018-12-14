exports.up = (knex, Promise) => {
  return knex.schema.createTable('sprints', function (table) {
    // TABLE COLUMN DEFINITIONS HERE
    table.increments() // This is the id, auto-increments
    table.integer('sprint_length').notNullable().defaultTo(5)
    table.string('sprint_goal', 255).notNullable().defaultTo('')
    table.string('sprint_notes', 400).notNullable().defaultTo('')
    table.integer('team_id').notNullable()
    table.foreign(`team_id`).references(`teams.id`).onDelete(`CASCADE`)
    table.timestamps(true, true)
  })
}

exports.down = (knex, Promise) => knex.schema.dropTableIfExists('sprints')
