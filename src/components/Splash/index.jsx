import React, { Component } from 'react';

import './styles.scss';

export default class Splash extends Component {
  render() {
    return (
      <div className="splash">
        <div className="splash__text">
          <h1 className="splash__title">{this.props.title}</h1>
          <h2 className="splash__subtitle">{this.props.subtitle}</h2>
        </div>
      </div>
    );
  }
}
