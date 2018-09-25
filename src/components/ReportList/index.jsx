import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

class ReportList extends Component {
  render() {
    let reports = this.props.reports.map((report, i) => (
      <li key={i}><a onClick={() => (this.props.onClick(report._id))}>{report.standard}: {report.rootUrl}</a></li>
    ))

    let content = (
      <div className="report-list">
        <h2>Reports</h2>
        <ul>
          {reports}
        </ul>
      </div>
    )

    return this.props.reports.length > 0 ? content : null;
  }
}

ReportList.propTypes = {
  reports: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired
}

export default ReportList;
