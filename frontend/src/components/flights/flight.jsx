import React from 'react'

class flight extends React.Component {

    constructor(props) {
        super(props)
        this.state = { begin: "", Destination: "" }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(type) {
        return e => this.setState({ [type]: e.target.value });
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.getFlights(this.state.begin, this.state.Destination)
    }

    render() {
        flights = this.props.flights
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Begin
                     <input type="text" onChange={this.handleChange("begin")} />
                    </label>

                    <label>Destination
                     <input type="text" onChange={this.handleChange("Destination")} />
                    </label>
                    <input type="submit" value="Enter" />
                </form>

               if (flights){
                  <div> {flight.time}</div>
               }
            </div>
        )
    }
}

export default flight;