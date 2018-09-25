import React, { Component } from 'react';

import './styles.scss';

export default class User extends Component {
  render() {
    return (
      <div>
        <div>{this.props.user.email}</div>
        <div>Welcome back, {this.props.user.name.first}</div>
      </div>
    );
  }
}
