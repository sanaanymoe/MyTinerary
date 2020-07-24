import React from 'react'
import {
  Button,
  Nav,
  NavDropdown,
  Navbar,
  Form,
  FormControl,
} from "react-bootstrap";
import logo from '../logo_transparent.png'


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
      <div className="main-div">
        <div>
          <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#/"><img src={logo}></img></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="#/">Home</Nav.Link>
                {/* <Nav.Link href="#link">Link</Nav.Link>
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
                </NavDropdown> */}
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
            <h2>New Trip!</h2><br></br>
            <label>Title   
              <input
                type="text"
                name="title"
                onChange={this.handleTitleChange}
                className="title-entry-tab"
          
              />
            </label><br></br>
         
            <label>
              Departure City
              <input
                type="text"
                name="startLocation"
                onChange={this.handleFlightChange}
                className="flight-entry-tab"
              />
            </label> <br></br>
            <label>
              Destination City
              <input
                type="text"
                name="endLocation"
                onChange={this.handleFlightChange}
                className="flight-entry-tab"
              />
            </label><br></br>
            <label>
              Departure Date
              <input
                type="date"
                name="startDate"
                onChange={this.handleFlightChange}
                className="flight-entry-tab"
              />
            </label><br></br>
            <label>
              Return Date
              <input
                type="date"
                placeholder="date"
                name="endDate"
                onChange={this.handleFlightChange}
                className="flight-entry-tab"
              />
            </label><br></br>
            <Button variant="primary" type="submit">Enter</Button>{" "}
            
          </form>
        </div>
      </div>
    );
  }
}

export default Trip;