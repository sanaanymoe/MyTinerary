import React from 'react'
import FlightDetails from './flight_details'
class flight extends React.Component {

    constructor(props) {
        super(props)
        this.state = { startLocation: "", endLocation: "", startDate : "", endDate: "", price: "", bookingUrl: ""}

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(type) {
        return e => this.setState({ [type]: e.target.value });
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.getFlights(this.state)
    }
    render() {
        flights = this.props.flights
        return (
            <div>
                <form onSubmit={this.handleSubmit} className="flight-detail-entry">
                    <label>startLocation
                     <input type="text" onChange={this.handleChange("startLocation")} className="flight-entry-tab"/>
                    </label>

                    <label>endLocation
                         <input type="text" onChange={this.handleChange("endLocation")} className="flight-entry-tab"/>
                    </label>
                    <label>startDate
                         <input type="date" onChange={this.handleChange("startDate")} className="flight-entry-tab"/>
                    </label>
                    <label>endDate
                         <input type="date" onChange={this.handleChange("endDate")} className="flight-entry-tab"/>
                    </label>
                    <label>price
                         <input type="string" onChange={this.handleChange("price")} className="flight-entry-tab" />
                    </label>
                    <label> bookingUrl
                         <input type="text" onChange={this.handleChange(" bookingUrl")} className="flight-entry-tab" />
                    </label>
                    
                    <button type="submit"> Enter </button>
                </form>

               if (flights){
                  <FlightDetails flights= {flights}/>
               }
            </div>
        )
    }
}

export default flight;