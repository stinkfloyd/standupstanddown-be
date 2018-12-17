const knex = require('../knex')

// Returns the team with the given ID
const getOneUser = (id) => {
  return knex('teams_users')
    .where('user_id', id)
    .then(user => user)
    .catch((err) => {
      Promise.reject(err)
    })
}

module.exports = {
  getOneUser,
}