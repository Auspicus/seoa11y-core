import React, { Component } from 'react';
import PropTypes from 'prop-types';

class IconStop extends Component {
  render() {
    return (
      <svg
        width={this.props.width || "32"}
        height={this.props.height || "32"}
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg">
          <path fill={this.props.color} d="M16,1C7.8,1,1,7.8,1,16s6.8,15,15,15c4.1,0,7.9-1.7,10.6-4.4S31,20.1,31,16C31,7.8,24.2,1,16,1z M16,7.4
        		c1.2,0,2.4,0.3,3.5,0.8L8.2,19.5c-0.5-1.1-0.8-2.3-0.8-3.5C7.4,11.3,11.3,7.4,16,7.4z M16,24.6c-1.1,0-2.2-0.2-3.2-0.6L24,12.8
        		c0.4,1,0.6,2.1,0.6,3.2C24.6,20.7,20.7,24.6,16,24.6z"/>
      </svg>
    )
  }
}

IconStop.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  color: PropTypes.string
}

export default IconStop;
