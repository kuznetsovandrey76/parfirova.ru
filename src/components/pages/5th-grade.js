import React, { useEffect, useState } from 'react';
// import ReactMarkdown from 'react-markdown';
// import remarkGfm from 'remark-gfm';
import { Container, Card, Row, Col } from 'react-bootstrap';
import Switch from 'react-switch';

// import { WordSvg, ExcelSvg, PpointSvg } from '../../assets/svg';
import api from '../../api';

function FiveGradePage() {
  const [lessons, setLessons] = useState([]);
  const [checked, setChecked] = useState(false);

  useEffect(async () => {
    try {
      const { data } = await api.getLessons();
      setLessons(data);
    } catch (err) {
      console.warn('Cannot get images from server');
    }
  }, []);

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <Container fluid className='mt-2 mb-5'>
      <h1>5 класс</h1>
      <label htmlFor='small-radius-switch'>
        <Switch
          checked={checked}
          onChange={handleChange}
          handleDiameter={28}
          offColor='#08f'
          onColor='#0ff'
          offHandleColor='#0ff'
          onHandleColor='#08f'
          height={40}
          width={70}
          borderRadius={6}
          activeBoxShadow='0px 0px 1px 2px #fffc35'
          uncheckedIcon={
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
                fontSize: 15,
                color: 'orange',
                paddingRight: 2,
              }}
            >
              Off
            </div>
          }
          checkedIcon={
            <svg viewBox='0 0 10 10' height='100%' width='100%' fill='yellow'>
              <circle r={3} cx={5} cy={5} />
            </svg>
          }
          uncheckedHandleIcon={
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
                fontSize: 20,
              }}
            >
              ☹
            </div>
          }
          checkedHandleIcon={
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
                color: 'red',
                fontSize: 18,
              }}
            >
              ♥
            </div>
          }
          className='react-switch'
          id='small-radius-switch'
        />
      </label>
      <hr />
      <Row>
        {lessons.map((lesson, id) => (
          <Col md={6} lg={4} className='mb-3' key={id}>
            <Card>
              <Card.Body>
                <Card.Title>Тема: {lesson.title}</Card.Title>
                <Card.Subtitle className='mb-2 text-muted'>Класс: {lesson.grade}</Card.Subtitle>
                <Card.Text>{lesson.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          // <Container className='p-0 mb-3'>
          //   <h3>{post.title}</h3>
          //   <ReactMarkdown key={id} remarkPlugins={[remarkGfm]}>
          //     {post.text}
          //   </ReactMarkdown>
          // </Container>
        ))}
      </Row>
      {/* <a href='#' className='d-block mb-2'>
        <img src={WordSvg} className='me-2' style={{ width: '30px' }} />
        <span>Урок 1</span>
      </a>
      <a href='#' className='d-block mb-2'>
        <img src={ExcelSvg} className='me-2' style={{ width: '30px' }} />
        <span>Урок 2</span>
      </a>
      <a href='#' className='d-block mb-2'>
        <img src={PpointSvg} className='me-2' style={{ width: '30px' }} />
        <span>Урок 3</span>
      </a> */}
    </Container>
  );
}

export default FiveGradePage;
