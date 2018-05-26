import axios from 'axios'
import { FETCH_USER } from './types'

/**
 * creates request to google OAuth to verify login
 * returns the googleId of user as payload
 */
    export const fetchUser = () => async dispatch => {
        const res = await axios.get('/api/current_user')
    
        dispatch({type: FETCH_USER, payload: res.data}) //res.data = googleID
    };

/**
 * Sends stripe token to backend server for payment verification
 */
    export const handleToken = token => async dispatch => {
        const res = await axios.post('/api/stripe', token);

        dispatch({type: FETCH_USER, payload: res.data})
    };