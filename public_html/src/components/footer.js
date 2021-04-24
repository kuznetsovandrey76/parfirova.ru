import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import BootstrapLink from './shared/bootstrap-link';
import { routes } from '../constants/routes';

import './footer.css';

function Footer() {
  return (
    <Container fluid className='footer mt-3 p-0'>
      <div className='footer-main'>
        <Row className='m-0'>
          <Col className='text-secondary'>
            <p className='mb-0 text-dark'>Достижения</p>
            <BootstrapLink href={routes.COURSES} text='Курсы & Вебинары' block />
            <BootstrapLink href={routes.CONTESTS} text='Конкурсы' block />
            <BootstrapLink href={routes.ACHIEVEMENTS} text='Достижения учеников' block />
          </Col>
          <Col className='text-secondary'>
            <p className='mb-0 text-dark'>Ученикам</p>
            <BootstrapLink href={routes.FIFTH_GRADE} text='5 классы' block />
            <BootstrapLink href={routes.SIXTH_GRADE} text='6 классы' block />
            <BootstrapLink href={routes.SEVENTH_GRADE} text='7 классы' block />
            <BootstrapLink href={routes.EIGHTH_GRADE} text='8 классы' block />
            <BootstrapLink href={routes.NINTH_GRADE} text='9 классы' block />
          </Col>
          <Col className='text-secondary'>
            <p className='mb-0 text-dark'>Методическая копилка</p>
            <BootstrapLink href={routes.RUSSIAN} text='Русский язык' block />
            <BootstrapLink href={routes.LITERATURE} text='Литература' block />
          </Col>
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
