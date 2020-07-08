import { RECEIVE_ALL_ERRORS, REMOVE_ALL_ERRORS } from '../actions/error_actions'

const flightReducer = (state = {}, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_ALL_ERRORS:
            return action.errors 
        case REMOVE_ALL_ERRORS: 
            return {}
        default:
            return state;
    }



}

export default flightReducer; 