import * as APIUtil from '../util/api/trip_api_util';

export const RECEIVE_TRIP = 'RECEIVE_TRIP';
export const RECEIVE_TRIPS = 'RECEIVE_TRIPS';

export const receiveTrip = trip => ({
  type: RECEIVE_TRIP,
  trip
});
export const receiveTrips = trips => ({
  type: RECEIVE_TRIPS,
  trips
});

export const makeTrip = trip => dispatch => (
  APIUtil.makeTrip(trip).then(trip => (
    dispatch(receiveTrip(trip))
  ))
);