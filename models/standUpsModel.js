const knex = require('../knex')

const getAll = () => {
  return knex('standups')
    .then(standUps => standUps)
    .catch(err => Promise.reject(err))
}

// Creates a stand up for a given member
const create = (body) => {
  return knex('standups')
    .insert(body)
    .returning('*')
    .then((standUp) => {
      return standUp
    })
    .catch(err => Promise.reject(err))
}

// Returns the standups with the given team_ID
const getOneSprintsStandUps = (id) => {
  return knex('standups')
    .where('sprint_id', id)
    .then((standUps) => {
      return standUps
    })
    .catch((err) => {
      Promise.reject(err)
    })
}

// Edits the given ID's team name
const edit = (id, body) => {
  console.log("body: ", body)
  return knex('standups')
    .where('id', id)
    .update(body)
    .returning('*')
    .then(standUp => standUp[0])
    .catch(err => Promise.reject(err))
}

// Deletes a team with the given ID
const deleteOne = (id) => {
  return knex('standups')
    .where('id', id)
    .del()
    .returning('*')
    .then(standUp => standUp[0])
    .catch(err => Promise.reject(err))
}

module.exports = {
  getAll,
  create,
  getOneSprintsStandUps,
  deleteOne,
  edit
}