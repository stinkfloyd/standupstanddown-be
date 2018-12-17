exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('teams').del()
    .then(function () {
      // Inserts seed entries
      return knex('teams').insert([
        {
          id: 1,
          name: "The Tune Squad",
          creator_id: 1
        },
      ])
        .then(function () {
          // Moves id column (PK) auto-incrementer to correct value after inserts
          return knex.raw("SELECT setval('teams_id_seq', (SELECT MAX(id) FROM teams))")
        })
    })
};
