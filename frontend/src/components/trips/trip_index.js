import React from 'react';
import { Link } from 'react-router-dom'


class TripIndex extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isVisible: false
        };
    }

    componentDidMount(){
        this.props.fetchTrips(this.props.currentUser.id)
        
    }

    changeVisibilty = (e) => {
        const item = document.getElementsByClassName('trip-index-item')
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
            <div className="trip-index">
                 {
                    trips.map(trip => (
                       <> 
                        <h2 id={trip.title} onMouseOver={this.pointer} onClick={this.changeVisibilty}>{trip.title}</h2>
                        <div id={trip.title} className="trip-index-item">
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
                        </>
                    ))
                 }
            </div>
        )
    }
};

export default TripIndex;

{/* <li><Link to={`/api/trips/${trip.id}`}>{trip.title}</Link></li> */}

