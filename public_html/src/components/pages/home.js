import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import ImgsViewer from 'react-images-viewer';

function linkToPhoto(file) {
  return `https://parfirova.s3.eu-west-3.amazonaws.com/images/events/${file}`;
}

const data = [
  { src: linkToPhoto('ped-debut-1.jpg'), caption: '"Учитель года России" 2018 г.' },
  { src: linkToPhoto('ped-debut-2.jpg'), caption: '"Учитель года России" 2018 г.' },
];

function HomePage() {
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
    <>
      <Row className='m-0'>
        {data &&
          data.map((image, index) => (
            <Col xs={12} md={6} lg={4} className='mb-3' key={index}>
              <a href={image.src} key={index} onClick={(event) => openImageViewer(index, event)}>
                <img className='w-100 d-block rounded rounded' src={image.src} />
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
    </>
  );
}

export default HomePage;
