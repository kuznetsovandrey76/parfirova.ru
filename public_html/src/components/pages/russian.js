import React from 'react';
import { Button, Card, Container, Row, Col } from 'react-bootstrap';

function RussianPage() {
  return (
    <Container fluid>
      <h3 className='mb-3'>Русский язык</h3>
      <Row>
        <Col xs={12} md={6} lg={4} className='mb-3'>
          <Card>
            <Card.Body>
              <Card.Title>1 lesson</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card&apos;s content.
              </Card.Text>
              <Button variant='primary'>Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={6} lg={4} className='mb-3'>
          <Card>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card&apos;s content.
              </Card.Text>
              <Button variant='primary'>Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={6} lg={4} className='mb-3'>
          <Card>
            <Card.Body>
              <Card.Title>Широкая масленица</Card.Title>
              <Card.Text>Возрождение русских национальных традиций, воспитание у учащихся патриотизма</Card.Text>
              <Button variant='info' block href='https://disk.yandex.ru/i/hpGyRO5tKlETtw' target='_blank'>
                Посмотреть
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={6} lg={4} className='mb-3'>
          <Card bg='light' text='dark'>
            <Card.Header>Открытый урок</Card.Header>
            <Card.Body>
              <Card.Title>Широкая масленица</Card.Title>
              <Card.Text>Возрождение русских национальных традиций, воспитание у учащихся патриотизма</Card.Text>
              <Button variant='info' block href='https://disk.yandex.ru/i/hpGyRO5tKlETtw' target='_blank'>
                Посмотреть
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default RussianPage;
