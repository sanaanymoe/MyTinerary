import React from 'react'

import FlightContainer from '../flights/flight'
import HouseContainer from '../housing/house'
import EventContainer from '../events/event'

class Trip extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flight: {
        startLocation: '',
        endLocation: '',
        startDate: '',
        endDate: ''
      },
      housing: {},
      events: {}
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(type) {
    return e => this.setState({ flight: { [type]: e.target.value } });
  }

  handleSubmit(e) {
    e.preventDefault();
    const trip = Object.assign({}, this.state);
    this.props.makeTrip(trip)
  }

  render() {
    return (
      <div className='trip-container'>
        <form onSubmit={this.handleSubmit} className="flight-detail-entry">
          <h2>Flights</h2>
          <label>Departure City
            <input type="text" onChange={this.handleChange("startLocation")} className="flight-entry-tab" />
          </label>
          <label>Destination City
            <input type="text" onChange={this.handleChange("endLocation")} className="flight-entry-tab" />
          </label>
          <label>Departure Date
            <input type="date" onChange={this.handleChange("startDate")} className="flight-entry-tab" />
          </label>
          <label>Return Date
            <input type="date" onChange={this.handleChange("endDate")} className="flight-entry-tab" />
          </label>
          
          <h2>Hotels</h2>
          <label>Location
            <input type="text" onChange={this.handleChange("housing")} className="hotel-details-input"></input>
          </label>
          <label>Start Date
            <input type="date" onChange={this.handleChange("housing")} className="hotel-details-input"></input>
          </label>
          <label>End Date
            <input type="date" onChange={this.handleChange("housing")} className="hotel-details-input"></input>
          </label>

          <h2>Events</h2>
          <label>Location
            <input type="text" onChange={this.handleChange("location")} className="event-entry-tab" />
          </label>
          <label>Date
            <input type="date" onChange={this.handleChange("date")} className="event-entry-tab" />
          </label>
          <input type="submit" value="Enter" />
        </form>
      </div>
    )
  }
}

export default Trip;