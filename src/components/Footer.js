import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <Container fluid className='footer'>
      <Container className='mb-3 p-0'>
        <Row>
          <Col>
            <div className='footer-title'>
              <h5>Ирина Парфирова</h5>
            </div>
          </Col>
          <Col>
            <div className='footer-title'>
              <h5> Свежие посты </h5>
            </div>
          </Col>
          <Col>
            <div className='footer-title'>
              <h5> Информация </h5>
              <p>Вконтакте</p>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className='footer-second'>
        ©{new Date().getFullYear()} Парфирова Ирина Андреевна
      </Container>
    </Container>
  );
}

export default Footer;
