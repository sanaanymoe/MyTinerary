import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import LoginForm from './login_form';
import { removeAllErrors } from '../../actions/error_actions'

const mapStateToProps = (state) => {
  return {
    errors: state.errors.session,
    demoUser: {
      email: "mo@gmail.com",
      password: "mo12345"
    }
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: user => dispatch(login(user)),
    removeErrors: () => dispatch(removeAllErrors())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);