import { RECEIVE_TRIP, RECEIVE_TRIPS } from '../actions/trip_actions'
 
export const tripReducer = (state={}, action)=> {

     Object.freeze(state)
     const nextState = Object.assign({}, state)
      switch(action.type) {
         case RECEIVE_TRIP: 
            nextState[action.trip.id] = action.trip;
            return nextState
         case RECEIVE_TRIPS: 
            return action.trips
        default: 
        return state
      }
 }

 export default tripReducer
     
 