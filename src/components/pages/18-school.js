import React, { useState, useEffect, createRef } from 'react';
import { Container } from 'react-bootstrap';
import Lightbox from 'react-image-lightbox';
import api from '@api';
import { getNod } from '../utils';
import Gallery from 'react-photo-gallery';

function EighteenSchoolPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [images, setImages] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await api.getEighteenSchool();
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
      } catch (err) {
        console.warn('Cannot get images from server');
      }
    }
    fetchData();
  }, []);

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
    <>
      <h2>18 школа, Ярославль</h2>
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
  );
}

export default EighteenSchoolPage;
