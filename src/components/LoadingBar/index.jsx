import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

class LoadingBar extends Component {
  render() {
    let bar = (
      <div className="loading-bar">
        <div className="loading-bar__inner">
          <div className="loading-bar__bar"></div>
          <div className="loading-bar__bar"></div>
          <div className="loading-bar__bar"></div>
        </div>
      </div>
    )

    return this.props.queue.length > 0 ? bar : null;
  }
}

LoadingBar.propTypes = {
  queue: PropTypes.array
}

export default LoadingBar;
