import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FormLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {email: '', password: ''};

    this.handleEmail = this._handleInput('email').bind(this);
    this.handlePassword = this._handleInput('password').bind(this);
    this.handleSubmit = this._handleSubmit.bind(this);
  }

  _handleInput(stateProperty) {
    return (event => {
      this.setState({[stateProperty]: event.target.value});
    })
  }

  _handleSubmit(event) {
    event.preventDefault();
    this.props.onLogin(this.state);
  }

  render() {
    return (
      <div className="form-centered-wrapper">
        <form action="" onSubmit={this.handleSubmit}>
          <label id="label-email" htmlFor="login-email">Email</label>
          <input aria-labelledby="label-email" className="green" name="login-email" type="email" onChange={this.handleEmail} />
          <label id="label-password" htmlFor="login-password">Password</label>
          <input aria-labelledby="label-password" className="green" name="login-password" type="password" onChange={this.handlePassword} />
          <input className="green" type="submit" value="Login" />
          <a aria-label="Create an account" onClick={this.props.onSignup}>Don&apos;t have an account?</a>
        </form>
      </div>
    );
  }
}

FormLogin.propTypes = {
  onLogin: PropTypes.func.isRequired,
  onSignup: PropTypes.func.isRequired
}

export default FormLogin;
