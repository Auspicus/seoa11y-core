import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import DocumentTitle from 'react-document-title';

import Splash from '../components/Splash';
import Promo from '../components/Promo';

class Home extends Component {
  render() {
    return (
      <DocumentTitle title="SEO/A11y">
        <main>
          <Splash
            title="SEO and accessibility done right."
            subtitle="Easily improve your search engine ranking!"
            />
          <Promo
            left={(
              <div>
                <h2 className="promo__title blue">Accessibility Reporting</h2>
                <p className="promo__subtitle">
                  <b>SEO comes down to computer readability.</b><br/>Google can't read it if a screen reader can't.
                </p>
              </div>
            )}
            right={(
              <div>
                <h2 className="promo__title green">VCS Integration</h2>
                <p className="promo__subtitle">
                  You work as a team, we know that.<br/><b>We integrate with all the major VCS.</b>
                </p>
                <button onClick={() => (this.props.goTo('/dashboard/settings/integrations'))}>Get integrated</button>
              </div>
            )}
            color="#5386E4"
          />
          <Promo backgroundColor="#9B287B" color="#fff" centered title="Ready to get started?">
            <button className="large" onClick={() => (this.props.goTo('/signup'))}>Create an account</button>
          </Promo>
        </main>
      </DocumentTitle>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  goTo: bindActionCreators(push, dispatch)
})

export default connect(
  null,
  mapDispatchToProps
)(Home);
