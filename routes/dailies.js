const dailiesModel = require('../models/dailiesModel.js')
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken')

/**
 * 
 * Dailies Routes call the dailiesModel
 * 
 */

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

// GET ALL dailiesS -> COMMENT OUT FOR PRODUCTION
router.get('/', jwtVerify, (req, res, next) => {
  dailiesModel.getAll()
    .then(response => res.send(response))
    .catch(err => next(err))
})

// GET ONE daily
router.get('/:id', verifyId, jwtVerify, (req, res, next) => {
  dailiesModel.getOnedaily(req.params.id)
    .then(response => res.send(response))
    .catch(err => next(err))
})

// POST A dailies TO THE DATABASE
router.post('/', jwtVerify, (req, res, next) => {
  // Create the initial dailies
  let newDaily = {
    name: req.body.name,
    user_id: req.body.user_id,
  }
  dailiesModel.create(newDaily)
    .then(response => res.send(response))
    .catch(err => next(err))

  /*
   *  TODO:: NEED TO ADD CREATOR TO THE dailiesS_USERS
   */
})

// DELETE A dailies
router.delete('/:id', verifyId, jwtVerify, (req, res, next) => {
  dailiesModel.getOnedailies(req.params.id)
    .then(response => {
      if (response.user_id === req.payload.id) {
        dailiesModel.deleteOne(req.params.id)
          .then(response => res.send(response))
          .catch(err => next(err))
      } else {
        let err = new Error()
        err.status = 401
        err.message = `Unauthorized - Not dailies Creator`
        next(err)
      }
    })
})

// EDIT A dailies NAME
router.put('/:id', verifyId, jwtVerify, async (req, res, next) => {
  if (!req.body.name) {
    let err = new Error()
    err.status = 403
    err.message = `No name given.`
    next(err)
  } else {
    let dailies = await dailiesModel.getOneDaily(req.params.id)
    if (dailies.user_id !== req.payload.id) {
      let err = new Error()
      err.status = 401
      err.message = `Unauthorized - Not dailies Creator`
      next(err)
    } else {
      let newDaily = { ...dailies, name: req.body.name }
      dailiesModel.editName(req.params.id, newDaily)
        .then(response => res.send(response))
        .catch(err => Promise.reject(err))
    }
  }
})

module.exports = router