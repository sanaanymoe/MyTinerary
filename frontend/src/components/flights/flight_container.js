import connect from 'react-redux';
import { getflights } from '../../actions/flight_actions'

const mapStateToProps = state => {
    return {
        flights: state.entities.flights
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getflights: (AirportOrigin, Airportdestination, date, totalAdult) => dispatch(getflights(AirportOrigin, Airportdestination, date, totalAdult))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(flight.jsx)