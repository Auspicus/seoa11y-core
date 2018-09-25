import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push, replace } from 'react-router-redux';
import DocumentTitle from 'react-document-title';

import { userCreate } from '../actions';

import LayoutMax from '../components/LayoutMax';
import FormSignup from '../components/FormSignup';

class Signup extends Component {
  componentWillMount() {
    if (this.props.isAuthenticated) this.props.redirectTo('/dashboard');
  }

  componentWillUpdate(nextProps) {
    if (!this.props.isAuthenticated && nextProps.isAuthenticated) nextProps.redirectTo('/dashboard');
  }

  render() {
    return (
      <DocumentTitle title="Create an account - SEO/A11y">
        <LayoutMax>
          <FormSignup
            onSignup={user => (this.props.userCreate(user))}
            onLogin={() => (this.props.goTo('/login'))}
          />
        </LayoutMax>
      </DocumentTitle>
    )
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.entities.user.token
})

const mapDispatchToProps = dispatch => ({
  goTo: bindActionCreators(push, dispatch),
  redirectTo: bindActionCreators(replace, dispatch),
  userCreate: bindActionCreators(userCreate, dispatch),
  userCreateFail: bindActionCreators(userCreate().meta.fail, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup);
