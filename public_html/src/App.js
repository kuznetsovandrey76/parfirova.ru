import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { GalleryPage, AboutPage, HomePage } from './components/pages';
import { Header, Footer } from './components';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Container fluid className='p-0'>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/about' component={AboutPage} />
          <Route exact path='/gallery' component={GalleryPage} />
        </Switch>
      </Container>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
