import React, { useState, useEffect, createRef, useMemo } from 'react';
import Dropzone, { useDropzone } from 'react-dropzone';
import Lightbox from 'react-image-lightbox';
import api from '@api';
import { getNod } from '../utils';
import Gallery from 'react-photo-gallery';
import axios from 'axios';

function GalleryPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [images, setImages] = useState([]);
  const [content, setContent] = useState(null);
  const [img, setImg] = useState(null);
  const [imgs, setImgs] = useState(null);

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
  const openDialog = (files) => {
    console.log(222, files);
    // Note that the ref is set async,
    // so it might be null at some point
    if (dropzoneRef.current) {
      dropzoneRef.current.open();
    }
  };

  const sendFiles = async (files, getInputProps) => {
    console.log(123, files, files.length, getInputProps());
    const formData = new FormData();
    files.forEach((file) => {
      formData.append('file', file);
    });

    // formData.append('file', files);

    await api.testGallery(formData);
  };

  const test = (files, getInputProps) => {
    console.log(99999, files, getInputProps());
  };

  const uploadFile = async () => {
    const formData = new FormData();
    formData.append('file', img);

    await api.testGallery(formData);
  };

  const baseStyle = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    borderWidth: 2,
    borderRadius: 2,
    borderColor: 'lightgrey',
    borderStyle: 'dashed',
    backgroundColor: '#fafafa',
    color: 'grey',
    outline: 'none',
    transition: 'border .24s ease-in-out',
    maxWidth: '600px',
    margin: '0 auto',
  };

  const focusedStyle = {
    borderColor: '#2196f3',
  };

  const acceptStyle = {
    borderColor: '#00e676',
  };

  const rejectStyle = {
    borderColor: '#ff1744',
  };

  const { getRootProps, getInputProps, isFocused, isDragAccept, isDragReject } = useDropzone({
    accept: { 'image/*': [] },
  });

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isFocused ? focusedStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isFocused, isDragAccept, isDragReject]
  );

  function StyledDropzone(props) {
    const { getRootProps, getInputProps, isFocused, isDragAccept, isDragReject } = useDropzone({
      accept: { 'image/*': [] },
    });

    return (
      <div className='container'>
        <div {...getRootProps({ style })}>
          <input {...getInputProps()} />
          <p>Drag 'n' drop some files here, or click to select files</p>
        </div>
      </div>
    );
  }

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
    <>
      <h2>Галерея:</h2>
      {/* https://react-dropzone.js.org/#src */}
      {/*<StyledDropzone />*/}
      <Dropzone className='gallery-page-dropzone' ref={dropzoneRef} noKeyboard>
        {/*<Dropzone ref={dropzoneRef} noClick noKeyboard>*/}
        {({ getRootProps, getInputProps, acceptedFiles }) => {
          console.log({ acceptedFiles });
          return (
            <div className='container'>
              <div {...getRootProps({ style })}>
                {/*<div {...getRootProps({ className: 'dropzone' })}>*/}
                {/*<input*/}
                {/*  {...getInputProps()}*/}
                {/*  onChange={() => test()}*/}
                {/*/>*/}
                {/*<p>Перетяните файлы сюда</p>*/}
                <input {...getInputProps()} />
                <p className='mb-0'>Перетащите сюда фотографии</p>
                {/*<button type='button' onClick={() => openDialog(acceptedFiles)}>*/}
                {/*   Выберите файлы*/}
                {/*</button>*/}
              </div>
              <aside>
                {/*<h4>Добавленный файлы</h4>*/}
                <ul>
                  {acceptedFiles.map((file) => (
                    <li key={file.path}>
                      {file.path} - {file.size} bytes
                    </li>
                  ))}
                </ul>
                <button
                  type='button'
                  disabled={!acceptedFiles.length}
                  onClick={() => sendFiles(acceptedFiles, getInputProps)}
                >
                  Отправить файлы
                </button>
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

      {/*<hr />*/}
      {/*<input*/}
      {/*  type='file'*/}
      {/*  onChange={(e) => {*/}
      {/*    console.log(11111, e.target.files);*/}
      {/*    setImg(e.target.files[0]);*/}
      {/*  }}*/}
      {/*/>*/}
      {/*<button onClick={uploadFile}>Click</button>*/}
      {/*<Gallery*/}
      {/*  photos={images}*/}
      {/*  direction={'row'}*/}
      {/*  onClick={(e) => {*/}
      {/*    setPhotoIndex(e.target.attributes.idx.value);*/}
      {/*    setIsOpen(true);*/}
      {/*  }}*/}
      {/*/>*/}
      {/*{imagesBlock}*/}
    </>
  );
}

export default GalleryPage;
