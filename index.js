const express = require('express')
const mongoose = require('mongoose')
const keys = require('./config/keys')
const app = express()
require('./models/user')
require('./services/passport')

mongoose.connect(keys.mongoURI)

require('./routes/authRoutes')(app)



const PORT = process.env.PORT || 5000
app.listen(PORT)
