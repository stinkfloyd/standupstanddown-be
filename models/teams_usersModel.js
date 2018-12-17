const knex = require('../knex')

// Gets all teams in the database
const getAll = () => {
  return knex('teams_users')
    .then(teams_users => teams_users)
    .catch(err => Promise.reject(err))
}

// Adds a user to a team.
const addUserToTeam = (body) => {
  console.log("body: ", body)
  return knex('teams_users')
    .insert(body)
    .returning('*')
    .then((teams_users) => {
      return teams_users
    })
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
  return knex('teams_users')
    .where('team_id', team_id)
    .andWhere('user_id', user_id)
    .del()
    .then(response => response)
    .catch(err => Promise.reject(err))
}

// Deletes a user from a team
const checkUser = (team_id, user_id) => {
  console.log("check user");
  return knex('teams_users')
    .where('team_id', team_id)
    .andWhere('user_id', user_id)
    .then((response) => {
      console.log("checkUser response: ", response);
      return response
    })
    .catch(err => Promise.reject(err))
}

module.exports = {
  getAll,
  addUserToTeam,
  getOneTeam,
  removeUser,
  checkUser
}