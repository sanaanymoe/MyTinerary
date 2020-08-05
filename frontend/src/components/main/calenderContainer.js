import { connect } from 'react-redux';
import { getUserTrips } from '../../util/api/trip_api_util';
import MyCalendar from "./calendar";
import {fetchUserTrips} from '../../actions/trip_actions'
const mstp = (state) => {
    return {
      trips: Object.values(state.entities.trips),
      id: state.session.user.id,
    };
}

 const mdtp = dispatch => {
     debugger
    return {
    //   getTrips: (id) => dispatch(getUserTrips(id)),
      fetchTrips: (id) => dispatch(fetchUserTrips(id))
    };
}

export default connect(mstp, mdtp)(MyCalendar);