import axios from 'axios'
import { FETCH_USER } from './types'

/**
 * creates request to google OAuth
 * returns the googleId of user as payload
 */
    export const fetchUser = () => async dispatch => {
        const res = await axios.get('/api/current_user')
    
    dispatch({type: FETCH_USER, payload: res.data}) //res.data = googleID
    };

    export const handleToken