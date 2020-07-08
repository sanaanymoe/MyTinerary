import {RECEIVE_ALL_HOTELS  } from '../actions/housing_actions'

const housingReducer= (state = {}, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_ALL_HOTELS:
            return action.hotels 
        default:
            return state;
    }



}

export default housingReducer; 