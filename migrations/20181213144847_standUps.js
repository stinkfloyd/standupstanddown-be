exports.up = (knex, Promise) => {
  return knex.schema.createTable('standups', (table) => {
    table.increments() // This is the id, auto-increments
    table.string('yesterday', 255).notNullable().defaultTo('')
    table.string('today', 255).notNullable().defaultTo('')
    table.string('helps', 255).notNullable().defaultTo('')
    table.integer('dayInSprint').notNullable().defaultTo(5)
    table.integer('user_id').notNullable()
    table.foreign(`user_id`).references(`users.id`).onDelete(`CASCADE`)
    table.integer('sprint_id').notNullable()
    table.foreign(`sprint_id`).references(`sprints.id`).onDelete(`CASCADE`)
  })
}

exports.down = (knex, Promise) => knex.schema.dropTableIfExists('standups')
