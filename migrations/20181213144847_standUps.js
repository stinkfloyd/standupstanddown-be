exports.up = (knex, Promise) => {
  return knex.schema.createTable('standups', (table) => {
    table.increments() // This is the id, auto-increments
    table.string('yesterday', 255).notNullable().defaultTo('')
    table.string('today', 255).notNullable().defaultTo('')
    table.string('helps', 255).notNullable().defaultTo('')
    table.integer('dayInSprint').notNullable()
    table.string('username', 255).notNullable()
    table.foreign(`username`).references(`users.username`).onDelete(`CASCADE`)
    table.integer('sprint_id').notNullable()
    table.foreign(`sprint_id`).references(`sprints.id`).onDelete(`CASCADE`)
  })
}

exports.down = (knex, Promise) => knex.schema.dropTableIfExists('standups')
