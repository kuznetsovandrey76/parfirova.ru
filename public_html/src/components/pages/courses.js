import React, { useState } from 'react';
import { Container, Breadcrumb, Row, Col } from 'react-bootstrap';
import ImgsViewer from 'react-images-viewer';
import BootstrapLink from '../shared/bootstrap-link';
import { routes } from '../../constants/routes';

function linkToPhoto(file) {
  return `https://storage.yandexcloud.net/parfirova.ru/courses/${file}`;
}

const data = [
  { src: linkToPhoto('courses-1.jpg'), caption: '' },
  { src: linkToPhoto('courses-2.jpg'), caption: '' },
  { src: linkToPhoto('courses-3.jpg'), caption: '' },
  { src: linkToPhoto('courses-4.jpg'), caption: '' },
  { src: linkToPhoto('courses-5.jpg'), caption: '' },
  { src: linkToPhoto('courses-6.jpg'), caption: '' },
];

function CoursesPage() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const goToNext = () => setCurrentImage(currentImage + 1);
  const goToPrevious = () => setCurrentImage(currentImage - 1);
  const goToImage = (index) => setCurrentImage(index);
  const onClose = () => {
    setCurrentImage(0);
    setIsOpen(false);
  };

  const openImageViewer = (index, event) => {
    event.preventDefault();
    setCurrentImage(index);
    setIsOpen(true);
  };

  return (
    <Container fluid>
      <Breadcrumb>
        <Breadcrumb.Item>
          <BootstrapLink href={routes.HOME} text='Главная' />
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Курсы & Вебинары</Breadcrumb.Item>
      </Breadcrumb>
      <Row className='m-0'>
        {data &&
          data.map((image, index) => (
            <Col xs={12} md={6} lg={4} className='mb-3' key={index}>
              <a href={image.src} key={index} onClick={(event) => openImageViewer(index, event)}>
                <img className='w-100 d-block rounded' src={image.src} />
              </a>
            </Col>
          ))}
      </Row>
      <ImgsViewer
        imgs={data}
        currImg={currentImage}
        isOpen={isOpen}
        onClickNext={goToNext}
        onClickPrev={goToPrevious}
        onClickThumbnail={goToImage}
        onClose={onClose}
        leftArrowTitle='Previous'
        rightArrowTitle='Next'
        closeBtnTitle='Close'
      />
    </Container>
  );
}

export default CoursesPage;
