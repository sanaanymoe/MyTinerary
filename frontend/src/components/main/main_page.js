import React from 'react';
import NavBarContainer from "../nav/navbar";

class MainPage extends React.Component {

  render() {
    return (
      <div>
        {/* <h1>MyTinerary</h1> */}
        <NavBarContainer />;
        <footer>Copyright &copy; 2020</footer>
      </div>
    );
  }
}

export default MainPage;