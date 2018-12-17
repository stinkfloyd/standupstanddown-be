const standUpsModel = require('../models/standUpsModel.js')
const sprintsModel = require('../models/sprintsModel.js')
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken')

// GET ALL STANDUPS -> COMMENT OUT FOR PRODUCTION
router.get('/', (req, res, next) => {
  standUpsModel.getAll()
    .then(response => res.send(response))
    .catch(err => next(err))
})

// GET ALL STANDUPS FOR ONE SPRINT
router.get('/:team_id', (req, res, next) => {
  standUpsModel.getOneSprintsStandUps(req.params.team_id)
    .then((response) => {
      res.send(response)
    })
    .catch(err => next(err))
})

// POST A STANDUP TO THE SPRINT WITH THE GIVEN ID
router.post('/:sprint_id', (req, res, next) => {
  let newStandUp = {
    yesterday: req.body.yesterday,
    today: req.body.today,
    helps: req.body.helps,
    dayInSprint: req.body.dayInSprint,
    sprint_id: req.params.sprint_id,
    user_id: req.body.user_id,
  }
  standUpsModel.create(newStandUp)
    .then((response) => {
      console.log("standUpsModel.create response: ", response)
      res.send(response)
    })
})

// EDIT A POSTED STANDUP TO THE SPRINT WITH THE GIVEN ID
router.put('/:sprint_id', (req, res, next) => {
  let edittedStandUp = {
    yesterday: req.body.yesterday,
    today: req.body.today,
    helps: req.body.helps,
    dayInSprint: req.body.dayInSprint,
    sprint_id: req.params.sprint_id,
    user_id: req.body.user_id,
  }
  standUpsModel.edit(edittedStandUp)
    .then((response) => {
      console.log("standUpsModel.edit response: ", response)
      res.send(response)
    })
})
module.exports = router