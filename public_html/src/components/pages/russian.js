import React, { useEffect, useState } from 'react';
import { Button, Card, Container, Row, Col, Breadcrumb } from 'react-bootstrap';
import axios from 'axios';
import BootstrapLink from '../shared/bootstrap-link';
import { routes } from '../../constants/routes';

const styleTransformMap = new Map([
  ['word', 'primary'],
  ['excel', 'success'],
  ['ppoint', 'danger'],
  ['default', 'secondary'],
]);

function RussianPage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios
      .get('/api/russian')
      .then((response) => {
        const { data } = response;

        setData(data);
        setLoading(true);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const notes = (data) =>
    data.map((note) => {
      const { id, header, title, text, type, summaryLink } = note;

      return (
        <Col xs={12} sm={6} md={6} lg={4} xl={3} className='mb-3' key={id}>
          <Card bg='light' text='dark' border={styleTransformMap.get(type) || styleTransformMap.get('default')}>
            <Card.Header>{header}</Card.Header>
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>{text}</Card.Text>
              <Button variant='default' block href={summaryLink} target='_blank' className={`btn-image ${type}-btn`} />
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
