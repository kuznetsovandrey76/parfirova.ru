/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';
import { Button, Card, Container, Row, Col, Breadcrumb } from 'react-bootstrap';
import axios from 'axios';
import BootstrapLink from '../shared/bootstrap-link';
import { routes } from '../../constants/routes';

function RussianPage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios
      .get('/api/russian')
      .then((response) => {
        setData(response.data);
        setLoading(true);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const notes = (data) =>
    data.map((note) => {
      const { id, header, title, text, summary_link } = note;

      return (
        <Col xs={12} md={6} lg={4} className='mb-3' key={id}>
          <Card bg='light' text='dark'>
            <Card.Header>{header}</Card.Header>
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>{text}</Card.Text>
              <Button variant='info' block href={summary_link} target='_blank'>
                Посмотреть
              </Button>
            </Card.Body>
          </Card>
        </Col>
      );
    });

  return (
    <Container fluid>
      <Breadcrumb>
        <Breadcrumb.Item>
          <BootstrapLink href={routes.HOME} text='Главная' />
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Русский язык</Breadcrumb.Item>
      </Breadcrumb>
      {loading && <Row>{notes(data)}</Row>}
    </Container>
  );
}

export default RussianPage;
