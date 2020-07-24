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

export const makeTrip = trip => dispatch => {
  // debugger
  return (
  APIUtil.makeTrip(trip).then(trip => (
    dispatch(receiveTrip(trip))
  )))
};

export const fetchTrips = () => dispatch => (
  APIUtil.getTrips()
    .then(trips => dispatch(receiveTrips(trips)))
    .catch(err => console.log(err))
);

export const fetchUserTrips = (id) => dispatch => {
  return (
    APIUtil.getUserTrips(id)
      .then(trips => dispatch(receiveTrips(trips)))
      .catch(err => console.log(err))
  )
}

// export const showTrip = (id) => dispatch => {
//   return (
//     APIUtil.getTrip(id)
//       .then(trip => dispatch(displayTrip(trip)))
//   )
// }