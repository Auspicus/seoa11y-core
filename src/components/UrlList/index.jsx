import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Select from 'react-select';
import 'react-select/dist/react-select.css';

import IconChain from '../IconChain';
import IconStop from '../IconStop';
import IconAlert from '../IconAlert';
import IconPin from '../IconPin';

import './styles.scss';

class UrlList extends Component {
  constructor() {
    super();
    this.state = {
      url: ''
    }

    this.handleCodeFilter = this._handleSelect.bind(this);
    this.handleUrlInput = this._handleInput('url').bind(this);
  }

  _handleInput(stateProperty) {
    return (event => {
      this.setState({[stateProperty]: event.target.value});
    })
  }

  _handleSelect(newValue) {
    this.props.onFilter({ code: (newValue ? newValue.value : '') });
  }

  handlePageFilter(change) {
    this.props.onFilter({ page: this.props.filters.code + change })
  }

  render() {
    let urls = this.props.urls.map((url, i) => (
      <tr key={i}>
        <td>
          <a onClick={() => (this.props.onClick(url._id))}>
            <div>{`/${url.url.split('/').slice(3).join('/')}`}</div>
          </a>
        </td>
        <td>{url.nErrors > 999 ? `${url.nErrors}+` : url.nErrors}</td>
        <td>{url.nWarnings > 999 ? `${url.nWarnings}+` : url.nWarnings}</td>
        <td>{url.nNotices > 999 ? `${url.nNotices}+` : url.nNotices}</td>
      </tr>
    ))

    return (
      <div className="url-list">
        <form onSubmit={event => {
            this.props.onFilter(this.state);
            event.preventDefault();
          }}>
          <input name="url-list-filter-page" type="text" onChange={this.handleUrlInput} />
        </form>
        <Select
          name="url-list-filter-code"
          value={this.props.filters.code}
          options={this.props.codeFilterOptions}
          onChange={this.handleCodeFilter} />
        <table>
          <thead>
            <tr>
              <th><span>Page</span><IconChain width="24" height="24" color="#fff"/></th>
              <th><IconStop width="24" height="24" color="#fff"/></th>
              <th><IconAlert width="24" height="24" color="#fff"/></th>
              <th><IconPin width="24" height="24" color="#fff"/></th>
            </tr>
          </thead>
          <tbody>
            {urls}
          </tbody>
        </table>
      </div>
    );
  }
}

UrlList.propTypes = {
  onFilter: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  filters: PropTypes.shape({
    url: PropTypes.string.isRequired,
    code: PropTypes.string.isRequired,
    page: PropTypes.number.isRequired
  }).isRequired,
  codeFilterOptions: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
  }).isRequired).isRequired,
  urls: PropTypes.array.isRequired
}

export default UrlList;
