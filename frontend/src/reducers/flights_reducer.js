import {RECEIVE_ALL_FLIGHTS} from '../actions/flight_actions'

const flightReducer = (state = {}, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_ALL_FLIGHTS:
            return action.flights
        default:
            return state;
    }



}

export default flightReducer; 