import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { HomePage, NotFoundPage, Qwe } from './components/pages'

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
