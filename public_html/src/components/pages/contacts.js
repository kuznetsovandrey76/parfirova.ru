/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Button, Container, Form, Col } from 'react-bootstrap';
// import InputMask from 'react-input-mask';
import axios from 'axios';
// import L from 'leaflet';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

// import { YMaps, Map, Placemark } from 'react-yandex-maps';
// https://react-yandex-maps.vercel.app/

// const myIcon = L.icon({
// iconUrl: 'https://logopond.com/logos/27b2b54c837411e9d3056bdf369df840.png',
// iconSize: [25, 25],
// iconAnchor: [12.5, 41],
// popupAnchor: [0, -41],
// });

// const data = {
//   center: [57.180823, 39.401234],
//   zoom: 14,
//   controls: ['zoomControl', 'fullscreenControl'],
// };

function ContactsPage() {
  const [submit, setSubmit] = useState(false);

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidName, setIsValidName] = useState(false);
  const [isValidMessage, setIsValidMessage] = useState(false);

  // eslint-disable-next-line consistent-return
  const validateFields = (changedInput) => {
    const { email, name, message } = changedInput;

    if (email) {
      return !!email.match(/\w+@\w+\.\w{2,}/i);
    }

    if (name) {
      return name.length > 0;
    }

    if (message) {
      return message.length > 0;
    }
  };

  // eslint-disable-next-line consistent-return
  const handleChange = (changedInput) => {
    const { type, value, valid } = changedInput;

    switch (type) {
      case 'email':
        setEmail(value);
        setIsValidEmail(valid);
        break;
      case 'name':
        setName(value);
        setIsValidName(valid);
        break;
      case 'message':
        setMessage(value);
        setIsValidMessage(valid);
        break;
      case 'phone':
        if (value.match(/[^0-9]/g)) {
          return null;
        }
        setPhone(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = () => {
    if (submit) {
      console.log(email, name, phone, message);
      axios
        .post('/api/contacts', {
          email,
          name,
          phone,
          message,
        })
        .then((response) => {
          console.log(response);
          setEmail('');
          setName('');
          setPhone('');
          setMessage('');
        })
        .catch((error) => {
          console.log(error);
        });
    }

    setSubmit(true);
  };

  // const [showA, setShowA] = useState(true);
  // const toggleShowA = () => setShowA(!showA);

  return (
    <Container fluid>
      {/* <Toast show={showA} onClose={toggleShowA}>
        <Toast.Header>
          <img src='holder.js/20x20?text=%20' className='rounded mr-2' alt='' />
          <strong className='mr-auto'>Bootstrap</strong>
          <small>11 mins ago</small>
        </Toast.Header>
        <Toast.Body>Woohoo, you&apos;re reading this text in a Toast!</Toast.Body>
      </Toast> */}

      {/* <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <Marker position={position} icon={myIcon}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer> */}

      {/* <div
        style={{
          minHeight: '50vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <YMaps>
          <Map
            defaultState={data}
            modules={['control.ZoomControl', 'control.FullscreenControl']}
            width={500}
            height={500}
            onClick={(e) => console.log(e.get('coords'))}
          >
            <Placemark
              geometry={data.center}
              properties={{
                iconCaption: 'Школа №3',
                hintContent: '<strong>МОУ СОШ №3 г. Ростова</strong>',
                balloonContentHeader: '<strong>МОУ СОШ №3 г. Ростова</strong>',
                balloonContentBody: '<em>Ленинская ул., 39</em>',
                balloonContentFooter: 'https://school3-ros.edu.yar.ru/',
              }}
              options={{
                iconColor: 'red',
                preset: 'islands#circleDotIcon',
                // preset: 'islands#violetIcon',
              }}
              modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}
            />
          </Map>
        </YMaps>
      </div> */}

      <Form className='mt-3'>
        <Form.Row>
          <Form.Group controlId='email' as={Col} md='4'>
            <Form.Control
              type='email'
              name='email'
              placeholder='Email'
              onChange={(event) => {
                const {
                  target: { value },
                } = event;
                return handleChange({
                  type: 'email',
                  value,
                  valid: validateFields({ email: value }),
                });
              }}
              value={email}
              isInvalid={submit && !isValidEmail}
            />
            <Form.Control.Feedback type='invalid'>
              Введите адрес электронной почты для обратной связи
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId='name' as={Col} md='4'>
            <Form.Control
              type='text'
              name='name'
              placeholder='Имя'
              onChange={(event) => {
                const {
                  target: { value },
                } = event;
                return handleChange({
                  type: 'name',
                  value,
                  valid: validateFields({ name: value }),
                });
              }}
              value={name}
              isInvalid={submit && !isValidName}
            />
            <Form.Control.Feedback type='invalid'>Введите имя</Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId='phone' as={Col} md='4'>
            <Form.Control
              type='tel'
              name='phone'
              placeholder='Телефон'
              onChange={(event) => {
                const {
                  target: { value },
                } = event;
                return handleChange({
                  type: 'phone',
                  value,
                });
              }}
              value={phone}
            />
          </Form.Group>
        </Form.Row>
        <Form.Group controlId='message'>
          <Form.Control
            type='text'
            name='message'
            as='textarea'
            rows={3}
            placeholder='Сообщение'
            onChange={(event) => {
              const {
                target: { value },
              } = event;
              return handleChange({
                type: 'message',
                value,
                valid: validateFields({ message: value }),
              });
            }}
            value={message}
            isInvalid={submit && !isValidMessage}
          />
          <Form.Control.Feedback type='invalid'>Поле сообщения обязательно для заполнения =)</Form.Control.Feedback>
        </Form.Group>
        <Button
          variant='primary'
          onClick={handleSubmit}
          disabled={submit && (!isValidEmail || !isValidName || !isValidMessage)}
        >
          Отправить
        </Button>
      </Form>
    </Container>
  );
}

export default ContactsPage;
