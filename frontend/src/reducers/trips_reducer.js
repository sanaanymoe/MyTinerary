import { RECEIVE_TRIP, RECEIVE_TRIPS } from '../actions/trip_actions'
 
export const tripReducer = (state={}, action)=> {
  //  debugger
     Object.freeze(state)
     const nextState = Object.assign({}, state)
      switch(action.type) {
         case RECEIVE_TRIP: 
            return nextState[action.trip.id] = action.trip
         case RECEIVE_TRIPS: 
            return action.trips
        default: 
        return state
      }
 }

 export default tripReducer
     
 