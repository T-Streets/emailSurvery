import React, { Component } from 'react';
import StripCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux'
import * as actions from '../Actions'

class Payments extends Component {
    render() {
        return(
            /**
             * Configures settings for Stripe checkout
             */
            <StripCheckout
                name='emailSurvey'
                description='$5 for 5 email credits' 
                amount={500}                            //sets price for $5 USD
                token={token => this.props.handleToken(token)}
                stripeKey={process.env.REACT_APP_STRIPE_KEY} 
            >
                <button className='btn'>Add Credits</button>
            </StripCheckout>
        );
    }
}

export default connect(null, actions)(Payments)