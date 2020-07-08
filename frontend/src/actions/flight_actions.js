import  {getFlights} from '../utils/api/flight_api_util'
import * as errors from './error_actions'


export const RECEIVE_ALL_FLIGHTS = "RECEIVE_ALL_FLIGHTS"

export const receiveAllFlights = flights => {
    return {
        type: RECEIVE_ALL_FLIGHTS,
        flights
    }
}



export const getFlights = (AirportOrigin, Airportdestination, date, totalAdult) => (dispatch) => {
    return getFlights(AirportOrigin, Airportdestination, date, totalAdult)
    .then (flights => dispatch(receiveAllFlights(flights), (err)=> dispatch(errors.receiveAllErrors(err))))}