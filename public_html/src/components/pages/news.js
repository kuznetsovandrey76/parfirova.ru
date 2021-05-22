import React from 'react';
import { Card, Container } from 'react-bootstrap';

function NewsPage() {
  return (
    <Container fluid>
      <Card className='col-11 w-100 p-3 mx-auto mb-3'>
        <Card.Body style={{ padding: 0 }}>
          <Card.Title>Последний звонок 9Б</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of the card&apos;s content.
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default NewsPage;
