import {getFlights} from '../utils/api/flight_api_util'

export const RECEIVE_ALL_FLIGHTS = "RECEIVE_ALL_FLIGHTS"
export const


export const receiveAllFlights = flights => {
    return {
        Type: RECEIVE_ALL_FLIGHTS, 
        flights
    }
}

export const getFlight = (begin, destination) => (dispatch) => {
    return dispatch(getFlight(begin, destination))

}