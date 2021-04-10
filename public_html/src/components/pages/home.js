import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';

import axios from 'axios';

function HomePage() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const validateFields = (email, password) => {
    if (!email.match(/\w+@\w+\.\w{2,}/i)) return false;
    if (!password) return false;

    return true;
  };

  const handleChange = (e) => {
    const {
      target: { type, value },
    } = e;

    switch (type) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return null;
    }
  };

  const handleSubmit = () => {
    axios
      .post('/api/home', {
        email,
        password,
      })
      .then((response) => {
        console.log(response);

        setEmail('');
        setPassword('');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Container fluid>
      <Form>
        <Form.Group controlId='email'>
          <Form.Label>Email address</Form.Label>
          <Form.Control type='email' placeholder='Enter email' onChange={handleChange} value={email} />
          <Form.Text className='text-muted'>We&apos;ll never share your email with anyone else.</Form.Text>
        </Form.Group>
        <Form.Group controlId='password'>
          <Form.Label>Password</Form.Label>
          <Form.Control type='password' placeholder='Password' onChange={handleChange} value={password} />
        </Form.Group>
        <Button variant='primary' onClick={handleSubmit} disabled={!validateFields(email, password)}>
          Отправить
        </Button>
      </Form>
    </Container>
  );
}

export default HomePage;
