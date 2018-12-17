const knex = require('../knex')


const getAll = () => {
  return knex('standUps')
    .then(standUps => standUps)
    .catch(err => Promise.reject(err))
}

// Creates a stand up for a given member
const create = (body) => {
  return knex('standUps')
    .insert(body)
    .returning('*')
    .then(standUp => standUp[0])
    .catch(err => Promise.reject(err))
}

// Returns the standups with the given team_ID
const getOnestandUp = (id) => {
  return knex('standUps')
    .where('id', id)
    .then(standUp => standUp[0])
    .catch((err) => {
      Promise.reject(err)
    })
}

// Edits the given ID's team name
const editName = (id, body) => {
  console.log("body: ", body)
  return knex('standUps')
    .where('id', id)
    .update(body)
    .returning('*')
    .then(standUp => standUp[0])
    .catch(err => Promise.reject(err))
}

// Deletes a team with the given ID
const deleteOne = (id) => {
  return knex('standUps')
    .where('id', id)
    .del()
    .returning('*')
    .then(standUp => standUp[0])
    .catch(err => Promise.reject(err))
}

module.exports = {
  getAll,
  create,
  getOnestandUp,
  deleteOne,
  editName
}