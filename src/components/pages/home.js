import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Keyboard, Pagination, Navigation } from 'swiper';

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
