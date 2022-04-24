import React, { useState, useEffect } from 'react';
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

  useEffect(async () => {
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
  }, []);

  const uploadFile = async () => {
    const formData = new FormData();
    formData.append('file', img);

    console.log('img', img);

    // console.log(content);
    // var options = { content };

    // const data = fileFormData.getBuffer();
    // const contentType = 'image/jpeg';
    // const file = new Blob([content], { type: contentType });

    // const file = Buffer.from(content, 'base64');
    // const file = Buffer.from(content, 'base64');

    // console.log(content);
    // const arrayBuffer = await content.arrayBuffer();
    // console.log(arrayBuffer);
    // const myBlob = new Blob([new Uint8Array(arrayBuffer)], {
    // type: content.type,
    // });
    // console.log(myBlob);
    // formData.append('myBlob', myBlob, content.name);
    await api.testGallery(formData);
    // axios({
    //   url: '/api',
    //   method: 'post',
    //   data: formData,
    // });

    // console.log(file, formData);
  };

  const imagesBlock =
    isOpen && images.length ? (
      <Lightbox
        mainSrc={images[photoIndex].src}
        nextSrc={images[(photoIndex + 1) % images.length].src}
        prevSrc={images[(photoIndex + images.length - 1) % images.length].src}
        imageTitle={images[photoIndex].caption}
        imageCaption={
          'Выслушав доклад министра обороны Сергея Шойгу об установлении контроля над городом, глава государства приказал отменить штурм промзоны завода «Азовсталь», где остаются подразделения боевиков.'
        }
        onCloseRequest={() => setIsOpen(false)}
        onMovePrevRequest={() => setPhotoIndex((photoIndex + images.length - 1) % images.length)}
        onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % images.length)}
      />
    ) : null;

  return (
    <Container fluid className='mt-2 mb-5 text-center'>
      <h2>Галерея:</h2>
      {/* <Dropzone onDrop={([acceptedFile]) => setContent(acceptedFile)}>
        {({ getRootProps, getInputProps }) => (
          <section>
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              <p>Drag 'n' drop some files here, or click to select files</p>
            </div>
          </section>
        )}
      </Dropzone>
        */}
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
