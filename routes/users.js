const express = require('express');
const router = express.Router();
const userModel = require('../models/userModel.js')

/* GET users listing. */
router.get('/', function (req, res, next) {
  console.log('test')
  return userModel.getAll()
    .then(users => {
      res.send(users)
    })

})

router.post('/', function (req, res, next) {
  console.log('POSTED!');
  let newUser = {
    username: profile.username,
    githubId: profile.id,
    //photo: profile._json.avatar_url
  }
  userModel.create(newUser)
  res.send('POSTED!');
})

module.exports = router
