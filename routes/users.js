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

  jwt.verify(req.cookies.token, process.env.JWT_KEY, (err, _payload) => {
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

// GET ONE user
router.get('/:id', verifyId, jwtVerify, (req, res, next) => {
  if (req.payload.id != req.params.id) {
    let err = new Error()
    err.status = 401
    err.message = "Unauthorized"
    return next(err)
  }
  return userModel.getOneUser(req.params.id)
})

// router.post('/', function (req, res, next) {
//   console.log('POSTED!');
//   let newUser = {
//     username: profile.username,
//     githubId: profile.id,
//     //photo: profile._json.avatar_url
//   }
//   userModel.create(newUser)
//   res.send('POSTED!');
// })

module.exports = router
