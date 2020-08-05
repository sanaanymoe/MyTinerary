import React from 'react';
import NavBarContainer from "../nav/navbar";
import MyCalendar from './calendar'

class MainPage extends React.Component {

  render() {
    return (
      <div>
        {/* <h1>MyTinerary</h1> */}
        <NavBarContainer />;
        {/* <MyCalendar /> */}
        <footer>Copyright &copy; 2020</footer>
      </div>
    );
  }
}

export default MainPage;