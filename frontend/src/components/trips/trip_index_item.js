import React from 'react';

import { Link } from "react-router-dom";
import {
  Button,
  Nav,
  NavDropdown,
  Navbar,
  Form,
  FormControl,
} from "react-bootstrap";
import logo from "../logo_transparent.png";


class TripIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this)
  }

  componentDidMount() {
    this.props.fetchTrips(this.props.currentUser.id);
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
  }

  render() {
    const trip = this.props.trips[0].filter(
      (trip) => trip._id === this.props.tripId
    )[0];
    // const { trip } = this.props;
    // debugger;
    return (
      <div>
        <div className="main-div">
          <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#/">
              <img src={logo}></img>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="#/">Home</Nav.Link>
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
        <div className="sub-main">
          <div className="buttons">
            <Link to={"/trips"}>
              <Button variant="primary">My Trips</Button>{" "}
            </Link>
            <Link to={"/profile"}>
              <Button variant="secondary">Profile</Button>{" "}
            </Link>
            <Link to={"/new_trip"}>
              <Button variant="success">New Trip</Button>{" "}
            </Link>
            <Button onClick={this.logoutUser} variant="danger">
              Logout
            </Button>{" "}
          </div>
        </div>
        <div className="trip-container">
          <h1>{trip.title}</h1>
          <h2>Flight</h2>
          <ul>
            <li>From: {trip.flight.startLocation}</li>
            <li>To: {trip.flight.endLocation}</li>
            <li>Departure date: {trip.flight.startDate}</li>
            <li>Return date: {trip.flight.endDate}</li>
          </ul>
          <h2>Hotel</h2>
          <ul>
            <li>Start date: {trip.housing.startDate}</li>
            <li>End date: {trip.housing.endDate}</li>
            <li>Hotel name: {trip.housing.location}</li>
          </ul>
          <h2>Event</h2>
          <ul>
            <li>{trip.event.location}</li>
            <li>{trip.event.date}</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default TripIndexItem;