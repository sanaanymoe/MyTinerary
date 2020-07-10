import React from 'react'

// import FlightContainer from '../flights/flight'
// import HouseContainer from '../housing/house'
// import EventContainer from '../events/event'

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
      housing: {
        location: '',
        startDate: '',
        endDate: ''
      },
      event: {
        location:'',
        date:''
      }
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTitleChange = e => {
    this.state.title = e.target.value;
  }

  handleFlightChange = e => {
    // console.log(e.target)
    //console.log(e.target.name)
    // console.log(this.state)
    this.state.flight[e.target.name] = e.target.value
  }
  
  handleHousingChange = e => {
    this.state.housing[e.target.name] = e.target.value
  }
  
  handleEventChange = e => {
    this.state.event[e.target.name] = e.target.value
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
          <h2>Trip Name</h2>
          <label>
            <input type="text" name='title' onChange={this.handleTitleChange} className="title-entry-tab" />
          </label>
          <h2>Flights</h2>
          <label>Departure City
            <input type="text" name='startLocation' onChange={this.handleFlightChange} className="flight-entry-tab" />
          </label>
          <label>Destination City
            <input type="text" name='endLocation' onChange={this.handleFlightChange} className="flight-entry-tab" />
          </label>
          <label>Departure Date
            <input type="date" name='startDate' onChange={this.handleFlightChange} className="flight-entry-tab" />
          </label>
          <label>Return Date
            <input type="date" name='endDate' onChange={this.handleFlightChange} className="flight-entry-tab" />
          </label>
          
          <h2>Hotels</h2>
          <label>Location
            <input type="text" name= "location" onChange={this.handleHousingChange} className="hotel-details-input"></input>
          </label>
          <label>Start Date
            <input type="date" name= "startDate" onChange={this.handleHousingChange} className="hotel-details-input"></input>
          </label>
          <label>End Date
            <input type="date" name= "endDate" onChange={this.handleHousingChange} className="hotel-details-input"></input>
          </label>

          <h2>Events</h2>
          <label>Location
            <input type="text" name='location' onChange={this.handleEventChange} className="event-entry-tab" />
          </label>
          <label>Date
            <input type="date" name='date' onChange={this.handleEventChange} className="event-entry-tab" />
          </label>
          <input type="submit" value="Enter" />
        </form>
      </div>
    )
  }
}

export default Trip;