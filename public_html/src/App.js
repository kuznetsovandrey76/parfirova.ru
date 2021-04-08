import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import {
  HomePage,
  AboutPage,
} from './components/pages';

import './App.css';
 
function App() {
  return  (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={AboutPage} />
      </Switch>
    </BrowserRouter>
  );
}
 
export default App;