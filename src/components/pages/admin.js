import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Form, Button } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';

import api from '../../api';

function AdminPage() {
  const [login, setLogin] = useState('');
  const [pass, setPass] = useState('');

  useEffect(async () => {
    const refreshToken = localStorage.getItem('refreshToken')
    if (refreshToken) {
      await api.checkAuth(refreshToken);
    }
  }, []);

  const history = useHistory();

  const handleChange = (event) => {
    const { target } = event;
    if (target) {
      const { name, value } = target;
      name === 'login' ? setLogin(value) : setPass(value);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLogin('');
    setPass('');

    try {
      console.log(pass);
      const ppp = await api.login({ login, password: pass });


      console.log(1234, ppp);
      // history.push('/');
    } catch (err) {
      console.log(err);
      toast.warn(err.response.data, {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
      });
    }
  };

  return (
    <Container fluid className='mt-2 mb-5'>
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Form onSubmit={handleSubmit} className='mb-3'>
        <Form.Group className='mb-3'>
          <Form.Label>Login</Form.Label>
          <Form.Control
            type='text'
            name='login'
            placeholder='Enter login'
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            name='pass'
            placeholder='Password'
            value={pass}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default AdminPage;
