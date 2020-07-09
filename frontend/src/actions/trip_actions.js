import * as APIUtil from '../util/api/trip_api_util';

export const MAKE_TRIP = 'MAKE_TRIP';

export const createTrip = trip => ({
  type: MAKE_TRIP,
  trip
});

export const makeTrip = trip => dispatch => (
  APIUtil.makeTrip(trip).then(trip => (
    dispatch(createTrip(trip))
  ))
);