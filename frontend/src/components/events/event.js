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
        
      </div>
    )
  }
}

export default Event;