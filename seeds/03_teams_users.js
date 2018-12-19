exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('teams_users').del()
    .then(function () {
      // Inserts seed entries
      return knex('teams_users').insert([
        {
          team_id: 1,
          user_id: 1
        },
        {
          team_id: 1,
          user_id: 2
        },
        {
          team_id: 1,
          user_id: 3
        },
        {
          team_id: 1,
          user_id: 5
        },

      ])
    })
};
