import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

class FormCrawl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sitemap: '',
      page: '',
      type: 0
    };

    this.handleInputSitemap = this._handleInput('sitemap').bind(this);
    this.handleInputList = this._handleInput('page').bind(this);
    this.handleInputCrawl = this._handleInput('crawl').bind(this);
    this.handleSubmitSitemap = this._handleSubmit('sitemap', this.props.onSitemap).bind(this);
    this.handleSubmitList = this._handleSubmit('page', this.props.onPage).bind(this);
    this.handleSubmitCrawl = this._handleSubmit('crawl', this.props.onCrawl).bind(this);
  }

  _handleInput(stateProperty) {
    return (event => {
      this.setState({[stateProperty]: event.target.value});
    })
  }

  _handleSubmit(stateProperty, onSubmit) {
    return (event => {
      event.preventDefault();
      onSubmit(this.state[stateProperty]);
    })
  }

  render() {
    let form = (type) => {
      switch (type) {
        case 0:
          return (<div className="form-wrapper">
            <h3 aria-label="Page report">Page Report</h3>
            <form onSubmit={this.handleSubmitList}>
              <input
                name="generate-list"
                type="text"
                placeholder="Page URL"
                value={this.state.page}
                onChange={this.handleInputList} />
              <input
                className="blue"
                aria-label="Generate a report for a page"
                type="submit"
                value="Generate" />
              </form>
            </div>)
        case 1:
          return (<div className="form-wrapper">
            <h3 aria-label="Site report">Site Report</h3>
            <form onSubmit={this.handleSubmitSitemap}>
              <input
                name="generate-sitemap"
                type="text"
                placeholder="Sitemap URL"
                value={this.state.sitemap}
                onChange={this.handleInputSitemap} />
              <input
                className="blue"
                aria-label="Generate a report for a site"
                type="submit"
                value="Generate" />
            </form>
          </div>)
          case 2:
            return (<div className="form-wrapper">
              <h3 aria-label="Crawl report">Crawl Report</h3>
              <form onSubmit={this.handleSubmitSitemap}>
                <input
                  name="generate-sitemap"
                  type="text"
                  placeholder="Crawl Root URL"
                  value={this.state.crawl}
                  onChange={this.handleInputCrawl} />
                <input
                  className="blue"
                  aria-label="Generate a sitemap from a site crawl and run a report on that sitemap"
                  type="submit"
                  value="Generate" />
              </form>
            </div>)
        default: return;
      }
    };
    return (
      <div className="form-generate">
        <h2>Generate a new report</h2>
        <div>
          <button style={{ backgroundColor: (this.state.type === 0 ? "#45273a" : "#884e73") }}
            onClick={() => (this.setState({type: 0}))}
            aria-label="Show form to generate report for a single page">
            Page
          </button>
          <button style={{ backgroundColor: (this.state.type === 1 ? "#45273a" : "#884e73") }}
            onClick={() => (this.setState({type: 1}))}
            aria-label="Show form to generate report for a whole site">
            Sitemap
          </button>
        </div>
        {form(this.state.type)}
      </div>
    );
  }
}

FormCrawl.propTypes = {
  onSitemap: PropTypes.func.isRequired,
  onPage: PropTypes.func.isRequired,
  onCrawl: PropTypes.func.isRequired
}

export default FormCrawl;
