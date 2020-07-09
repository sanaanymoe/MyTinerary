import { connect } from 'react-redux';
import Flight from './flight'
// import { getFlights } from '../../actions/flight_actions'

const mapStateToProps = state => {
    return {
       // flights: state.entities.flights
    }
}

const mapDispatchToProps = dispatch => {
    return {
        // getflights: (AirportOrigin, Airportdestination, date, totalAdult) => dispatch(getFlights(AirportOrigin, Airportdestination, date, totalAdult))

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Flight)