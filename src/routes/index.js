import React from 'react';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';

import Header from '../containers/Header';
import RequireAuthentication from '../containers/RequireAuthentication';

import '../assets/styles/index.scss';

import routes from './routes';

const generatePageRouteComponents = pageRouteObjects => {
  return pageRouteObjects.map(({ exact, path, secure, component: Page }, i) => (
    <Route key={i}
      exact={exact}
      path={path}
      render={props => {
        if (secure) return (<RequireAuthentication><Page {...props} /></RequireAuthentication>)
        return <Page {...props} />;
      }}
    />
  ));
};

const generateAppRouter = history => (
  <ConnectedRouter history={history}>
    <div>
      <Header />
      <Switch>
        { generatePageRouteComponents(routes) }
      </Switch>
    </div>
  </ConnectedRouter>
)

export default generateAppRouter;
