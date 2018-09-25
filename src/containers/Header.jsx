import React, { Component } from 'react';
import { push } from 'react-router-redux';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { errorRemove, userLogout } from '../actions';

import LoadingBar from '../components/LoadingBar';
import ErrorPopupGroup from '../components/ErrorPopupGroup';
import HeaderLogo from '../../logo.svg';

class Header extends Component {
  render() {
    let actions = (this.props.isAuthenticated ?
      <ul className="inline right">
        <li><a aria-label="Go to dashboard" onClick={() => (this.props.goTo('/dashboard'))}>Dashboard</a></li>
        <li><a onClick={() => (this.props.userLogout(this.props.user))}>Logout</a></li>
      </ul>
      :
      <ul className="inline right">
        <li><a aria-label="Go to login page" onClick={() => (this.props.goTo('/login'))}>Login</a></li>
      </ul>
   )

    return (
      <div>
        <header>
          <nav role="navigation">
            <a aria-label="Go to home page" onClick={() => (this.props.goTo('/'))}>
              <img src={HeaderLogo} alt="seoa11y" />
            </a>
            {actions}
          </nav>
        </header>
        <LoadingBar queue={this.props.queue} />
        <ErrorPopupGroup onDismiss={this.props.onErrorDismiss} errors={this.props.errors} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  queue: state.queue,
  errors: state.errors,
  user: state.entities.user,
  isAuthenticated: state.entities.user.token
})

const mapDispatchToProps = dispatch => ({
  goTo: bindActionCreators(push, dispatch),
  onErrorDismiss: bindActionCreators(errorRemove, dispatch),
  userLogout: bindActionCreators(userLogout, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);
