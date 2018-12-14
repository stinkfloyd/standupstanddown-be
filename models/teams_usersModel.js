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
  return knex('teams_users')
    .where('team_id', id)
    .then(team => team)
    .catch((err) => {
      Promise.reject(err)
    })
}

// Deletes a user from a team
const removeUser = (team_id, user_id) => {
  return knex('teams')
    .where('team_id', team_id)
    .andWhere('user_id', user_id)
    .del()
    .then(response => response)
    .catch(err => Promise.reject(err))
}

module.exports = {
  getAll,
  create,
  getOneTeam,
  removeUser
}