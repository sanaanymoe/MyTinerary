import { connect } from 'react-redux';
import { showTrip } from '../../actions/trip_actions';
import TripIndexItem from './trip_index_item';

const mSTP = state => {
  return {
    // trip: state.entities.trips[ownProps.match.params.id]
  }
}

const mDTP = dispatch => {
  return {
    // showTrip: (id) => dispatch(showTrip(id))
  };
};

export default connect(mSTP, mDTP)(TripIndexItem);