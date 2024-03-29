import React from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';
import './5th-grade.css';
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";

const currentLessons = [{
  title: 'Урок. Виды глаголов',
  subject: 'Русский язык',
  description: 'https://disk.yandex.ru/i/YmBoSkzgoZqeCA',
  date: '18.03.2022'
}]

const docs = [
  { uri: "https://storage.yandexcloud.net/parfirova.ru/pdf/%D0%92%D0%B8%D0%B4%D1%8B%20%D0%B3%D0%BB%D0%B0%D0%B3%D0%BE%D0%BB%D0%BE%D0%B2.pdf"}
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
        <h1 className='d-inline-block me-3'>5 класс</h1>
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
