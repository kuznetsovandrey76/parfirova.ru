import React, { useState, useEffect } from 'react';
import { Container, Form, Button, Spinner } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';

import api from '../../api';
import { checkAuth } from '../helpers'

function AdminPage() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(async () => {
    setIsLoading(true);
    const auth = await checkAuth()
    setIsAuth(auth)
    setIsLoading(false);
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLogin('');
    setPassword('');

    try {
      setIsLoading(true);

      await api.login({ login, password });
      const auth = await checkAuth()
      setIsAuth(auth)
      setIsLoading(false);
    } catch (err) {
      toast.warn(err && err.response && err.response.data, {
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

  const authBlock = isAuth ? <div>Вы авторизованы</div> :
    <Form onSubmit={handleSubmit} className='mb-3'>
      <Form.Group className='mb-3'>
        <Form.Label>Логин</Form.Label>
        <Form.Control
          type='text'
          placeholder='Введите логин'
          value={login}
          onChange={(e) => setLogin(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group className='mb-3'>
        <Form.Label>Пароль</Form.Label>
        <Form.Control
          type='password'
          placeholder='Введите пароль'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </Form.Group>
      <Button variant='primary' type='submit'>
        Submit
      </Button>
    </Form>

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
      {isLoading ? <Spinner animation="border" variant="danger" /> : authBlock}
    </Container>
  );
}

export default AdminPage;
