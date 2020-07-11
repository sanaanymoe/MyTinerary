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

displayDate(dates) {

  if (dates !== null) {
    let l = ''
    let d = dates.split("-")
    let month  = ""
    if (d[1] === '01' ){

   month = "Jan";

} else if(d[1]=== '02'){
     month = "Feb";
  
} else if(d[1]=== '03'){
     month = "Feb"
  
}else if(d[1]=== '04'){
     month = "Mar"
  
}else if(d[1]=== '05'){
     month = "Apr"
  
}else if(d[1]=== '06'){
    month = "May"
  
}else if(d[1]=== '07'){
     month = "Jun"
  
}else if(d[1]=== '08'){
     month = "Jul"
  
}else if(d[1]=== '09'){
    month = "Aug"
  
}else if(d[1]=== '10'){
     month = "Sep"
  

}else if(d[1]=== '11'){
     month = "Oct"
  
  
}else if(d[1]=== '11'){
    month = "Nov"
  
  
} else {

     month = "Dec"
} 
if (d[2] === '1') {
   l = "st"
}
  else if(d[2][0] === '2') {
     l =  'nd'
  
  }
  else if (d[2][0]=== '3'){
     l = 'rd'
  } else {
    l = 'th'
  }

  const dat = d[2]+l+ " " + month + " "+d[0]
   return dat
} 

  return null


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
      const { isVisible } = this.state;
      const trips = this.props.trips[0] || []
        //debugger
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
                  <Button
                    className="trip-btn"
                    variant="secondary"
                    id={trip._id}
                    onMouseOver={this.pointer}
                    onClick={this.changeVisibilty}
                  >
                    {trip.title}
                  </Button>
                  <div id={trip._id} className="trip-item">
                    <h2>Flight</h2>
                    <ul>

                        <li>{trip.flight.startLocation}</li>
                        <li>{trip.flight.endLocation}</li>
                 debugger
                        <li>{this.displayDate(trip.flight.startDate)}</li>
                        <li>{this.displayDate(trip.flight.endDate)}</li>
                    </ul>
                    <h2>Hotel</h2>
                    <ul>
                        <li>{trip.housing.location}</li>
                        <li>{this.displayDate(trip.housing.startDate)}</li>
                        <li>{this.displayDate(trip.housing.endDate)}</li>
                    </ul>
                    <h2>Event</h2>
                    <ul>
                        <li>{trip.event.location}</li>
                        <li>{this.displayDate(trip.event.date)}</li>

                      <li>from {trip.flight.startLocation} to {trip.flight.endLocation}</li>
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

