import React, { useState, useEffect } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
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
            <h1>Парфирова Ирина Андреевна</h1>
            <h2>Учитель русского языка и литературы</h2>
            <p>Средняя школа № 18 г. Ярославль</p>
            <button type="button" onClick={() => setIsOpen(true)}>
                Показать изображения
            </button>
            {imagesBlock}
            <Carousel
                className='my-3'
                animationHandler="fade"
                swipeable={true}
                showThumbs={false}
                showIndicators={false}
            >
                <div>
                    <img src="https://storage.yandexcloud.net/parfirova.ru/gallery/7.jpg" />
                    <div className="legend bg-dark bg-gradient">
                        <p className='my-0'>Legend 1</p>
                    </div>
                </div>
                <div>
                    <img src="https://storage.yandexcloud.net/parfirova.ru/gallery/5.jpg" />
                    <p className="legend bg-dark bg-gradient">Legend 2</p>
                </div>
                <div>
                    <img src="https://storage.yandexcloud.net/parfirova.ru/gallery/17.jpg" />
                    <p className="legend bg-dark bg-gradient">Legend 3</p>
                </div>
            </Carousel>
        </Container>
    );
}

export default HomePage;