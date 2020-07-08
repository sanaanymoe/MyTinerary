import React from 'react'; 
import {Link} from 'react-router-dom'
class FlightDetails extends React.Component {
    constructor(props){
        super(props)
    }


    render(){
    const Flightbook = this.props.flights.search_url
    const flightInfo = this.props.flights.airports
        return(
            <Link to = {Flightbook}>Go to flight book</Link>
        )
    }
}
