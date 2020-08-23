import React from 'react';
import NavBarContainer from "../nav/navbar";
import MyCalendarContainer from './calenderContainer'

class MainPage extends React.Component {

  render() {
    return (
      <div>
        {/* <h1>MyTinerary</h1> */}
        <NavBarContainer />
        <span className="calendar">
          <MyCalendarContainer />
        </span>
        {/* <MyCalendar /> */}
        <footer>Copyright &copy; 2020</footer>
      </div>
    );
  }
}

export default MainPage;