import React from 'react';


class TripIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount(){
        this.props.fetchTrips(this.props.currentUser.id)
    }

    render() {
        debugger
        
        return (
            <div>
                {
                    this.props.trips.map(trip => (
                        trip.title
                    ))

                }
            </div>
        )
    }
};

export default TripIndex;