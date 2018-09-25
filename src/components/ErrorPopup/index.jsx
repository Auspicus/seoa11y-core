import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

import IconClose from '../IconClose';

class ErrorPopup extends Component {
  render() {
    let { id, message, expire, order, onDismiss, ...otherProps } = this.props;
    return (
      <div className="error-popup" {...otherProps}>
        <span>{message}</span>
        <button onClick={() => (onDismiss(id))}><IconClose color="#fff" width="16" height="16" /></button>
      </div>
    )
  }
}

ErrorPopup.propTypes = {
  id: PropTypes.string,
  message: PropTypes.string,
  expire: PropTypes.number
}

export default ErrorPopup;
