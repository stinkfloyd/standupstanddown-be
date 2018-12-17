exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('standups').del()
    .then(function () {
      // Inserts seed entries
      return knex('standups').insert([
        {
          id: 1,
          yesterday: "I created the db for products being reviewed.",
          today: "I plan to determine what data we need to migrate.",
          helps: "Anyone familiar with the reqs for writing reviews?",
          user_id: 1,
          sprint_id: 1,
          dayInSprint: 1
        },
        {
          id: 2,
          yesterday: "I drew up some wireframes for the product review module.",
          today: "I pan to get consensus and begin building the review center component.",
          helps: "I'll need a 15 min meeting before lunch to present the wireframes to the team.",
          user_id: 2,
          sprint_id: 1,
          dayInSprint: 1
        },
        {
          id: 3,
          yesterday: "I met with MJ and determined the reqs for reviews.",
          today: "I will write the migrations for the product review tables.",
          helps: "N/A.",
          user_id: 1,
          sprint_id: 1,
          dayInSprint: 2
        },
      ])
        .then(function () {
          // Moves id column (PK) auto-incrementer to correct value after inserts
          return knex.raw("SELECT setval('standups_id_seq', (SELECT MAX(id) FROM standups))")
        })
    })
};
