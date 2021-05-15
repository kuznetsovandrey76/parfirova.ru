// import React, { useEffect } from 'react';
import React from 'react';
import { Container } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Header } from '..';

const propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.any,
};
// import ReactGA from 'react-ga';
// import { history } from '../store';
// import { GOOGLE_ACCOUNT_ID } from '../constants/env-params';

// ReactGA.initialize(GOOGLE_ACCOUNT_ID.get(window.location.hostname));

const Wrapper = (props) => {
  // export default (WrappedComponent, options = {}) => {
  //   const trackPage = (page) => {
  //     ReactGA.set({
  //       page,
  //       ...options,
  //     });
  //     ReactGA.pageview(page);
  //   };
  const { children } = props;

  return (
    <>
      <Header />
      <Container fluid className='page-content'>
        {children}
      </Container>
    </>
  );

  //   const HOC = (props) => (
  //     // useEffect(() => trackPage(history.location.pathname), [history.location.pathname]);

  //     <WrappedComponent className='page-content' {...props} />
  //   );
  //   return HOC;
};

Wrapper.propTypes = propTypes;

export default Wrapper;
