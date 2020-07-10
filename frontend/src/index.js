import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import axios from 'axios'
import Root from './components/root';
import configureStore from './store/store';
import jwt_decode from 'jwt-decode';
import { setAuthToken } from './util/api/session_api_util';


import  {getHotels} from './actions/housing_actions'

import { logout, login, signup, receiveCurrentUser } from './actions/session_actions';
import { receiveTrips, makeTrip } from './actions/trip_actions';
import { receiveUsers } from './actions/user_actions';


document.addEventListener('DOMContentLoaded', () => {
  let store;

  // If a returning user has a session token stored in localStorage
  if (localStorage.jwtToken) {

    // Set the token as a common header for all axios requests
    setAuthToken(localStorage.jwtToken);

    // Decode the token to obtain the user's information
    const decodedUser = jwt_decode(localStorage.jwtToken);

    // Create a preconfigured state we can immediately add to our store
    const preloadedState = { session: { isAuthenticated: true, user: decodedUser } };

    store = configureStore(preloadedState);

    const currentTime = Date.now() / 1000;

    // If the user's token has expired
    if (decodedUser.exp < currentTime) {
      // Logout the user and redirect to the login page
      store.dispatch(logout());
      window.location.href = '/login';
    }
  } else {
    // If this is a first time user, start with an empty store
    store = configureStore({});
  }
  // Render our root component and pass in the store as a prop

  
  window.getHotels = getHotels;
  window.getState = store.getState


  const root = document.getElementById('root');
  
  ReactDOM.render(<Root store={store} />, root);

  window.axios = axios;
  window.store = store;
  window.login = login;
  window.signup = signup;
  window.dispatch = store.dispatch;
  window.currentUser = receiveCurrentUser;
  window.getTrips = receiveTrips;
  window.makeTrips = makeTrip;
  window.getUsers = receiveUsers;


});


// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );




