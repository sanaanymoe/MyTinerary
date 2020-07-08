import {getHousing} from '../util/api/home_api_util'
import * as errors from './error_actions'


export const RECEIVE_ALL_HOTELS = "RECEIVE_ALL_HOTELS"

export const receiveAllHotels = hotels => {
    return {
        type: RECEIVE_ALL_HOTELS,
        hotels
    }
}



export const getHotels = (checkInDate, rooms, nights, totalGuest, locationId) => (dispatch) => {
    return getHousing(checkInDate, rooms, nights, totalGuest, locationId)
        .then(hotels => dispatch(receiveAllHotels(hotels), (err) => dispatch(errors.receiveAllErrors(err))))
}