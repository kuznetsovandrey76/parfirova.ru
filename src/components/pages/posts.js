import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Button, Row, Col } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import Md from 'react-markdown';
import remarkGfm from 'remark-gfm';

import api from '../../api';

import './posts.css';

function PostsPage() {
  const [text, setText] = useState('');

  const history = useHistory();

  const textareaHandler = (e) => {
    e.preventDefault();
    const {
      target: { value },
    } = e;
    setText(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setText('');

    try {
      await api.sendPost(text);
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

      <Row className='markdown-post mb-2'>
        <Col>
          <textarea
            className='w-100 h-100 p-2'
            onChange={textareaHandler}
            value={text}
            style={{ resize: 'none' }}
          />
        </Col>
        <Col>
          <Md key='text' remarkPlugins={[remarkGfm]}>
            {text}
          </Md>
        </Col>
      </Row>
      <Button variant='primary' onClick={handleSubmit}>
        Send Post
      </Button>
    </Container>
  );
}

export default PostsPage;
