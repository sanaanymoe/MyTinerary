import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Nav,
  NavDropdown,
  Navbar,
  Form,
  FormControl,
} from "react-bootstrap";

class TripIndex extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isVisible: false
        };
    }

  componentDidMount() {
    this.props.fetchTrips(this.props.currentUser.id);
  }

changeVisibilty = (e) => {
    const item = document.getElementsByClassName('trip-item')
    Array.from(item).forEach((trip) => {if(e.currentTarget.id === trip.id){
        trip.classList.toggle('hidden')
        }
    })
}
    
    pointer = e => {
        
    }

    render() { 
        //debugger
        const { isVisible } = this.state;
        const trips = this.props.trips[0] || []         
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
                      <NavDropdown.Item href="#action/3.1">
                        Action
                      </NavDropdown.Item>
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
            <div className="grid-container">
              {trips.map((trip) => (
                  <div className="trip-index">
                    <h3 id={trip.title} onMouseOver={this.pointer} onClick={this.changeVisibilty}>{trip.title}</h3>
                    <div id={trip.title} className="trip-item">
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
                </div>
              ))}
            </div>
          </div>
        );
    }
};

export default TripIndex;

{/* <li><Link to={`/api/trips/${trip.id}`}>{trip.title}</Link></li> */}

