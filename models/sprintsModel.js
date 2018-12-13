const knex = require('../knex')

// Gets all teams in the database
const getAll = () => {
  return knex('sprints')
    .then(sprints => sprints)
    .catch(err => Promise.reject(err))
}

// Creates a team from the given object
const create = (body) => {
  return knex('sprints')
    .insert(body)
    .returning('*')
    .then(sprint => sprint[0])
    .catch(err => Promise.reject(err))
}

// Returns the team with the given ID
const getOneSprint = (id) => {
  return knex('sprints')
    .where('id', id)
    .then(sprint => sprint[0])
    .catch((err) => {
      Promise.reject(err)
    })
}

// Edits the given ID's team name
const editName = (id, body) => {
  console.log("body: ", body)
  return knex('sprints')
    .where('id', id)
    .update(body)
    .returning('*')
    .then(sprint => sprint[0])
    .catch(err => Promise.reject(err))
}

// Deletes a team with the given ID
const deleteOne = (id) => {
  return knex('sprints')
    .where('id', id)
    .del()
    .returning('*')
    .then(sprint => sprint[0])
    .catch(err => Promise.reject(err))
}

module.exports = {
  getAll,
  create,
  getOneSprint,
  deleteOne,
  editName
}