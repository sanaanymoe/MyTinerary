import React from 'react'

class Event extends React.Component {

  constructor(props) {
    super(props)
    this.state = { AirportOrigin: "", Airportdestination: "", date: "", totalAdult: "" }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(type) {
    return e => this.setState({ [type]: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.getFlights(this.state.AirportOrigin, this.state.Airportdestination, this.state.date, this.state.totalAdult)
  }

  render() {
    return (
      <div>
        <h2>Events</h2>
        <form onSubmit={this.handleSubmit} className="event-detail-entry">
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

export default Event;