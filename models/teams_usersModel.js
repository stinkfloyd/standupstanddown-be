const knex = require('../knex')

// Gets all teams in the database
const getAll = () => {
  return knex('teams_users')
    .then(teams_users => teams_users)
    .catch(err => Promise.reject(err))
}

// Creates a team from the given object
const create = (body) => {
  return knex('teams_users')
    .insert(body)
    .returning('*')
    .then(teams_users => teams_users[0])
    .catch(err => Promise.reject(err))
}

// Returns the team with the given ID
const getOneTeam = (id) => {
  return knex('teams_users/:id')
    .where('team_id', id)
    .then(team => team[0])
    .catch((err) => {
      Promise.reject(err)
    })
}

// Deletes a team with the given ID
// const deleteOne = (id) => {
//   return knex('teams')
//     .where('id', id)
//     .del()
//     .returning('*')
//     .then(team => team[0])
//     .catch(err => Promise.reject(err))
// }

module.exports = {
  getAll,
  create,
  getOneTeam
}