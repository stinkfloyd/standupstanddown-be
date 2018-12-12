const express = require('express');
const router = express.Router();
const teamModel = require('../models/teamsModel.js')
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

// GET ALL TEAMS -> COMMENT OUT FOR PRODUCTION
router.get('/', jwtVerify, (req, res, next) => {
  teamModel.getAll()
    .then(response => res.send(response))
    .catch(err => next(err))
})

// GET ONE TEAM
router.get('/:id', verifyId, jwtVerify, (req, res, next) => {
  teamModel.getOneTeam(req.params.id)
    .then(response => res.send(response))
    .catch(err => next(err))
})

// POST A TEAM TO THE DATABASE
router.post('/', jwtVerify, (req, res, next) => {
  // Create the initial team
  let newTeam = {
    name: req.body.name,
    creator_id: req.body.creator_id,
    //photo: profile._json.avatar_url
  }
  teamModel.create(newTeam)
    .then(response => res.send(response))
    .catch(err => next(err))
})

// DELETE A TEAM
router.delete('/:id', verifyId, jwtVerify, (req, res, next) => {
  teamModel.getOneTeam(req.params.id)
    .then(response => {
      if (response.creator_id === req.cookies.id) {
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
module.exports = router