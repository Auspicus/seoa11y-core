import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push, replace } from 'react-router-redux';
import DocumentTitle from 'react-document-title';

import { userLogin } from '../actions';

import LayoutMax from '../components/LayoutMax';
import FormLogin from '../components/FormLogin';

class Login extends Component {
  componentWillMount() {
    if (this.props.isAuthenticated) this.props.redirectTo('/dashboard');
  }

  componentWillUpdate(nextProps) {
    if (!this.props.isAuthenticated && nextProps.isAuthenticated) nextProps.redirectTo('/dashboard');
  }

  render() {
    return (
      <DocumentTitle title="Login - SEO/A11y" >
        <LayoutMax>
          <FormLogin
            onLogin={user => (this.props.userLogin(user))}
            onSignup={() => (this.props.goTo('/signup'))}
          />
        </LayoutMax>
      </DocumentTitle>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.entities.user.token
})

const mapDispatchToProps = dispatch => ({
  goTo: bindActionCreators(push, dispatch),
  redirectTo: bindActionCreators(replace, dispatch),
  userLogin: bindActionCreators(userLogin, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
