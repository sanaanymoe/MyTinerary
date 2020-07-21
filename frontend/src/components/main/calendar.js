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
  }


handleEventDrop(){

}
  render() {
    return <FullCalendar
      defaultView="dayGridMonth"
      plugins={[dayGridPlugin, interactionPlugin]}
      editable={true}
      eventDrop={this.handleEventDrop}
      dateClick={this.handleDateClick}
      
    />
  }
}

