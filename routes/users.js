const express = require('express');
const router = express.Router();
const userModel = require('../models/userModel.js')
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
      err.message = `Unauthorized - Bad JWT Token cookie`
      return next(err);
    } else {
      req.payload = _payload
      next()
    }
  })
}

// GET ALL USERS 
router.get('/', (req, res, next) => {
  userModel.getAll()
    .then(response => res.send(response))
    .catch(err => next(err))
})

// GET ONE USER
router.get('/:id', verifyId, (req, res, next) => {
  console.log("req.payload.id:", req.payload.id)
  if (req.payload.id !== +(req.params.id)) {
    let err = new Error()
    err.status = 401
    err.message = "Unauthorized - Cannot request other users"
    return next(err)
  }
  userModel.getOneUser(req.params.id)
    .then(((response) => {
      return res.send(response)
    }))
    .catch(err => next(err))
})

module.exports = router
