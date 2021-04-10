import React from 'react';
import { Button, Container } from 'react-bootstrap';

import axios from 'axios';

function HomePage() {
  const [data, setData] = React.useState(null);
  const handleEvent = () => {
    axios.get('/api/home').then((result) => {
      const {
        data: { name },
      } = result;
      setData(name);
    });
  };

  return (
    <Container fluid>
      <p>{data}</p>
      <Button onClick={handleEvent}>Добро Пожаловать</Button>
    </Container>
  );
}

export default HomePage;
