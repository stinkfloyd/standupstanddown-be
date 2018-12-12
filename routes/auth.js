const router = require('express').Router();
const passport = require('passport');
const jwt = require('jsonwebtoken')


// auth with github
// Use Passport with the github strategy that we attached to it in config
// This is where it redirects to github oauth
router.get('/github', passport.authenticate('github', {
  // Scope Proctor -> tell us what we want, returned as an array
  scope: ['profile']
}));

// callback route for github to redirect to
// hand control to passport to use code to grab profile info
router.get('/github/callback', passport.authenticate('github'), (req, res) => {
  // res.send(req.user);
  let payLoad = {
    id: req.user.id,
    oauthid: req.user.oauthId,
    loggedIn: true,
  }
  let token = jwt.sign(payLoad, process.env.TOKEN_SECRET)
  res.cookie("token", 'http://localhost:8080', token, {
    expires: new Date(Date.now() + 900000) // 15 minutes
  })
  res.redirect('/');
});

module.exports = router;