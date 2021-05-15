import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { Provider } from 'react-redux';
import { pages } from './components/pages';
import { routes } from './constants/routes';
import { Footer } from './components';
import Wrapper from './components/shared/wrapper';

import { store } from './store';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Container fluid className='p-0 main'>
          <Switch>
            <Wrapper>
              <Route exact path={routes.HOME} component={pages.HomePage} />
              <Route exact path={routes.ABOUT} component={pages.AboutPage} />
              <Route exact path={routes.ACHIEVEMENTS} component={pages.AchievementsPage} />
              <Route exact path={routes.CONTACTS} component={pages.ContactsPage} />
              <Route exact path={routes.CONTESTS} component={pages.ContestsPage} />
              <Route exact path={routes.COURSES} component={pages.CoursesPage} />
              <Route exact path={routes.GALLERY} component={pages.GalleryPage} />
              <Route exact path={routes.LITERATURE} component={pages.LiteraturePage} />
              <Route exact path={routes.RUSSIAN} component={pages.RussianPage} />

              <Route exact path={routes.FIFTH_GRADE} component={pages.fifthGradePage} />
              <Route exact path={routes.SIXTH_GRADE} component={pages.sixthGradePage} />
              <Route exact path={routes.SEVENTH_GRADE} component={pages.seventhGradePage} />
              <Route exact path={routes.EIGHTH_GRADE} component={pages.eighthGradePage} />
              <Route exact path={routes.NINTH_GRADE} component={pages.ninthGradePage} />
            </Wrapper>
          </Switch>
        </Container>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
