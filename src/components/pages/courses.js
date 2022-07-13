import React, { useState, useEffect } from 'react';
import Lightbox from 'react-image-lightbox';
import api from '@api';

function CoursePage() {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [images, setImages] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await api.getCourses();
        const { data: images } = response;

        setImages(images);
      } catch (err) {
        console.warn('Cannot get images from server');
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <p>Пройденные курсы:</p>
      <button type='button' onClick={() => setIsOpen(true)}>
        Показать изображения
      </button>
      {isOpen && images.length && (
        <Lightbox
          mainSrc={images[photoIndex].src}
          nextSrc={images[(photoIndex + 1) % images.length].src}
          prevSrc={images[(photoIndex + images.length - 1) % images.length].src}
          imageTitle={images[photoIndex].caption}
          imageCaption={images[photoIndex].caption}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() => setPhotoIndex((photoIndex + images.length - 1) % images.length)}
          onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % images.length)}
        />
      )}
    </>
  );
}

export default CoursePage;
