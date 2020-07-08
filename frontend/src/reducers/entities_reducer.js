import { combineReducers } from 'redux';

import usersReducer from './users_reducer';
import flightsReducer from './flights_reducer';
import eventsReducer from './events_reducer';
import housingReducer from './housing_reducer';
import tripsReducer from './trips_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  flights: flightsReducer,
  events: eventsReducer,
  housing: housingReducer,
  trips: tripsReducer
})

export default entitiesReducer