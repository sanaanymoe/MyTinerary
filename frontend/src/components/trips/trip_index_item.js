import React from 'react';


class TripIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchTrips(this.props.currentUser.id);
  }

  render() {
      const trip =  this.props.trips[0].filter(
        (trip) => trip._id === this.props.tripId)[0];
    // const { trip } = this.props;
    debugger;
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
          <li>{trip.housing.startDate}</li>
          <li>{trip.housing.endDate}</li>
          <li>{trip.housing.location}</li>
        </ul>
        <h2>Event</h2>
        <ul>
          <li>{trip.event.location}</li>
          <li>{trip.event.date}</li>
        </ul>
      </div>
    );
  }
}

export default TripIndexItem;