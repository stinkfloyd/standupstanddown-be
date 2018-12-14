const express = require('express');
const router = express.Router();
const teams_usersModel = require('../models/teams_usersModel.js')
const teamsModel = require('../models/teamsModel.js')
const jwt = require('jsonwebtoken')

// Middleware Functions
const verifyId = (req, res, next) => {
  let {
    team_id,
    user_id
  } = req.params
  if (isNaN(team_id) || isNaN(user_id)) {
    let err = new Error()
    err.status = 401
    err.message = `Not a valid ID`
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

// GET ALL TEAMS 
router.get('/', jwtVerify, (req, res, next) => {
  teams_usersModel.getAll()
    .then(response => res.send(response))
    .catch(err => next(err))
})

// GET ONE TEAMS USERS
router.get('/:team_id', (req, res, next) => {
  teams_usersModel.getOneTeam(req.params.team_id)
    .then((response) => {
      res.send(response)
    })
    .catch(err => {
      next(err)
    })
})

// ADDS A USER TO A TEAM
router.post('/:team_id/:user_id', verifyId, (req, res, next) => {
  teamsModel.getOneTeam(req.params.team_id)
    .then((response) => {
      // if (req.payload.id !== response[0].creator_id) {
      //   let err = new Error()
      //   err.status = 403
      //   err.message = 'Forbidden - Not the Team Creator'
      // } else {
      let newUser = {
        team_id: req.params.team_id,
        user_id: req.params.user_id,
      }
      teams_usersModel.create(newUser)
        .then(response => res.send(response))
      // }
    })
    .catch(err => next(err))
})

// DELETE A USER FROM A TEAM IF TEAM OWNER
router.delete('/:team_id/:user_id', verifyId, jwtVerify, (req, res, next) => {

})

module.exports = router