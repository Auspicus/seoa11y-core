import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import DocumentTitle from 'react-document-title';
import { Line as ProgressBar } from 'rc-progress';

import { POLL_RATE, COLOR_LIGHT_GREEN } from '../constants';

import LayoutMax from '../components/LayoutMax';
import UrlList from '../components/UrlList';

import { reportRequest, urlList } from '../actions';

class Report extends Component {
  constructor() {
    super();
    this.state = {
      code: '',
      url: ''
    }
    this.pollTimeout = -1;
    this.poll = () => {
      this.props.requestReport(this.props.report._id, this.props.user.token);
      this.props.listUrls({
        ...this.props.urls.filters,
        reportId: this.props.report._id
      }, this.props.user.token)
    }
  }

  componentDidMount() {
    this.props.requestReport(this.props.match.params.rid, this.props.user.token);
    this.props.listUrls({
      ...this.props.urls.filters,
      reportId: this.props.match.params.rid
    }, this.props.user.token);
  }

  componentWillUpdate(nextProps) {
    if (nextProps.report.progress < 1) {
      clearTimeout(this.pollTimeout);
      this.pollTimeout = setTimeout(this.poll, POLL_RATE);
    }
  }

  componentWillUnmount() {
    clearTimeout(this.pollTimeout);
  }

  onFilter(newFilters) {
    this.props.listUrls({
      ...this.props.urls.filters,
      ...newFilters,
      reportId: this.props.report._id
    }, this.props.user.token)
  }

  generateCodeFilterOptions() {
    return this.props.report.codes
      ? this.props.report.codes.map(code => ({ value: code, label: (code.substring(32)) }))
      : [];
  }

  render() {
    return (
      <DocumentTitle title="Report - SEO/A11y">
        <LayoutMax>
          <h1>Report</h1>
          {typeof this.props.report.progress !== 'undefined' ? (this.props.report.progress !== 1
            ? <ProgressBar
              percent={(this.props.report.progress * 100).toFixed(2)}
              strokeWidth="1"
              strokeColor={COLOR_LIGHT_GREEN}
              style={{ paddingBottom: "2rem" }}/>
            : null) : null}
          <UrlList
            onFilter={this.onFilter.bind(this)}
            onClick={id => this.props.goTo(`/report/${this.props.report._id}/${id}`)}
            urls={this.props.urls.currentPage}
            filters={this.props.urls.filters}
            codeFilterOptions={this.generateCodeFilterOptions()} />
        </LayoutMax>
      </DocumentTitle>
    );
  }
}

const mapStateToProps = state => ({
  urls: state.pagers.urls,
  report: state.entities.report,
  user: state.entities.user
})

const mapDispatchToProps = dispatch => ({
  goTo: bindActionCreators(push, dispatch),
  requestReport: bindActionCreators(reportRequest, dispatch),
  listUrls: bindActionCreators(urlList, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Report);
