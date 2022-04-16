import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <Container fluid className='footer'>
      <Container className='mb-3 p-0'>
        <Row>
          <Col md={6} lg={4}>
            <div className='footer-title'>
              <h5>Ирина Парфирова</h5>
            </div>
          </Col>
          <Col md={6} lg={4}>
            <div className='footer-title'>
              <h5> Свежие посты </h5>
            </div>
          </Col>
          <Col md={6} lg={4}>
            <div className='footer-title'>
              <h5> Информация </h5>
              <a href='https://vk.com/parfirova.irina'>Вконтакте</a>
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
