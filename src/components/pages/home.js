import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom'

function HomePage() {
    return (
        <Container fluid className='mt-2 mb-5 text-center'>
            <Link to="404">404</Link>
            <h1>Парфирова Ирина Андреевна</h1>
            <h2>Учитель русского языка и литературы</h2>
        </Container>
    );
}

export default HomePage;