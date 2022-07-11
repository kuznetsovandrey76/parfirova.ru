import React from 'react';
import { Container } from 'react-bootstrap';
import { Header, Footer } from './';

export default function Wrapper(props) {
  const { children } = props;
  return (
    <Container fluid className='wrapper'>
      <div className='main'>
        <Header />
        <Container>{children}</Container>
      </div>
      <Footer />
    </Container>
  );
}
