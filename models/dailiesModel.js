const knex = require('../knex')

// Gets all teams in the database
const getAll = () => {
  return knex('dailies')
    .then(dailies => dailies)
    .catch(err => Promise.reject(err))
}

// Creates a team from the given object
const create = (body) => {
  return knex('dailies')
    .insert(body)
    .returning('*')
    .then(daily => daily[0])
    .catch(err => Promise.reject(err))
}

// Returns the team with the given ID
const getOneDaily = (id) => {
  return knex('dailies')
    .where('id', id)
    .then(daily => daily[0])
    .catch((err) => {
      Promise.reject(err)
    })
}

// Edits the given ID's team name
const editName = (id, body) => {
  console.log("body: ", body)
  return knex('dailies')
    .where('id', id)
    .update(body)
    .returning('*')
    .then(daily => daily[0])
    .catch(err => Promise.reject(err))
}

// Deletes a team with the given ID
const deleteOne = (id) => {
  return knex('dailies')
    .where('id', id)
    .del()
    .returning('*')
    .then(daily => daily[0])
    .catch(err => Promise.reject(err))
}

module.exports = {
  getAll,
  create,
  getOneDaily,
  deleteOne,
  editName
}