import React from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';
import './5th-grade.css';
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";

const currentLessons = [{
  title: 'Урок. Окончание и основа слова',
  subject: 'Русский язык',
  description: 'https://disk.yandex.ru/i/iIXJ_FuUImntrw',
  date: '07.02.2022'
}, {
  title: 'Урок «ШИРОКАЯ МАСЛЕНИЦА»',
  subject: 'Литература',
  description: 'https://disk.yandex.ru/i/RE2fHGjx4A7LVg',
  date: '15.03.2022'
}]

const docs = [
  { uri: "https://storage.yandexcloud.net/parfirova.ru/pdf/%D0%9E%D0%BA%D0%BE%D0%BD%D1%87%D0%B0%D0%BD%D0%B8%D0%B5%20%D0%B8%20%D0%BE%D1%81%D0%BD%D0%BE%D0%B2%D0%B0%20%D1%81%D0%BB%D0%BE%D0%B2%D0%B0.pdf"},
  { uri: "https://storage.yandexcloud.net/parfirova.ru/pdf/%D0%A8%D0%98%D0%A0%D0%9E%D0%9A%D0%90%D0%AF%20%D0%9C%D0%90%D0%A1%D0%9B%D0%95%D0%9D%D0%98%D0%A6%D0%90.pdf"}
];

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
        <h1 className='d-inline-block me-3'>6 класс</h1>
      </div>
      <hr />
      {lessonsBlock}
      <DocViewer
        documents={docs}
        initialActiveDocument={docs[1]}
        pluginRenderers={DocViewerRenderers}
      />
    </Container>
  );
}

export default FiveGradePage;
