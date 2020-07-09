import React from 'react'

import FlightContainer from '../flights/flight'
import HouseContainer from '../housing/house'
import EventContainer from '../events/event'

class Trip extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
      
  handleChange(type) {
    return e => this.setState({ [type]: e.target.value });
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
          <label>Start Location
            <input type="text" onChange={this.handleChange("startLocation")} className="flight-entry-tab" />
          </label>
          <label>End Location
            <input type="text" onChange={this.handleChange("endLocation")} className="flight-entry-tab" />
          </label>
          <label>Start Date
            <input type="date" onChange={this.handleChange("startDate")} className="flight-entry-tab" />
          </label>
          <label>End Date
            <input type="date" onChange={this.handleChange("endDate")} className="flight-entry-tab" />
          </label>
          <label>Price
            <input type="string" onChange={this.handleChange("price")} className="flight-entry-tab" />
          </label>
          <label> Booking Url
            <input type="text" onChange={this.handleChange(" bookingUrl")} className="flight-entry-tab" />
          </label>

          <h2>Hotels</h2>
          <label>Location
            <input type="text" className="hotel-details-input"></input>
          </label>
          <label>Price
            <input type="text" className="hotel-details-input"></input>
          </label>
          <label>Start Date
            <input type="date" className="hotel-details-input"></input>
          </label>
          <label>End Date
            <input type="date" className="hotel-details-input"></input>
          </label>

          <h2>Events</h2>
          <label>Location
            <input type="text" onChange={this.handleChange("location")} className="event-entry-tab" />
          </label>
          <label>Price
            <input type="text" onChange={this.handleChange("price")} className="event-entry-tab" />
          </label>
          <label>Start Date
            <input type="date" onChange={this.handleChange("startDate")} className="event-entry-tab" />
          </label>
          <label>End Date
            <input type="date" onChange={this.handleChange("endDate")} className="event-entry-tab" />
          </label>
          <input type="submit" value="Enter" />
        </form>
      </div>
    )
  }
}

export default Trip;