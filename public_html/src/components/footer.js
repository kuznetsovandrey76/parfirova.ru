import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './footer.css';

function Footer() {
  return (
    <Container fluid className='footer mt-3 p-0'>
      <div className='footer-main'>
        <Row className='m-0'>
          <Col>Достижения</Col>
          <Col>Ученикам</Col>
        </Row>
      </div>
      <div className='footer-second'>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a href='https://www.parfirova.ru' className='text-white undecoration'>
          {' '}
          parfirova.ru{' '}
        </a>
      </div>
    </Container>
  );
}

export default Footer;
