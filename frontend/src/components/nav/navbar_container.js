import { connect } from 'react-redux';
import { logout, login } from '../../actions/session_actions';

import NavBar from './navbar';
import { session } from 'passport';

const mapStateToProps = state => ({
  loggedIn: state.session.isAuthenticated,
  demoUser: {
    email: "mo@gmail.com",
    password: "mo12345"
  }
});

const mDTP = (dispatch) => ({
  logout: () => dispatch(logout()),
  login: (currentUser) => dispatch(login(currentUser))
});

export default connect(mapStateToProps, mDTP)(NavBar);