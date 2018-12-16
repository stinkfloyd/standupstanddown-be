const sprintsModel = require('../models/sprintsModel.js')
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken')

/**
 * 
 * Sprints Routes call the sprintsModel
 * 
 */

// Middleware Functions
const verifyId = (req, res, next) => {
  let {
    team_id
  } = req.params
  if (isNaN(team_id)) {
    let err = new Error()
    err.status = 401
    err.message = `Not a valid Team ID`
    next(err)
  } else {
    next()
  }
}

const jwtVerify = (req, res, next) => {
  jwt.verify(req.cookies.token, process.env.TOKEN_SECRET, (err, _payload) => {
    if (err) {
      err.status = 401
      err.message = `Unauthorized`
      return next(err);
    } else {
      req.payload = _payload
      next()
    }
  })
}

// GET ALL sprints -> COMMENT OUT FOR PRODUCTION
router.get('/', (req, res, next) => {
  sprintsModel.getAll()
    .then(response => res.send(response))
    .catch(err => next(err))
})

// Gets all the sprints associated with the given team_id
router.get('/:team_id', verifyId, jwtVerify, (req, res, next) => {
  sprintsModel.getOneTeamsSprints(req.params.team_id)
    .then((response) => {
      res.send(response)
    })
    .catch(err => next(err))
})

// POST A sprints TO THE DATABASE
router.post('/:team_id', (req, res, next) => {
  console.log('req.params.team_id: ', req.params.team_id)
  // Create the initial sprints
  let newSprint = {
    sprint_length: req.body.sprint_length,
    sprint_goal: req.body.sprint_goal,
    sprint_notes: '',
    team_id: req.params.team_id
  }
  sprintsModel.create(newSprint)
    .then((response) => {
      res.send(response)
    })
    .catch(err => next(err))
})

// DELETE A sprints - ** TODO:: THIS ROUTE
router.delete('/:id', verifyId, jwtVerify, (req, res, next) => {

})

module.exports = router