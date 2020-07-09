import React from 'react'

import FlightContainer from '../flights/flight'
import HouseContainer from '../housing/house'
import EventContainer from '../events/event'

class Trip extends React.Component {

  render() {
    return (
      <div className='trip-container'>
        {<FlightContainer />}
        {<HouseContainer />}
        {<EventContainer />}
      </div>
    )
  }
}

export default Trip;