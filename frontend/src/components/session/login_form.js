import React from 'react';
import { Link } from "react-router-dom";
import { withRouter } from 'react-router-dom';
import { Button } from "react-bootstrap";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.demoLoginHandler = this.demoLoginHandler.bind(this)
  }

  // Once the user has been authenticated, redirect to the trip page
  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser === true) {
      this.props.history.push('/trips');
    }

    // Set or clear errors
    this.setState({ errors: nextProps.errors })
  }

  // Handle field updates (called in the render method)
  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  // Handle form submission
  handleSubmit(e) {
    e.preventDefault();

    let user = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.login(user);
  }

  demoLoginHandler(event) {
    event.preventDefault();
    this.props.login(this.props.demoUser);
  }

  // Render the session errors if there are any
  renderErrors() {
    return (
      <ul>
        {Object.keys(this.state.errors).map((error, i) => (
          <li key={`error-${i}`}>
            {this.state.errors[error]}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit}>
          <div className="login-form">
            <input
              type="text"
              value={this.state.email}
              onChange={this.update("email")}
              placeholder="Email"
            />
            <br />
            <input
              type="password"
              value={this.state.password}
              onChange={this.update("password")}
              placeholder="Password"
            />
            <br />
            <Button variant="success" type="submit">
              Submit
            </Button>
            <Link to={"/signup"}>
              <Button variant="primary">Signup instead</Button>
              {"  "}
            </Link>

            <Button variant="primary" onClick={this.demoLoginHandler}>
            Demo User
          </Button>
            {/* {this.renderErrors()} */}
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(LoginForm);