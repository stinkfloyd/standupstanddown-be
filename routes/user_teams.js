const express = require('express');
const router = express.Router();
const user_teamsModel = require('../models/user_teamsModel.js')
const teamsModel = require('../models/teamsModel.js')
const jwt = require('jsonwebtoken')

// Middleware Functions
const verifyId = (req, res, next) => {
  let {
    user_id
  } = req.params
  if (isNaN(parseInt(user_id))) {
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

// GET ONE USERS TEAMS
router.get('/:user_id', (req, res, next) => {
  let arrayOfTeams = []
  user_teamsModel.getOneUser(req.params.user_id)
    .then((response) => {
      console.log("response before array: ", response)
      response.forEach(async (team) => {
        console.log("team: ", team)
        await teamsModel.getOneTeam(team.team_id, next)
          .then((response) => {
            console.log("response before push: ", response.name)
            arrayOfTeams.push(response.name)
          })
          .catch(err => next(err))
        res.send(arrayOfTeams)
      })
    })
    .catch(err => {
      next(err)
    })
})

module.exports = router