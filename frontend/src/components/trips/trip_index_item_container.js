import { connect } from 'react-redux';
import { showTrip, fetchUserTrips } from '../../actions/trip_actions';
import { logout } from "../../actions/session_actions";
import TripIndexItem from './trip_index_item';


const mSTP = (state, ownProps) => {
  // debugger
  return {
    currentUser: state.session.user,
    trips: Object.values(state.entities.trips),
    tripId: ownProps.match.params.id
    // trip: Object.values(state.entities.trips)[0].filter(
    //   (trip) => trip._id === ownProps.match.params.id
    // )[0]
    // trip: state.entities.trips[ownProps.match.params.id]
  };
}

const mDTP = dispatch => {
  return {
    logout: () => dispatch(logout()),
    fetchTrips: (id) => dispatch(fetchUserTrips(id)),
    showTrip: (id) => dispatch(showTrip(id)),
  };
};

export default connect(mSTP, mDTP)(TripIndexItem);