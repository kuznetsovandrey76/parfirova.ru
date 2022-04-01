import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { HomePage, NotFoundPage } from './components/pages'
import Wrapper from './components/shared/wrapper'

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Wrapper>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path="*" component={NotFoundPage} />
        </Switch>
      </Wrapper>
    </BrowserRouter>
  )
}

export default App;
