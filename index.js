const express = require('express')
const mongoose = require('mongoose')
const cookieSession = require('cookie-session')
const passport = require('passport')
const keys = require('./config/keys')
const app = express()
require('./models/user')
require('./services/passport')

mongoose.connect(keys.mongoURI)

require('./routes/authRoutes')(app)

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 + 1000, //30days
        keys: [keys.cookieKey], //encrypts cookie
    })
)

app.use(passport.initialize())
app.use(passport.session())


const PORT = process.env.PORT || 5000
app.listen(PORT)
