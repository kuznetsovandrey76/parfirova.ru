import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Lightbox from 'react-image-lightbox';
import axios from 'axios';

function HomePage() {
    const [isOpen, setIsOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);
    const [images, setImages] = useState([]);

    useEffect(async () => {
        try {
            const response = await axios.get(process.env.API_URL)
            const { data: images } = response

            setImages(images);
        } catch (err) {
            console.warn('Cannot get images from server');
        }

    }, [])

    return (
        <Container fluid className='mt-2 mb-5 text-center'>
            <h1>Парфирова Ирина Андреевна</h1>
            <h2>Учитель русского языка и литературы</h2>
            <p>Средняя школа № 18 г. Ярославль</p>
            <button type="button" onClick={() => setIsOpen(true)}>
                Показать изображения
            </button>
            {isOpen && images.length && (
                <Lightbox
                    mainSrc={images[photoIndex].src}
                    nextSrc={images[(photoIndex + 1) % images.length].src}
                    prevSrc={images[(photoIndex + images.length - 1) % images.length].src}
                    imageCaption={images[photoIndex].caption}
                    onCloseRequest={() => setIsOpen(false)}
                    onMovePrevRequest={() => setPhotoIndex((photoIndex + images.length - 1) % images.length)}
                    onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % images.length)}
                />
            )}
        </Container>
    );
}

export default HomePage;