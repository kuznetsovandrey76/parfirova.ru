import React, { useState } from 'react';
import { Container, Toast } from 'react-bootstrap';

function GalleryPage() {
  const [showA, setShowA] = useState(true);

  const toggleShowA = () => setShowA(!showA);

  return (
    <Container fluid>
      <Toast show={showA} onClose={toggleShowA}>
        <Toast.Header>
          <img src='holder.js/20x20?text=%20' className='rounded mr-2' alt='' />
          <strong className='mr-auto'>Bootstrap</strong>
          <small>11 mins ago</small>
        </Toast.Header>
        <Toast.Body>Woohoo, you&apos;re reading this text in a Toast!</Toast.Body>
      </Toast>
    </Container>
  );
}

export default GalleryPage;
