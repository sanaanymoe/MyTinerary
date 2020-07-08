import React from 'react'
<<<<<<< Updated upstream
import { Route } from 'react-router-dom'
import { AuthRoute, ProtectedRoute } from '../util/route_util'
=======
//import { Route } from 'react-router-dom'
import { AuthRoute, ProtectedRoute } from '../util/route_util'
import { Switch } from 'react-router-dom';
>>>>>>> Stashed changes

import MainPage from './main/main_page';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import NavBarContainer from './nav/navbar_container'

const App = () => (
  <div>
    <NavBarContainer />
    <Switch>
      <AuthRoute exact path="/" component={MainPage} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
    </Switch>
  </div>
);

export default App;