import { connect } from 'react-redux';
import { fetchUserTrips } from '../../actions/trip_actions';
import { logout} from "../../actions/session_actions";
import TripIndex from './trip_index';


const mapStateToProps = state => {
    // debugger
    return {
        trips: Object.values(state.entities.trips),
        currentUser: state.session.user
    }
 
};


const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  fetchTrips: (id) => dispatch(fetchUserTrips(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TripIndex)