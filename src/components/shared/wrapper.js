import React from 'react';
import { Container } from 'react-bootstrap';
import { Nav, Footer } from './';

export default function Wrapper(props) {
  const { children } = props;
  return (
    <Container fluid className='wrapper'>
      <div className='main'>
        <Nav />
        <Container fluid className='mt-3 mb-5 text-center'>
          {children}
        </Container>
      </div>
      <Footer />
    </Container>
  );
}
