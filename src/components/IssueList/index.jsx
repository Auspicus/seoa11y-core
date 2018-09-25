import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

class IssueList extends Component {
  render() {
    let issueTypes = [];
    this.props.issues.currentPage.forEach(issue => {
      if (issueTypes.indexOf(issue.code) === -1) issueTypes.push(issue);
    });
    let issueTypeLists = [];
    issueTypes.forEach((issueType, i1) => {
      let issueInstances = [];
      this.props.issues.currentPage.forEach((issue, i2) => {
        if (issue.code === issueType.code) issueInstances.push(<li key={i2}>{issue.context}</li>);
      })
      issueTypeLists.push(<div key={i1}>
        <h2>{issueType.code}</h2>
        <div>{issueType.message}</div>
        <div>{issueType.type}</div>
        <ul>
          {issueInstances}
        </ul>
      </div>)
    })

    return (
      <div className="issue-list">
        {issueTypeLists}
      </div>
    )
  }
}

IssueList.propTypes = {
  issues: PropTypes.array.isRequired
}

export default IssueList;
