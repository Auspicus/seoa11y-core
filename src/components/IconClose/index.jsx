import React, { Component } from 'react';
import PropTypes from 'prop-types';

class IconClose extends Component {
  render() {
    return (
      <svg
        width={this.props.width || "32"}
        height={this.props.height || "32"}
        viewBox="0 0 1792 1792"
        xmlns="http://www.w3.org/2000/svg">
          <path fill={this.props.color} d="M1225 1079l-146 146q-10 10-23 10t-23-10l-137-137-137 137q-10 10-23 10t-23-10l-146-146q-10-10-10-23t10-23l137-137-137-137q-10-10-10-23t10-23l146-146q10-10 23-10t23 10l137 137 137-137q10-10 23-10t23 10l146 146q10 10 10 23t-10 23l-137 137 137 137q10 10 10 23t-10 23zm215-183q0-148-73-273t-198-198-273-73-273 73-198 198-73 273 73 273 198 198 273 73 273-73 198-198 73-273zm224 0q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"/>
        </svg>
    )
  }
}

IconClose.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  color: PropTypes.string
}

export default IconClose;
