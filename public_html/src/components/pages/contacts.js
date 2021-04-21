import React, { useState } from 'react';
import { Container, Toast } from 'react-bootstrap';
// import L from 'leaflet';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import { YMaps, Map, Placemark } from 'react-yandex-maps';
// https://react-yandex-maps.vercel.app/

// const myIcon = L.icon({
// iconUrl: 'https://logopond.com/logos/27b2b54c837411e9d3056bdf369df840.png',
// iconSize: [25, 25],
// iconAnchor: [12.5, 41],
// popupAnchor: [0, -41],
// });

const data = {
  center: [57.180823, 39.401234],
  zoom: 14,
  controls: ['zoomControl', 'fullscreenControl'],
};

function ContactsPage() {
  const [showA, setShowA] = useState(true);

  const toggleShowA = () => setShowA(!showA);

  return (
    <Container fluid>
      <Toast show={showA} onClose={toggleShowA}>
        <Toast.Header>
          <img src='holder.js/20x20?text=%20' className='rounded mr-2' alt='' />
          <strong className='mr-auto'>Bootstrap</strong>
          <small>11 mins ago</small>
        </Toast.Header>
        <Toast.Body>Woohoo, you&apos;re reading this text in a Toast!</Toast.Body>
      </Toast>
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
      <div
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
      </div>
    </Container>
  );
}

export default ContactsPage;
