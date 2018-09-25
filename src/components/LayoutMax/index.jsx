import React, { Component } from 'react';

import './styles.scss';

export default class LayoutMax extends Component {
  render() {
    return (
      <div className="layout-max">
        {this.props.children}
      </div>
    )
  }
}
