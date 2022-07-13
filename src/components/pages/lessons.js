import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Row, Col } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';

import api from '@api';
import './lessons.css';

function lessonsPage() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [crntGrade, setCrntGrade] = useState(5);

  const navigate = useNavigate();

  const titleHandler = (e) => {
    e.preventDefault();
    const {
      target: { value },
    } = e;
    setTitle(value);
  };

  const descriptionHandler = (e) => {
    e.preventDefault();
    const {
      target: { value },
    } = e;
    setDescription(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.sendLesson({
        grade: crntGrade,
        title,
        description,
        active: true,
      });
      navigate('/');
    } catch (err) {
      toast.warn(err.response && err.response.data, {
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
    <>
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

      <h3>Выберите класс:</h3>
      <Row className='mb-2'>
        <Col className='d-flex' style={{ justifyContent: 'space-between' }}>
          {[5, 6, 7, 8, 9, 10, 11].map((num) => {
            return (
              <Button
                key={num}
                variant={crntGrade === num ? 'success' : 'outline-secondary'}
                onClick={() => {
                  setCrntGrade(num);
                }}
                className='lessons-grade-btn'
              >
                {num}
              </Button>
            );
          })}
        </Col>
      </Row>

      <h3>Заголовок</h3>
      <Row>
        <Col>
          <input className='w-100 p-2' onChange={titleHandler} value={title} />
        </Col>
      </Row>

      <h3>Описание</h3>
      <Row>
        <Col>
          <textarea
            className='w-100 h-100 p-2'
            onChange={descriptionHandler}
            value={description}
            style={{ resize: 'none' }}
          />
        </Col>
      </Row>

      <Button className='my-3' variant='primary' onClick={handleSubmit}>
        Отправить
      </Button>
    </>
  );
}

export default lessonsPage;
