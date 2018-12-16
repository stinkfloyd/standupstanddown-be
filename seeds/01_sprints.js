exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('sprints').del()
    .then(function () {
      // Inserts seed entries
      return knex('sprints').insert([
        { sprint_length: 5, sprint_goal: "Ship Products Module", sprint_notes: "Jan has a dr. appointment this week and will be out part of the day on tues.", team_id: 1 },
      ])
        .then(function () {
          // Moves id column (PK) auto-incrementer to correct value after inserts
          return knex.raw("SELECT setval('sprints_id_seq', (SELECT MAX(id) FROM sprints))")
        })
    })
};
