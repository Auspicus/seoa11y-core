import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import DocumentTitle from 'react-document-title';

import { reportList, reportCreateFromSitemap, reportCreateFromList } from '../actions';

import LayoutSidebar from '../components/LayoutSidebar';
import ReportList from '../components/ReportList';
import FormGenerate from '../components/FormGenerate';
import User from '../components/User';

class Dashboard extends Component {
  componentWillMount() {
    this.props.listReports(this.props.user.token);
  }

  componentWillUpdate(nextProps) {
    if (this.props.report !== nextProps.report) nextProps.goTo(`/report/${nextProps.report._id}`)
  }

  render() {
    return (
      <DocumentTitle title="Dashboard - SEO/A11y">
        <LayoutSidebar sidebar={(
            <User user={this.props.user} />
          )}>
          <h1>Dashboard</h1>
          <FormGenerate
            onCrawl={() => {}}
            onSitemap={(url) => this.props.createReportFromSitemap(url, this.props.user.token)}
            onPage={(url) => this.props.createReportFromPage(url, this.props.user.token)}
            user={this.props.user}
          />
          <ReportList onClick={id => (this.props.goTo(`/report/${id}`))} reports={this.props.reports} />
        </LayoutSidebar>
      </DocumentTitle>
    );
  }
}

const mapStateToProps = state => ({
  reports: state.pagers.reports.currentPage,
  report: state.entities.report,
  user: state.entities.user
})

const mapDispatchToProps = dispatch => ({
  goTo: bindActionCreators(push, dispatch),
  createReportFromSitemap: bindActionCreators(reportCreateFromSitemap, dispatch),
  createReportFromPage: bindActionCreators(reportCreateFromList, dispatch),
  listReports: bindActionCreators(reportList, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
