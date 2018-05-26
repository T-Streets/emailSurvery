const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);

/** 
*Accepts credit card info of user for billing
*Creates charge to bill users credit card
*/
module.exports = app => {
    app.post('/api/stripe', (req, res) => {
        stripe.charges.create({
            amount: 500,
            currency: 'usd',
            description: '$5 for 5 credits',
            source: req.body.id
        })
    });
};