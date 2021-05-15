import React, { useState } from 'react';
import ImgsViewer from 'react-images-viewer';
import { Row, Col } from 'react-bootstrap';
import { photos } from '../../assets/photos';

function GalleryPage() {
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
        {photos &&
          photos.map((image, index) => (
            <Col xs={12} md={6} lg={4} className='mb-3' key={index}>
              <a href={image.src} key={index} onClick={(event) => openImageViewer(index, event)}>
                <img className='w-100 d-block rounded' src={image.src} />
              </a>
            </Col>
          ))}
      </Row>
      <ImgsViewer
        imgs={photos}
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

export default GalleryPage;
