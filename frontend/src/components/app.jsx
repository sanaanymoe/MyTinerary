import React, { useReducer } from 'react'
import { AuthRoute, ProtectedRoute } from '../util/route_util'
import { Switch, Route, Link } from 'react-router-dom';
import logo from './logo_transparent.png'
//import { AuthRoute, ProtectedRoute } from '../util/route_util'

import MainPage from './main/main_page';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import NavBarContainer from './nav/navbar_container'
import TripContainer from './trips/trip_container'
import UserProfile from './users/user'


// import {Button} from 'react-bootstrap';
import TripIndexContainer from './trips/trip_index_container'
import TripIndexItem from './trips/trip_index_item_container'

const App = () => (
  <div>
    {/* <>
      <Button variant="primary">Primary</Button>{" "}
      <Button variant="secondary">Secondary</Button>{" "}
      <Button variant="success">Success</Button>{" "}
      <Button variant="warning">Warning</Button>{" "}
      <Button variant="danger">Danger</Button>{" "}
      <Button variant="info">Info</Button>{" "}
      <Button variant="light">Light</Button>{" "}
      <Button variant="dark">Dark</Button> <Button variant="link">Link</Button>
    </> */}
    {/* <NavBarContainer /> */}
    {/* <Link to="/">
      <img src={logo}></img>
    </Link> */}
    <Switch>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <ProtectedRoute exact path="/new_trip" component={TripContainer} />
      <ProtectedRoute exact path="/trips" component={TripIndexContainer} />
      <ProtectedRoute exact path="/trip" component={TripIndexItem} />
      <ProtectedRoute exact path="/home" component={NavBarContainer} />
      <ProtectedRoute exact path="/UserProfile/:id" component={UserProfile} />
    </Switch>
    <Route exact path="/" component={NavBarContainer} />
  </div>
);

export default App;