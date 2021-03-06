import React from 'react';
import { Link, Redirect } from 'react-router-dom'
import logo from '../logo_transparent.png'
//import './navbar.css'
import { Button, Nav, NavDropdown, Navbar, Form, FormControl } from "react-bootstrap";
import MyCalendarContainer from "../main/calenderContainer";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
    this.demoLoginHandler = this.demoLoginHandler.bind(this);
  }


  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
  }

  demoLoginHandler(event) {
    event.preventDefault();
    this.props.login(this.props.demoUser);
  }

  // Selectively render links dependent on whether the user is logged in
  getLinks() {
    if (this.props.loggedIn) {
      debugger
      return (
        <div>
        {/* <Redirect to="/home"/> */}
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
            <span className="calendar">
              <MyCalendarContainer />
            </span>
          </div>
        </div>
      );
    } else {
      debugger
      return (
        <div className="login-signup-buttons">
          <Navbar.Brand href="#/">
            <img src={logo}></img>
          </Navbar.Brand>
          <h1>Welcome to MyTinerary </h1>
          <h1>Signup/Login and let us plan your Trip</h1>
          <div>
            <Link to={"/signup"}>
              <Button variant="primary">Signup</Button>
              {"  "}
            </Link>
            <Link to={"/login"}>
              <Button variant="primary">Login</Button>
            </Link>
            <Button variant="primary" onClick={this.demoLoginHandler}>
              Demo User
            </Button>
          </div>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        {/* <h1>MyTinerary</h1> */}
        
        {this.getLinks()}
      </div>
    );
  }
}

export default NavBar;