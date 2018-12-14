const express = require('express');
const router = express.Router();
const teamModel = require('../models/teamsModel.js')
const teams_usersModel = require('../models/teams_usersModel.js')
const jwt = require('jsonwebtoken')

// Middleware Functions
const verifyId = (req, res, next) => {
  let {
    id
  } = req.params
  if (isNaN(id)) {
    let err = new Error()
    err.status = 401
    err.message = `Not a valid ID`
    next(err)
  } else {
    next()
  }
}

const jwtVerify = (req, res, next) => {
  console.log(req.cookies.token)
  jwt.verify(req.cookies.token, process.env.TOKEN_SECRET, (err, _payload) => {
    if (err) {
      err.status = 401
      err.message = `Unauthorized - Bad JWT Token cookie`
      return next(err);
    } else {
      req.payload = _payload
      next()
    }
  })
}

const addOwnerToTeam = async (req, res, next) => {
  console.log('req.team(response) in addOWner ', req.team)
  let creator = {
    team_id: req.team.id,
    user_id: req.team.creator_id,
  }
  teams_usersModel.create(creator)
    .then(response => res.send(response))
}

// GET ALL TEAMS -> COMMENT OUT FOR PRODUCTION
router.get('/', (req, res, next) => {
  teamModel.getAll()
    .then(response => res.send(response))
    .catch(err => next(err))
})

// GET ONE TEAM
router.get('/:id', verifyId, jwtVerify, (req, res, next) => {
  teamModel.getOneTeam(req.params.id, next)
    .then(response => {
      if (req.payload.id !== response.creator_id) {
        let err = new Error()
        err.status = 401
        err.message = `Unauthorized - Not Team Creator`
        return next(err);
      } else {
        res.send(response)
      }
    })
    .catch(err => next(err))
})

// POST A TEAM TO THE DATABASE
router.post('/', (req, res, next) => {
  // Create the initial team
  let newTeam = {
    name: req.body.name,
    creator_id: req.body.creator_id,
  }
  teamModel.create(newTeam)
    .then((response) => {
      console.log('response: ', response)
      if (!response) {
        return next(response)
      } else {
        req.team = response
        addOwnerToTeam(req, res, next)
      }
    })
    .catch(err => next(err))
})

// DELETE A TEAM
router.delete('/:id', verifyId, jwtVerify, (req, res, next) => {
  teamModel.getOneTeam(req.params.id, next)
    .then((response) => {
      if (response.creator_id === req.payload.id) {
        teamModel.deleteOne(req.params.id)
          .then(response => res.send(response))
          .catch(err => next(err))
      } else {
        let err = new Error()
        err.status = 401
        err.message = `Unauthorized - Not Team Creator`
        next(err)
      }
    })
})

// EDIT A TEAM NAME
router.put('/:id', verifyId, jwtVerify, async (req, res, next) => {
  if (!req.body.name) {
    let err = new Error()
    err.status = 403
    err.message = `No name given.`
    next(err)
  } else {
    let team = await teamModel.getOneTeam(req.params.id)
    if (team.creator_id !== req.payload.id) {
      let err = new Error()
      err.status = 401
      err.message = `Unauthorized - Not Team Creator`
      next(err)
    } else {
      let newTeam = { ...team, name: req.body.name }
      teamModel.editName(req.params.id, newTeam)
        .then(response => res.send(response))
        .catch(err => next(err))
    }
  }
})

module.exports = router