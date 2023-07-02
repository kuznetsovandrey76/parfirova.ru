import React from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';

import './5th-grade.css';

// todo: Refactor :)
const currentLessons = [{
  title: 'Урок по рассказу Александра Цыпкина "Томатный сок или повесть о женщине из другого времени"',
  subject: 'Русский язык',
  description: 'https://disk.yandex.ru/i/4APLe20d2_fAgQ',
  date: '18.03.2022'
}]

function FiveGradePage() {

  const lessonsBlock = (
    <Row>
      {currentLessons.map((lesson, id) => (
        <Col md={6} lg={4} className='mb-3' key={id}>
          <Card>
            <Card.Body>
              <Card.Title>{lesson.subject}</Card.Title>
              <Card.Subtitle>{lesson.title}</Card.Subtitle>
              <a href={lesson.description} target="_blank" rel="noopener noreferrer">
                Скачать с Yandex Disk
              </a>
            </Card.Body>
            <Card.Footer>{lesson.date}</Card.Footer>
          </Card>
        </Col>
      ))}
    </Row>
  );

  return (
    <Container>
      <div className='d-flex mb-3'>
        <h1 className='d-inline-block me-3'>5 класс</h1>
      </div>
      <hr />
      {lessonsBlock}
    </Container>
  );
}

export default FiveGradePage;
