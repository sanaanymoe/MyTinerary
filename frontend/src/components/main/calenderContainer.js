import { connect } from 'react-redux';
import { getUserTrips } from '../../util/api/trip_api_util';
import  Calender from './calendar'
const mapst = (state) => {
    return {
        id : state.session.user.id
    }
}

 const mapdt = dispatch => {
    return {
        getTrips : (id )=> dispatch(getUserTrips(id))
    }
}

export default connect(mapst, mapdt)(Calender)