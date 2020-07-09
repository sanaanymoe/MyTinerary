import { connect } from 'react-redux';
import { makeTrip } from '../../actions/trip_actions';
import Trip from './trip';

const mSTP = state => {
  return {
    
  }
}

const mDTP = dispatch => {
  return {
    makeTrip: (trip) => dispatch(makeTrip(trip)),
  };
};

export default connect(mSTP, mDTP)(Trip);