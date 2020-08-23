import React, { useReducer } from 'react'
import { AuthRoute, ProtectedRoute } from '../util/route_util'
import { Switch, Route, Link } from 'react-router-dom';
// import logo from './logo_transparent.png'
//import { AuthRoute, ProtectedRoute } from '../util/route_util'

// import MainPage from './main/main_page';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import NavBarContainer from './nav/navbar_container'
import TripContainer from './trips/trip_container'
import UserProfile from './users/user'
import TripIndexContainer from './trips/trip_index_container'
import TripIndexItem from './trips/trip_index_item_container'
import MainPage from './main/main_page'

const App = () => (
  <div>
    {/* <NavBarContainer /> */}
    <Switch>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <ProtectedRoute exact path="/new_trip" component={TripContainer} />
      {/* <ProtectedRoute exact path="/home" component={MainPage} /> */}
      <ProtectedRoute exact path="/trips" component={TripIndexContainer} />
      <ProtectedRoute exact path="/trips/:id" component={TripIndexItem} />
      <ProtectedRoute exact path="/UserProfile/:id" component={UserProfile} />
    </Switch>
    <Route exact path="/" component={NavBarContainer} />
  </div>
);

export default App;