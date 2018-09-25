import React, { Component } from 'react';
import { Circle } from 'rc-progress';
import PropTypes from 'prop-types';

import './styles.scss';

class ProgressBar extends Component {
  render() {
    return (
        <div className="progress-circle__text">Track our progress while we generate an <br/> accessibility report for you:</div>
        <Circle className="progress-circle" percent={(this.props.progress * 100).toFixed(2)} strokeWidth="4" strokeColor="#45273A" />
        <div className="progress-circle__percent">{(this.props.progress * 100).toFixed(2)}%</div>
      </div>
    );
  }
}

ProgressBar.propTypes = {
  progress: PropTypes.number
}

export default ProgressBar;
