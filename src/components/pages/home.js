import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Keyboard, Pagination, Navigation } from 'swiper';
import ymaps from 'ymaps';

ymaps
  .load()
  .then((maps) => {
    // https://yandex.ru/dev/maps/jsapi/doc/2.1/quick-start/index.html?from=jsapi
    const map = new maps.Map('myMap', {
      center: [57.581003, 39.859192],
      zoom: 14,
      controls: ['geolocationControl', 'zoomControl'],
    });

    const myPlacemark = new maps.Placemark(
      [57.581003, 39.859192],
      {
        iconCaption: 'Школа №18',
        balloonContent: '<b>Школа №18</b></br>' + 'Добро пожаловать!',
      },
      {
        preset: 'islands#redIcon',
      }
    );
    map.geoObjects.add(myPlacemark);

    return map;
  })
  .catch((error) => console.log('Failed to load Yandex Maps', error));

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './home.css';

function HomePage() {
  return (
    <Container fluid className='mt-2 mb-5 text-center'>
      <h2>Парфирова Ирина Андреевна</h2>
      <h3>учитель русского языка и литературы</h3>
      <p className='mb-1'>Средняя школа № 18 г. Ярославль</p>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          dynamicBullets: true,
        }}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        navigation={true}
        modules={[Autoplay, Keyboard, Pagination, Navigation]}
        className='mySwiper'
      >
        {[5, 6, 7, 8, 9, 10, 11].map((num) => (
          <SwiperSlide key={num}>
            <Link to={`/${num}th-grade`}>{num} класс</Link>
          </SwiperSlide>
        ))}
      </Swiper>
      <h3 className='mb-2'>Как до нас добраться?</h3>
      <div id='myMap' />
      {/* <div
        onClick={async () => {
          await api.getUsers();
        }}
      >
        Users
      </div> */}
    </Container>
  );
}

export default HomePage;
