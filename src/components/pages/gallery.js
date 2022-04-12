import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Lightbox from 'react-image-lightbox';
import Api from '../../api';
import { getNod } from '../utils';
import Gallery from 'react-photo-gallery';

function GalleryPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [images, setImages] = useState([]);

  useEffect(async () => {
    try {
      const response = await Api.getGallery();
      const { data: images } = response;

      const imagePromises = images.map((image, idx) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = function () {
            const nod = getNod(this.width, this.height);
            resolve({
              ...image,
              width: this.width / nod,
              height: this.height / nod,
              // custom attr
              idx,
            });
          };
          img.onerror = () => {
            // todo: Image not found
            resolve({
              src: 'https://storage.yandexcloud.net/parfirova.ru/gallery/1.jpg',
              width: 1,
              height: 1,
              idx,
            });
          };
          img.src = image.src;
        });
      });

      const transformImages = await Promise.all(imagePromises);

      setImages(transformImages);
    } catch (err) {
      console.warn('Cannot get images from server');
    }
  }, []);

  const imagesBlock =
    isOpen && images.length ? (
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
    ) : null;

  return (
    <Container fluid className='mt-2 mb-5 text-center'>
      <h2>Галерея:</h2>
      <Gallery
        photos={images}
        direction={'row'}
        onClick={(e) => {
          setPhotoIndex(e.target.attributes.idx.value);
          setIsOpen(true);
        }}
      />
      {imagesBlock}
    </Container>
  );
}

export default GalleryPage;
