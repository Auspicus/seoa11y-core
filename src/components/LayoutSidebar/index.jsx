import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

class LayoutSidebar extends Component {
  render() {
    return (
      <div className="layout-sidebar">
        <main role="main">
          {this.props.children}
        </main>
        <aside>
          {this.props.sidebar}
        </aside>
      </div>
    );
  }
}

LayoutSidebar.propTypes = {
  sidebar: PropTypes.element.isRequired
}

export default LayoutSidebar;
