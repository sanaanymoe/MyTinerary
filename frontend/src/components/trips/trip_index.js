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
import logo from "../logo_transparent.png";

import MyCalendarContainer from '../main/calenderContainer'
import NavBarContainer from "../nav/navbar_container";

class TripIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
    };
    this.logoutUser = this.logoutUser.bind(this)
  }

  componentDidMount() {
    this.props.fetchTrips(this.props.currentUser.id);
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
  }

  displayDate(dates) {
    if (!!dates) {
      let l = "";
      console.log(dates);
      let d = dates.split("-");
      let month = "";

      if (d[1] === "01") {
        month = "Jan";
      } else if (d[1] === "02") {
        month = "Feb";
      } else if (d[1] === "03") {
        month = "Mar";
      } else if (d[1] === "04") {
        month = "Apr";
      } else if (d[1] === "05") {
        month = "May";
      } else if (d[1] === "06") {
        month = "Jun";
      } else if (d[1] === "07") {
        month = "Jul";
      } else if (d[1] === "08") {
        month = "Aug";
      } else if (d[1] === "09") {
        month = "Sep";
      } else if (d[1] === "10") {
        month = "Oct";
      } else if (d[1] === "11") {
        month = "Nov";
      } else {
        month = "Dec";
      }

      if (d[2] === "1") {
        l = "st";
      } else if (d[2][0] === "2") {
        l = "nd";

        const dat = month + " " + d[2][0] + 1 + " " + d[0];
        return dat;
      }
      return "";
    }
  }

  changeVisibilty = (e) => {
    const item = document.getElementsByClassName("trip-item");
    Array.from(item).forEach((trip) => {
      if (e.currentTarget.id === trip.id) {
        trip.classList.toggle("hidden");
      }
    });
  };

  pointer = (e) => {};

  render() {
    const { isVisible } = this.state;
    if (!this.props.trips[0]) {
      // debugger
      return null;
    } else {
      const trips = this.props.trips[0];
      // debugger
      return (
        <div>
          <div className="main-div">
            {/* <NavBarContainer /> */}

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
            {trips.map((trip) => (
              <div className="trip-index">
                <Link to={`/trips/${trip._id}`}>
                  {/* <Button
                      className="trip-btn"
                      variant="secondary"
                      id={trip._id}
                      onMouseOver={this.pointer}
                      onClick={this.changeVisibilty}
                    > */}
                  <h2>{trip.title}</h2>
                  {/* </Button> */}
                </Link>

                <div id={trip._id} className="trip-item">
                  <h2>Flight</h2>
                  <ul>
                    <li>
                      {trip.flight.startLocation} to {trip.flight.endLocation}
                    </li>
                    <li>{this.displayDate(trip.flight.startDate)}</li>
                    <li>{this.displayDate(trip.flight.endDate)}</li>
                    <li>{trip.flight.carrier}</li>
                  </ul>
                  <h2>Hotel</h2>
                  <ul>
                    <li>{trip.housing.location}</li>
                    {/* <li>{this.displayDate(trip.housing.startDate)}</li>
                        <li>{this.displayDate(trip.housing.endDate)}</li> */}
                  </ul>
                  <h2>Event</h2>
                  <ul>
                    <li>{trip.event.location}</li>
                    {/* <li>{this.displayDate(trip.event.date)}</li> */}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }
  }
}

export default TripIndex;


