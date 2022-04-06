import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Lightbox from 'react-image-lightbox';
import Api from '../../api'

function GalleryPage() {
    const [isOpen, setIsOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);
    const [images, setImages] = useState([]);

    useEffect(async () => {
        try {
            const response = await Api.getGallery()
            const { data: images } = response

            setImages(images);
        } catch (err) {
            console.warn('Cannot get images from server');
        }

    }, [])

    const imagesBlock = isOpen && images.length ? (
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
            <p>Галерея:</p>
            <button type="button" onClick={() => setIsOpen(true)}>
                Показать изображения
            </button>
            {imagesBlock}
        </Container>
    );
}

export default GalleryPage;