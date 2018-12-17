const express = require('express');
const router = express.Router();
const teams_usersModel = require('../models/teams_usersModel.js')
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

// GET ALL TEAMS 
router.get('/', (req, res, next) => {
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
router.post('/', jwtVerify, (req, res, next) => {
  teamsModel.getOneTeamByName(req.body.team_name, next)
    .then((response) => {
      if (!response) {
        err.status = 404
        err.statusText = `Team does not exist`
        return next(err);
      } else {
        req.team = response
        teams_usersModel.checkUser(response.id, req.payload.id)
          .then((response) => {
            if (response.length > 0) {
              let err = new Error()
              err.status = 401
              err.statusText = `Already on team`
              return next(err);
            } else {
              let newTeamMember = {
                team_id: req.team.id,
                user_id: req.payload.id
              }
              teams_usersModel.addUserToTeam(newTeamMember)
                .then((response) => {
                  res.send(response)
                })
                .catch((err) => {
                  next(err)
                })
            }
          })
      }
    })
    .catch((err) => { next(err) })
})

// DELETE A USER FROM A TEAM IF TEAM OWNER OR USER BEING DELETED
router.delete('/:team_id/:user_id', (req, res, next) => {
  // teamsModel.getOneTeam(req.params.team_id)
  //   .then((response) => {
  //     console.log(response)
  //   })
})

module.exports = router