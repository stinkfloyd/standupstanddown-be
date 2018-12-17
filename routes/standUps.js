const standUpsModel = require('../models/standUpsModel.js')
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken')

/**
 * 
 * standUps Routes call the standUpsModel
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

// GET ALL standUpsS -> COMMENT OUT FOR PRODUCTION
router.get('/', jwtVerify, (req, res, next) => {
  standUpsModel.getAll()
    .then(response => res.send(response))
    .catch(err => next(err))
})

// GET ALL STANDUPS FOR ONE SPRINT
router.get('/:id', (req, res, next) => {
  standUpsModel.getOneSprintsStandUps(req.params.id)
    .then((response) => {
      res.send(response)
    })
    .catch(err => next(err))
})

// POST A standUps TO THE DATABASE
router.post('/', jwtVerify, (req, res, next) => {
  // Create the initial standUps
  let newStandUp = {
    name: req.body.name,
    user_id: req.body.user_id,
  }
  standUpsModel.create(newStandUp)
    .then(response => res.send(response))
    .catch(err => next(err))

})

// DELETE A standUps
router.delete('/:id', verifyId, jwtVerify, (req, res, next) => {
  standUpsModel.getOnestandUps(req.params.id)
    .then(response => {
      if (response.user_id === req.payload.id) {
        standUpsModel.deleteOne(req.params.id)
          .then(response => res.send(response))
          .catch(err => next(err))
      } else {
        let err = new Error()
        err.status = 401
        err.message = `Unauthorized - Not standUps Creator`
        next(err)
      }
    })
})

// EDIT A standUps NAME
router.put('/:id', verifyId, jwtVerify, async (req, res, next) => {
  if (!req.body.name) {
    let err = new Error()
    err.status = 403
    err.message = `No name given.`
    next(err)
  } else {
    let standUps = await standUpsModel.getOnestandUp(req.params.id)
    if (standUps.user_id !== req.payload.id) {
      let err = new Error()
      err.status = 401
      err.message = `Unauthorized - Not standUps Creator`
      next(err)
    } else {
      let newStandUp = { ...standUps, name: req.body.name }
      standUpsModel.editName(req.params.id, newStandUp)
        .then(response => res.send(response))
        .catch(err => Promise.reject(err))
    }
  }
})

module.exports = router