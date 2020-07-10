import React from "react";
import { Link } from "react-router-dom";

class TripIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchTrips(this.props.currentUser.id);
  }

    render() { 
        debugger
        const trips = this.props.trips[0] || []
        return (
            <div>
                <ul>
                 {
                    trips.map(trip => (
                    <div>
                        <h3>{trip.title}</h3>
                        <h2>Flight</h2>
                        <ul>
                            <li>{trip.flight.startLocation}</li>
                            <li>{trip.flight.endLocation}</li>
                            <li>{trip.flight.startDate}</li>
                            <li>{trip.flight.endDate}</li>
                        </ul>
                        <h2>Hotel</h2>
                        <ul>
                            <li>{trip.housing.location}</li>
                            <li>{trip.housing.startDate}</li>
                            <li>{trip.housing.endDate}</li>
                        </ul>
                        <h2>Event</h2>
                        <ul>
                            <li>{trip.event.location}</li>
                            <li>{trip.event.date}</li>
                        </ul>
                    </div>
                    ))
                 }
                </ul>
            </div>
        )
    }
};

export default TripIndex;

{/* <li><Link to={`/api/trips/${trip.id}`}>{trip.title}</Link></li> */}

