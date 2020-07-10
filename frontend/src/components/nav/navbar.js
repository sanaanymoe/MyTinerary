import React from 'react';
import { Link } from 'react-router-dom'
//import './navbar.css'
import { Button, Nav, NavDropdown, Navbar, Form, FormControl } from "react-bootstrap";
class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
  }

  // Selectively render links dependent on whether the user is logged in
  getLinks() {
    if (this.props.loggedIn) {
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
          <div>
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
      );
    } else {
      return (
          
          <div className="login-signup-buttons">
            <Link to={"/signup"}>
              <Button variant="primary">Signup</Button>
              {"  "}
            </Link>
            <Link to={"/login"}>
              <Button variant="primary">Login</Button>
            </Link>
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