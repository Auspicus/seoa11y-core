import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import DocumentTitle from 'react-document-title';

import LayoutMax from '../components/LayoutMax';
import IssueList from '../components/IssueList';

import { urlRequest, issueList } from '../actions';

class Url extends Component {
  state = {
    isLoaded: false
  }

  componentDidMount() {
    this.props.requestUrl(this.props.match.params.uid, this.props.user.token);
  }

  componentWillUpdate(nextProps) {
    if (this.props.page !== nextProps.page) {
      nextProps.listIssues({
        reportId: nextProps.report._id,
        url: nextProps.page.url
      }, this.props.user.token);
    }
  }

  render() {

    return (
      <DocumentTitle title="Page - SEO/A11y">
        <LayoutMax>
          <h1>Page - {this.props.page.url}</h1>
          <IssueList issues={this.props.issues} />
        </LayoutMax>
      </DocumentTitle>
    );
  }
}

const mapStateToProps = state => ({
  issues: state.pagers.issues,
  page: state.entities.url,
  report: state.entities.report,
  user: state.entities.user
})

const mapDispatchToProps = dispatch => ({
  goTo: bindActionCreators(push, dispatch),
  requestUrl: bindActionCreators(urlRequest, dispatch),
  listIssues: bindActionCreators(issueList, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Url);
