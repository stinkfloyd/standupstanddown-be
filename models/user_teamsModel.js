const knex = require('../knex')

// Returns the team with the given ID
const getOneUser = (id) => {
  return knex('teams_users')
    .join('teams', 'teams.id', '=', 'teams_users.team_id')
    .where('user_id', id)
    .returning('name')
    .then((user) => {
      return user
    })
    .catch((err) => {
      Promise.reject(err)
    })
}

module.exports = {
  getOneUser,
}