import React, { useState, useEffect, createRef } from 'react';
import Dropzone from 'react-dropzone';
import { Container } from 'react-bootstrap';
import Lightbox from 'react-image-lightbox';
import api from '../../api';
import { getNod } from '../utils';
import Gallery from 'react-photo-gallery';
import axios from 'axios';

function GalleryPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [images, setImages] = useState([]);
  const [content, setContent] = useState(null);
  const [img, setImg] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await api.getGallery();
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
                src: 'https://storage.yandexcloud.net/parfirova.ru/const/not-found.jpg',
                width: 3,
                height: 2,
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
    }
    fetchData();
  }, []);

  const dropzoneRef = createRef();
  const openDialog = () => {
    // Note that the ref is set async,
    // so it might be null at some point
    if (dropzoneRef.current) {
      dropzoneRef.current.open();
    }
  };

  const uploadFile = async () => {
    const formData = new FormData();
    formData.append('file', img);

    await api.testGallery(formData);
  };

  const imagesBlock =
    isOpen && images.length ? (
      <Lightbox
        mainSrc={images[photoIndex].src}
        nextSrc={images[(photoIndex + 1) % images.length].src}
        prevSrc={images[(photoIndex + images.length - 1) % images.length].src}
        imageTitle={images[photoIndex].caption}
        imageCaption='Описание'
        onCloseRequest={() => setIsOpen(false)}
        onMovePrevRequest={() => setPhotoIndex((photoIndex + images.length - 1) % images.length)}
        onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % images.length)}
      />
    ) : null;

  return (
    <Container fluid className='mt-2 mb-5 text-center'>
      <h2>Галерея:</h2>
      <Dropzone ref={dropzoneRef} noClick noKeyboard>
        {({ getRootProps, getInputProps, acceptedFiles }) => {
          return (
            <div className='container'>
              <div {...getRootProps({ className: 'dropzone' })}>
                <input {...getInputProps()} />
                <p>Drag 'n' drop some files here</p>
                <button type='button' onClick={openDialog}>
                  Open File Dialog
                </button>
              </div>
              <aside>
                <h4>Files</h4>
                <ul>
                  {acceptedFiles.map((file) => (
                    <li key={file.path}>
                      {file.path} - {file.size} bytes
                    </li>
                  ))}
                </ul>
              </aside>
            </div>
          );
        }}
      </Dropzone>
      {/* <Dropzone onDrop={([acceptedFile]) => setImg(acceptedFile)}>
        {({ getRootProps, getInputProps }) => (
          <section>
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              <p>Drag 'n' drop some files here, or click to select files</p>
            </div>
          </section>
        )}
      </Dropzone> */}

      <hr />
      <input
        type='file'
        onChange={(e) => {
          console.log(e.target.files);
          setImg(e.target.files[0]);
        }}
      />
      <button onClick={uploadFile}>Click</button>
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
