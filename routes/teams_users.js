const express = require('express');
const router = express.Router();
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

// ADDS A USER TO A TEAM
router.post('/:team_id/:user_id', jwtVerify, (req, res, next) => {
  console.log('POSTED!');
  let newUser = {
    team_id: req.params.team_id,
    user_id: req.params.user_id,
  }
  teams_usersModel.create(newUser)
    .then(response => res.send(response))
})

module.exports = router