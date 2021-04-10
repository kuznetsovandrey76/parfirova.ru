import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';

import axios from 'axios';

function HomePage() {
  const [data, setData] = React.useState(null);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleChange = (e) => {
    const {
      target: { type, value },
    } = e;

    console.log(type, value);

    switch (type) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return null;
    }
  };

  const handleEvent = () => {
    // axios.post('/api/home').then((result) => {
    //   const {
    //     data: { name },
    //   } = result;
    //   setData(name);
    // });

    axios
      .post('/api/home', {
        email,
        password,
      })
      .then((response) => {
        console.log(response);

        setData(response.status);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Container fluid>
      <p>{data}</p>
      <p>{`email: ${email}, password: ${password}`}</p>
      <Form>
        <Form.Group controlId='email'>
          <Form.Label>Email address</Form.Label>
          <Form.Control type='email' placeholder='Enter email' onChange={handleChange} />
          <Form.Text className='text-muted'>We&apos;ll never share your email with anyone else.</Form.Text>
        </Form.Group>
        <Form.Group controlId='password'>
          <Form.Label>Password</Form.Label>
          <Form.Control type='password' placeholder='Password' onChange={handleChange} />
        </Form.Group>
        <Button variant='primary' onClick={handleEvent}>
          Отправить
        </Button>
      </Form>
    </Container>
  );
}

export default HomePage;
