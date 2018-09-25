import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FormSignup extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: ''
    };

    this.handleFirstName = this._handleInput('firstName').bind(this);
    this.handleLastName = this._handleInput('lastName').bind(this);
    this.handleEmail = this._handleInput('email').bind(this);
    this.handlePassword = this._handleInput('password').bind(this);
    this.handleConfirmPassword = this._handleInput('confirmPassword').bind(this);
    this.handleSubmit = this._handleSubmit.bind(this);
  }

  _handleInput(stateProperty) {
    return (event => {
      this.setState({[stateProperty]:  event.target.value});
    })
  }

  _handleSubmit(event) {
    event.preventDefault();
    this.props.onSignup({
      name: {
        first: this.state.firstName,
        last: this.state.lastName
      },
      email: this.state.email,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword
    });
  }

  render() {
    return (
      <div className="form-centered-wrapper">
        <form action="" onSubmit={this.handleSubmit}>
          <label id="label-first-name" htmlFor="signup-first-name">First Name</label>
          <input aria-labelledby="label-first-name" className="blue" name="signup-first-name" type="text" onChange={this.handleFirstName} />
          <label id="label-last-name" htmlFor="signup-last-name">Last Name</label>
          <input aria-labelledby="label-last-name" className="blue" name="signup-last-name" type="text" onChange={this.handleLastName} />
          <label id="label-email" htmlFor="signup-email">Email</label>
          <input aria-labelledby="label-email" className="blue" name="signup-email" type="email" onChange={this.handleEmail} />
          <label id="label-password" htmlFor="signup-password">Password</label>
          <input aria-labelledby="label-password" className="blue" name="signup-password" type="password" onChange={this.handlePassword} />
          <label id="label-confirm-password" htmlFor="signup-confirm-password">Confirm password</label>
          <input aria-labelledby="label-confirm-password" className="blue" name="signup-confirm-password" type="password" onChange={this.handleConfirmPassword} />
          <input className="blue" type="submit" value="Sign up" />
          <a onClick={this.props.onLogin}>Already have an account?</a>
        </form>
      </div>
    );
  }
}

FormSignup.propTypes = {
  onSignup: PropTypes.func.isRequired,
  onLogin: PropTypes.func.isRequired
}

export default FormSignup;
