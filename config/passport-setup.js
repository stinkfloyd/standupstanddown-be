require('dotenv').config()
const passport = require('passport')
const GitHubStrategy = require('passport-github').Strategy
const userModel = require('../models/userModel.js')

// Takes two parameters
// - Strategy (takes in an object -- options for strategy)
// - Callback function
passport.use(
  new GitHubStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: '/auth/github/callback'
  },
    // passport call back function
    (accessToken, refreshToken, profile, done) => {
      // Check if user is in our psql db, if not, make them
      console.log(`profile: `, profile)
      userModel.checkUser(profile._json.id)
        .then((result) => {
          if (result) {
            // User exists, go to serializeUser
            done(null, result)
          } else {
            // Create the initial user
            let newUser = {
              username: profile.username,
              githubId: profile.id,
              photo: profile._json.avatar_url
            }
            userModel.create(newUser)
            done(null, newUser)
          }
        })
    })
)

passport.serializeUser((user, done) => {
  done(null, user.githubId)
})

passport.deserializeUser((id, done) => {
  userModel.checkUser(id)
    .then((user) => {
      done(null, user)
    })
})