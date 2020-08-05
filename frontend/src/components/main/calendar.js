// import React, { Component } from "react";
// // import BigCalendar from "react-big-calendar";
// import { Calendar, momentLocalizer } from "react-big-calendar";
// import moment from "moment";

// const localizer = BigCalendar.momentLocalizer(moment);
// export default class BookingCalendar extends Component {
//                  setDates = () => {
//                    const events = [];
//                    this.props.events.map((event) => {
//                      return events.push({
//                        start: new Date(event.start),
//                        end: new Date(event.end),
//                        title: `${event.pet_name} Stay (Human: ${event.human_name})`,
//                        allDay: true,
//                      });
//                    });
//                    return events;
//                  };

//                  render() {
//                    return (
//                      <div className="calendar-container">
//                        <BigCalendar
//                          localizer={localizer}
//                          events={this.setDates()}
//                          startAccessor="start"
//                          endAccessor="end"
//                        />
//                      </div>
//                    );
//                  }
//                }

// import React from 'react'
// import { Calendar, momentLocalizer } from "react-big-calendar";
// import moment from "moment";

// const localizer = momentLocalizer(moment);

// const MyCalendar = (props) => (
//   <div>
//     <Calendar
//       localizer={localizer}
//     //   events={myEventsList}
//       startAccessor="start"
//       endAccessor="end"
//       style={{ height: 500 }}
//     />
//   </div>
// );

// export default MyCalendar;

import React, { Component } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import { useHistory} from 'react-router-dom';

export default class MyCalendar extends Component {
  // declare any necessary functions such as handleDateClick, etc.
  constructor(props){
    super(props)
    this.handleEventClick = this.handleEventClick.bind(this)
  }

  componentDidMount() {
    this.props.fetchTrips(this.props.id);
  }

handleDateClick = (arg) => { 
    alert(arg.dateStr)
  }

handleEventClick = (e) => { 
  debugger
    alert(e.event.title + "\n" + e.event.startStr+ "\n" + e.event.endStr);
    // console.log(e.currentTarget)
  }

handleEventDrop(){

}

  render() {
    // return <FullCalendar
    //   defaultView="dayGridMonth"
    //   plugins={[dayGridPlugin, interactionPlugin]}
    //   editable={true}
    //   eventDrop={this.handleEventDrop}
    //   dateClick={this.handleDateClick}
      
    // />
debugger
if (this.props.trips.length === 0){
  return <></>
}else {
    const arr = [];
    this.props.trips[0].forEach(trip => {
      if (trip.flight.startDate){
        // var obj = {title: "", date: ""}
        let title = "flight";
        let date = trip.flight.startDate;
        let endDate = trip.flight.endDate;
        let carrier = trip.flight.carrier;
        let airPort = trip.flight.startLocation;
        let destination = trip.flight.endLocation;
        arr.push({title: title, date: date, carrier: carrier, airPort: airPort, destination: destination, end: endDate})
        title = "event";
        date = trip.event.date;
        arr.push({title: title, date: date})
        debugger
      }
    });
    // const title = this.props.trips[0][11].title;
    // const date = this.props.trips[0][11].flight.startDate;
    // console.log(date)
    return (

      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        dateClick={this.handleDateClick}
        eventClick={this.handleEventClick}
        initialView="dayGridMonth"
        weekends={true}
        // events={[
        //   { title: title, date: date },
        //   // { title: "Arriving", date: "2020-08-23" },
        // ]}
        events = { arr }
      />
    );
  }
    
  }
}

