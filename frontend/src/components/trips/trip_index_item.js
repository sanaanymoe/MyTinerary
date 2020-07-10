import React from 'react';


class TripIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {trip} = this.props
        return (
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
        )
    }
}

export default TripIndexItem;