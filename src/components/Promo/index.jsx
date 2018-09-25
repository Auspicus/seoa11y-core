import React, { Component } from 'react';

import './styles.scss';

export default class Promo extends Component {
  render() {
    let subtitle = (this.props.subtitle ? (<h3 className="promo__subtitle">{this.props.subtitle}</h3>) : null);

    if (this.props.left || this.props.right) {
      return (<div
        style={this.props.style}
        className="promo"
      >
        <div className={"promo__side"}>
          {this.props.left}
        </div>
        <div className={"promo__side"}>
          {this.props.right}
        </div>
      </div>)
    }

    if (this.props.centered) {
      return (<div
        style={{
          backgroundColor: this.props.backgroundColor,
          color: this.props.color
        }}
        className={"promo" + (this.props.centered ? " centered" : "")}
      >
        <h2 className="promo__title">{this.props.title}</h2>
        {subtitle}
        {this.props.children}
      </div>)
    }

    return null;
  }
}
