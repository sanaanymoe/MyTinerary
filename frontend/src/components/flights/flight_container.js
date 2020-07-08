import connect from 'react-redux';
import { getflights } from '../../actions/flight_actions'

const mapStateToProps = state => {
    return {
        flights: state.entities.flights
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getflights: (begin, destination) => dispatch(getflights(begin, destination))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(flight.jsx)