import React, { useEffect, useState } from 'react';
import { Container, Card, Row, Col, Spinner } from 'react-bootstrap';

import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { LeftArrow, RightArrow } from '../shared/arrows';
import Card2 from '../shared/card';
import useDrag from '../shared/useDrag';

import Switch from 'react-switch';

import api from '../../api';

import './5th-grade.css';

const elemPrefix = 'test';
const getId = (index) => `${elemPrefix}${index}`;

const getItems = () =>
  Array(20)
    .fill(0)
    .map((_, ind) => ({ id: getId(ind) }));

function FiveGradePage() {
  const [isLoading, setIsLoading] = useState(false);
  const [lessons, setLessons] = useState([]);
  const [checked, setChecked] = useState(false);
  const [currentLessons, setCurrentLessons] = useState([]);

  const [items] = React.useState(getItems);

  // NOTE: for drag by mouse
  const { dragStart, dragStop, dragMove, dragging } = useDrag();
  const handleDrag =
    ({ scrollContainer }) =>
    (ev) =>
      dragMove(ev, (posDiff) => {
        if (scrollContainer.current) {
          scrollContainer.current.scrollLeft += posDiff;
        }
      });

  const [selected, setSelected] = React.useState('');
  const handleItemClick = (itemId) => {
    if (dragging) {
      return false;
    }
    setSelected(selected !== itemId ? itemId : '');
  };

  useEffect(async () => {
    try {
      setIsLoading(true);
      const { data } = await api.getLessons();
      setLessons(data);
      setCurrentLessons(
        data.filter(
          (lesson) =>
            (lesson.subject === 'Русский язык' && !checked) ||
            (lesson.subject === 'Литература' && checked)
        )
      );
      setIsLoading(false);
    } catch (err) {
      console.warn('Cannot get images from server');
    }
  }, []);

  useEffect(async () => {
    setCurrentLessons(
      lessons.filter(
        (lesson) =>
          (lesson.subject === 'Русский язык' && !checked) ||
          (lesson.subject === 'Литература' && checked)
      )
    );
  }, [checked]);

  const lessonsBlock = (
    <Row>
      {currentLessons.map((lesson, id) => (
        <Col md={6} lg={4} className='mb-3' key={id}>
          <Card>
            <Card.Body>
              <Card.Title>Тема: {lesson.title}</Card.Title>
              <Card.Subtitle>{lesson.subject}</Card.Subtitle>
              <Card.Text>{lesson.description}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );

  return (
    <Container fluid className='mt-2 mb-5'>
      <div onMouseLeave={dragStop} className='mb-3'>
        <ScrollMenu
          // LeftArrow={LeftArrow}
          // RightArrow={RightArrow}
          // onWheel={onWheel}
          onMouseDown={() => dragStart}
          onMouseUp={() => dragStop}
          onMouseMove={handleDrag}
        >
          {items.map(({ id }) => (
            <Card2
              title={id}
              itemId={id} // NOTE: itemId is required for track items
              key={id}
              onClick={() => handleItemClick(id)}
              selected={id === selected}
            />
          ))}
        </ScrollMenu>
      </div>
      <div className='d-flex mb-3'>
        <h1 className='d-inline-block me-3'>5 класс</h1>
        <Switch
          checked={checked}
          onChange={() => setChecked(!checked)}
          handleDiameter={36}
          onColor='#87e6de'
          offColor='#008000'
          offHandleColor='#fff'
          onHandleColor='#fff'
          height={42}
          width={160}
          activeBoxShadow='0px 0px 1px 2px #fffc35'
          checkedIcon={
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
                fontSize: 16,
                fontWeight: 'bolder',
                color: 'black',
                paddingLeft: 60,
                left: 0,
                width: '20',
              }}
            >
              Литература
            </div>
          }
          uncheckedIcon={
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
                fontSize: 16,
                color: 'white',
                fontWeight: 'bolder',
                paddingRight: 80,
                whiteSpace: 'nowrap',
              }}
            >
              Русский язык
            </div>
          }
          className='react-switch mt-1'
          id='small-radius-switch'
        />
      </div>
      <hr />
      {isLoading ? <Spinner animation='border' variant='danger' /> : lessonsBlock}
    </Container>
  );
}

function onWheel(apiObj, ev) {
  const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;

  if (isThouchpad) {
    ev.stopPropagation();
    return;
  }

  if (ev.deltaY < 0) {
    apiObj.scrollNext();
  } else if (ev.deltaY > 0) {
    apiObj.scrollPrev();
  }
}

export default FiveGradePage;
