import React, { Component } from 'react';
import PropTypes from 'prop-types';

class IconAlert extends Component {
  render() {
    return (
      <svg
        width={this.props.width || "32"}
        height={this.props.height || "32"}
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg">
          <path fill={this.props.color} d="M16,1C7.8,1,1,7.7,1,16c0,8.2,6.8,15,15,15s15-6.8,15-15C31,7.7,24.2,1,16,1z M13.8,8.5c0-1.2,1-2.2,2.2-2.2
	s2.2,1,2.2,2.2v8c0,1.2-1,2.2-2.2,2.2s-2.2-1-2.2-2.2V8.5z M16,25.8c-1.5,0-2.7-1.2-2.7-2.7c0-1.5,1.2-2.7,2.7-2.7s2.7,1.2,2.7,2.7
	C18.7,24.6,17.5,25.8,16,25.8z"/>
      </svg>
    )
  }
}

IconAlert.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  color: PropTypes.string
}

export default IconAlert;
