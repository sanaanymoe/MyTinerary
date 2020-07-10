import React from 'react'
import {
  Button,
  Nav,
  NavDropdown,
  Navbar,
  Form,
  FormControl,
} from "react-bootstrap";

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
      <div>
        <div className="main-div">
          <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">MyTinerary</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Form inline>
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Navbar>
        </div>
        <div className="trip-container">
          <form onSubmit={this.handleSubmit} className="flight-detail-entry">
            <h2>Trip Name</h2>
            <label>
              <input
                type="text"
                name="title"
                onChange={this.handleTitleChange}
                className="title-entry-tab"
              />
            </label>
            <h2>Flights</h2>
            <label>
              Departure City
              <input
                type="text"
                name="startLocation"
                onChange={this.handleFlightChange}
                className="flight-entry-tab"
              />
            </label>
            <label>
              Destination City
              <input
                type="text"
                name="endLocation"
                onChange={this.handleFlightChange}
                className="flight-entry-tab"
              />
            </label>
            <label>
              Departure Date
              <input
                type="date"
                name="startDate"
                onChange={this.handleFlightChange}
                className="flight-entry-tab"
              />
            </label>
            <label>
              Return Date
              <input
                type="date"
                name="endDate"
                onChange={this.handleFlightChange}
                className="flight-entry-tab"
              />
            </label>

            <h2>Hotels</h2>
            <label>
              Location
              <input
                type="text"
                name="location"
                onChange={this.handleHousingChange}
                className="hotel-details-input"
              ></input>
            </label>
            <label>
              Start Date
              <input
                type="date"
                name="startDate"
                onChange={this.handleHousingChange}
                className="hotel-details-input"
              ></input>
            </label>
            <label>
              End Date
              <input
                type="date"
                name="endDate"
                onChange={this.handleHousingChange}
                className="hotel-details-input"
              ></input>
            </label>

            <h2>Events</h2>
            <label>
              Location
              <input
                type="text"
                name="location"
                onChange={this.handleEventChange}
                className="event-entry-tab"
              />
            </label>
            <label>
              Date
              <input
                type="date"
                name="date"
                onChange={this.handleEventChange}
                className="event-entry-tab"
              />
            </label>
            <input type="submit" value="Enter" />
          </form>
        </div>
      </div>
    );
  }
}

export default Trip;