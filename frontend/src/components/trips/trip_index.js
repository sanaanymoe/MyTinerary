import React from 'react';
import { Link } from 'react-router-dom'


class TripIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount(){
        this.props.fetchTrips(this.props.currentUser.id)
        
    }

    render() { 
        const trips = this.props.trips[0] || []
        return (
            <div>
                <ul>
                 {
                    trips.map(trip => (
                        <li><Link to={`/api/trips/${trip.id}`}>{trip.title}</Link></li>
                    ))
                 }
                </ul>
            </div>
        )
    }
};

export default TripIndex;
