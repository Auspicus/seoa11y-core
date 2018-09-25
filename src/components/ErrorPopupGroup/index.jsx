import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

import ErrorPopup from '../ErrorPopup';

import './styles.scss';

class ErrorPopupGroup extends Component {
  render() {
    let errors = this.props.errors.map((error, i) => (
      <ErrorPopup onDismiss={this.props.onDismiss} order={i} key={error.id} { ...error } />
    ));

    return (
      <div style={{position: "relative"}}>
        <CSSTransitionGroup
          aria-live="assertive"
          className="error-popup-group"
          transitionName="error-popup"
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}>
          {errors}
        </CSSTransitionGroup>
      </div>
    );
  }
}

ErrorPopupGroup.propTypes = {
  errors: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    message: PropTypes.string,
    expire: PropTypes.number
  })),
  onDismiss: PropTypes.func.isRequired
}

export default ErrorPopupGroup;
