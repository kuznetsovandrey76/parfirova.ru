import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { Provider } from 'react-redux';
import { AboutPage, GalleryPage, HomePage, RussianPage, LiteraturePage, ContactsPage } from './components/pages';
import { Header, Footer } from './components';

import { store } from './store';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Container fluid className='p-0 main'>
          <Header />
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/about' component={AboutPage} />
            <Route exact path='/gallery' component={GalleryPage} />
            <Route exact path='/russian' component={RussianPage} />
            <Route exact path='/literature' component={LiteraturePage} />
            <Route exact path='/contacts' component={ContactsPage} />
          </Switch>
        </Container>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
