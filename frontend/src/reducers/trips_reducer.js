import {RECEIVE_TRIP} from '../actions/trip_actions'
 export const tripReducer = (state={}, action)=> {
     Object.freeze(state)
     nextState = Object.assign({}, state)
      switch(action.type) {
         case RECEIVE_TRIP: 
            return nextState.action.trip.id = action.trip
         case RECEIVE_TRIPS: 
            return action.trips
        default: 
        return state

      }
 }

 export default tripReducer
     
 