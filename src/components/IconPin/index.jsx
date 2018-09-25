import React, { Component } from 'react';
import PropTypes from 'prop-types';

class IconPin extends Component {
  render() {
    return (
      <svg
        width={this.props.width || "32"}
        height={this.props.height || "32"}
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg">
          <path fill={this.props.color} d="M16,1C7.8,1,1,7.8,1,16s6.8,15,15,15c4.1,0,7.9-1.7,10.6-4.4C29.3,23.9,31,20.1,31,16C31,7.8,24.2,1,16,1z
          	 M22.1,10.2h-2.4l0,4.1c1.3,1.3,2.1,3.4,2.1,5.7h-4.9v2.4l-0.8,5l-0.8-5V20h-4.9c0-2.3,0.8-4.3,2.1-5.7l0-4.1H9.9V7.8h12.2V10.2z"/>
      </svg>
    )
  }
}

IconPin.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  color: PropTypes.string
}

export default IconPin;
