const sprintsModel = require('../models/sprintsModel.js')
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken')

/**
 * 
 * Sprints Routes call the sprintsModel
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

// GET ALL sprints -> COMMENT OUT FOR PRODUCTION
router.get('/', (req, res, next) => {
  sprintsModel.getAll()
    .then(response => res.send(response))
    .catch(err => next(err))
})

// GET ONE daily
router.get('/:id', verifyId, jwtVerify, (req, res, next) => {
  sprintsModel.getOneSprint(req.params.id)
    .then(response => res.send(response))
    .catch(err => next(err))
})

// POST A sprints TO THE DATABASE
router.post('/', jwtVerify, (req, res, next) => {
  // Create the initial sprints
  let newSprint = {
    name: req.body.name,
    // which id do we need here instead of creator_id
    creator_id: req.body.creator_id,
    //photo: profile._json.avatar_url
  }
  sprintsModel.create(newSprint)
    .then(response => res.send(response))
    .catch(err => next(err))

  /*
   *  TODO:: NEED TO ADD CREATOR TO THE sprintsS_USERS
   */
})

// DELETE A sprints
router.delete('/:id', verifyId, jwtVerify, (req, res, next) => {
  sprintsModel.getOneSprint(req.params.id)
    .then(response => {
      if (response.user_id === req.payload.id) {
        sprintsModel.deleteOne(req.params.id)
          .then(response => res.send(response))
          .catch(err => next(err))
      } else {
        let err = new Error()
        err.status = 401
        err.message = `Unauthorized - Not sprints Creator`
        next(err)
      }
    })
})

// EDIT A sprints NAME
router.put('/:id', verifyId, jwtVerify, async (req, res, next) => {
  if (!req.body.name) {
    let err = new Error()
    err.status = 403
    err.message = `No name given.`
    next(err)
  } else {
    let sprints = await sprintsModel.getOneSprint(req.params.id)
    if (sprints.user_id !== req.payload.id) {
      let err = new Error()
      err.status = 401
      err.message = `Unauthorized - Not sprints Creator`
      next(err)
    } else {
      let newSprint = { ...sprints, name: req.body.name }
      sprintsModel.editName(req.params.id, newSprint)
        .then(response => res.send(response))
        .catch(err => Promise.reject(err))
    }
  }
})

module.exports = router