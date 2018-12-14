const knex = require('../knex')

// Gets all teams in the database
const getAll = () => {
  return knex('teams')
    .then(teams => teams)
    .catch(err => Promise.reject(err))
}

// Creates a team from the given object
const create = (body) => {
  return knex('teams')
    .insert(body)
    .returning('*')
    .then(team => team[0])
    .catch(err => Promise.reject(err))
}

// Returns the team with the given ID
const getOneTeam = (id, next) => {
  return knex('teams')
    .where('id', id)
    .then((team) => {
      return team
    })
    .catch((err) => {
      next(err)
    })
}

// Edits the given ID's team name
const editName = (id, body) => {
  console.log("body: ", body)
  return knex('teams')
    .where('id', id)
    .update(body)
    .returning('*')
    .then(team => team[0])
    .catch(err => Promise.reject(err))
}

// Deletes a team with the given ID
const deleteOne = (id, next) => {
  return knex('teams')
    .where('id', id)
    .del()
    .returning('*')
    .then(team => team)
    .catch(err => next(err))
}

// Returns the team with the given name
const checkName = (name) => {
  console.log('checkName name: ', name);
  return knex('teams')
    .where('name', name)
    .then(user => user[0])
    .catch((err) => {
      Promise.reject(err)
    })
}

module.exports = {
  getAll,
  create,
  getOneTeam,
  deleteOne,
  editName,
  checkName
}