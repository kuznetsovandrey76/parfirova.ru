import React from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';
import './5th-grade.css';
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";

const currentLessons = [{
  title: 'Урок по рассказу Александра Цыпкина "Томатный сок или повесть о женщине из другого времени"',
  subject: 'Литература',
  description: 'https://disk.yandex.ru/i/4APLe20d2_fAgQ',
  date: '21.12.2022'
}, {
  title: 'Урок-размышление по рассказу Федора Александровича Абрамова "О чем плачут лошади"',
  subject: 'Литература',
  description: 'https://disk.yandex.ru/i/opl3RZ6M4OdWFg',
  date: '14.05.2022'
}, {
  title: 'Урок. Слитное написание союзов ТОЖЕ, ТАКЖЕ, ЧТОБЫ, ЗАТО',
  subject: 'Русский язык',
  description: 'https://disk.yandex.ru/i/n8zMmX8vaVTrUQ',
  date: '14.04.2022'
}]

const docs = [
  { uri: "https://storage.yandexcloud.net/parfirova.ru/pdf/%D0%A2%D0%BE%D0%BC%D0%B0%D1%82%D0%BD%D1%8B%D0%B9%20%D1%81%D0%BE%D0%BA%20%D0%B8%D0%BB%D0%B8%20%D0%BF%D0%BE%D0%B2%D0%B5%D1%81%D1%82%D1%8C%20%D0%BE%20%D0%B6%D0%B5%D0%BD%D1%89%D0%B8%D0%BD%D0%B5%20%D0%B8%D0%B7%20%D0%B4%D1%80%D1%83%D0%B3%D0%BE%D0%B3%D0%BE%20%D0%B2%D1%80%D0%B5%D0%BC%D0%B5%D0%BD%D0%B8.pdf"},
  { uri: "https://storage.yandexcloud.net/parfirova.ru/pdf/%D0%A3%D1%80%D0%BE%D0%BA%20%D0%BE%20%D1%87%D0%B5%D0%BC%20%D0%BF%D0%BB%D0%B0%D1%87%D1%83%D1%82%20%D0%BB%D0%BE%D1%88%D0%B0%D0%B4%D0%B8.pdf"},
  { uri: "https://storage.yandexcloud.net/parfirova.ru/pdf/%D0%A1%D0%BB%D0%B8%D1%82%D0%BD%D0%BE%D0%B5%20%D0%BD%D0%B0%D0%BF%D0%B8%D1%81%D0%B0%D0%BD%D0%B8%D0%B5%20%D1%81%D0%BE%D1%8E%D0%B7%D0%BE%D0%B2.pdf"}
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
        <h1 className='d-inline-block me-3'>7 класс</h1>
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
