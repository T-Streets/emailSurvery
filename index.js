const express = require('express')
const mongoose = require('mongoose')
const cookieSession = require('cookie-session')
const passport = require('passport')
const bodyParser = require('body-parser')
const keys = require('./config/keys')
const app = express()
require('./models/user')
require('./services/passport')

mongoose.connect(keys.mongoURI)

/**
 * middleware parses API requests to be used in req.body
 */
app.use(bodyParser.json());

/**
 *middleware sets and and encrypts cookie for 30 days
 */
app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 + 1000, 
        keys: [keys.cookieKey], 
    })
)

/**
 *middleware initiates passport to use cookies for OAuth
 */
app.use(passport.initialize())
app.use(passport.session())


require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);

/**
 * when in production, express serves production assets
 * if route is not recognized, express will serve index.html
 */
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));

    const path = require('path');
    app.get('*', (req,res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const PORT = process.env.PORT || 5000
app.listen(PORT)
