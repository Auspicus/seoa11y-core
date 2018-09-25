import { Component } from 'react';
import { replace } from 'react-router-redux';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class RequireAuthentication extends Component {
  componentWillMount() {
    if (!this.props.isAuthenticated) this.props.redirectTo('/login');
  }

  componentWillUpdate(nextProps) {
    if (!nextProps.isAuthenticated) nextProps.redirectTo('/login');
  }

  render() {
    return this.props.isAuthenticated ? this.props.children : null;
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.entities.user.token
})

const mapDispatchToProps = dispatch => ({
  redirectTo: bindActionCreators(replace, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RequireAuthentication);
