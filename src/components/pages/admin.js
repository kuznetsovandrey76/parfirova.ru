import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import Md from 'react-markdown';
import remarkGfm from 'remark-gfm';

import Api from '../../api';

import 'react-toastify/dist/ReactToastify.css';
import './admin.css';

function AdminPage() {
  const [login, setLogin] = useState('');
  const [pass, setPass] = useState('');
  const [text, setText] = useState('');

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
      await Api.signIn(login, pass);
      history.push('/');
    } catch (err) {
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

  const textareaHandler = (e) => {
    e.preventDefault();
    const {
      target: { value },
    } = e;
    setText(value);
  };

  const handleSendPost = async (e) => {
    e.preventDefault();
    setText('');

    try {
      await Api.sendPost(text);
      history.push('/admin');
    } catch (err) {
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
            onChange={handleChange}
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

      <hr />

      <Row className='markdown-post mb-2'>
        <Col>
          <textarea className='w-100 h-100 p-2' onChange={textareaHandler} value={text} />
        </Col>
        <Col>
          <Md key='text' remarkPlugins={[remarkGfm]}>
            {text}
          </Md>
        </Col>
      </Row>
      <Button variant='primary' onClick={handleSendPost}>
        Send Post
      </Button>
    </Container>
  );
}

export default AdminPage;
