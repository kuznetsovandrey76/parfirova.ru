import React from 'react';
// We should use HashRouter for work with gh-pages
import { HashRouter as Router, Switch } from 'react-router-dom';

import routes from './routes'
import RouteWithSubRoutes from './routes/routes-with-sub-routes'
import Wrapper from './components/shared/wrapper'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-image-lightbox/style.css';
import './app.css'

function App() {
  return (
    <Router>
      <Wrapper>
        <Switch>
          {routes.map((route) => <RouteWithSubRoutes {...route} key={route.path} />)}
        </Switch>
      </Wrapper>
    </Router >
  )
}

export default App;
