import React, { useState, useEffect, createRef } from 'react';
import { Container, Spinner } from 'react-bootstrap';
import Lightbox from 'react-image-lightbox';
import api from '@api';
import { getNod } from '../utils';
import Gallery from 'react-photo-gallery';

function ThirdSchoolPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        await getImages();
      } catch (err) {
        console.warn('Cannot get images from server');
      } finally {
        // todo: Add progress bar
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

  async function getImages() {
    const response = await api.getThirdSchool();
    const { data: images } = response;

    const imagePromises = images.map((image, idx) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = function () {
          const nod = getNod(this.width, this.height);
          resolve({
            ...image,
            src: image.location,
            width: this.width / nod,
            height: this.height / nod,
            idx,
          });
        };
        img.onerror = () => {
          resolve({
            src: 'https://storage.yandexcloud.net/parfirova.ru/const/not-found.jpg',
            width: 3,
            height: 2,
            idx,
          });
        };
        img.src = image.location;
      });
    });

    const transformImages = await Promise.all(imagePromises);
    setImages(transformImages);
  }

  const imagesBlock =
    isOpen && images.length ? (
      <Lightbox
        mainSrc={images[photoIndex].src}
        nextSrc={images[(photoIndex + 1) % images.length].src}
        prevSrc={images[(photoIndex + images.length - 1) % images.length].src}
        imageTitle={images[photoIndex].title}
        imageCaption={images[photoIndex].caption}
        onCloseRequest={() => setIsOpen(false)}
        onMovePrevRequest={() => setPhotoIndex((photoIndex + images.length - 1) % images.length)}
        onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % images.length)}
      />
    ) : null;

  return (
    <Container fluid className='mt-2 mb-5 text-center'>
      <h2>3 школа, Ростов Великий</h2>
      {isLoading ? (
        <Spinner animation='border' variant='danger' />
      ) : (
        <>
          <Gallery
            photos={images}
            direction={'row'}
            onClick={(e) => {
              setPhotoIndex(e.target.attributes.idx.value);
              setIsOpen(true);
            }}
          />
          {imagesBlock}
        </>
      )}
    </Container>
  );
}

export default ThirdSchoolPage;
