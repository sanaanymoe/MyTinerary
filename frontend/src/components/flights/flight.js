import React from 'react'
import FlightDetails from './flight_details'
class flight extends React.Component {

    constructor(props) {
        super(props)
        this.state = { AirportOrigin : "", Airportdestination : "", date :"", totalAdult :""}
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(type) {
        return e => this.setState({ [type]: e.target.value });
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.getFlights(this.state.AirportOrigin, this.state.Airportdestination, this.state.date, this.state.totalAdult)
    }

    render() {
        flights = this.props.flights
        return (
            <div>
                <form onSubmit={this.handleSubmit} className="flight-detail-entry">
                    <label>AirportOrigin
                     <input type="text" onChange={this.handleChange("AirportOrigin")} className="flight-entry-tab"/>
                    </label>

                    <label>Airportdestination
                         <input type="text" onChange={this.handleChange("Airportdestination")} className="flight-entry-tab"/>
                    </label>
                    <label>date :yy/mm/dd
                         <input type="date" onChange={this.handleChange("date")} className="flight-entry-tab"/>
                    </label>
                    <label>totalAdults
                         <input type="text" onChange={this.handleChange("totalAdults")} className="flight-entry-tab" />
                    </label>

                    <input type="submit" value= "Enter" />
                </form>

               if (flights){
                  <FlightDetails flights= {flights}/>
               }
            </div>
        )
    }
}

export default flight;