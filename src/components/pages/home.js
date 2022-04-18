import React from 'react';
import { Container } from 'react-bootstrap';
import api from '../../api';

function HomePage() {
  return (
    <Container fluid className='mt-2 mb-5 text-center'>
      <h2>Парфирова Ирина Андреевна</h2>
      <h3>Учитель русского языка и литературы</h3>
      <p>Средняя школа № 18 г. Ярославль</p>
      <div
        onClick={async () => {
          await api.getUsers();
        }}
      >
        Users
      </div>
    </Container>
  );
}

export default HomePage;
