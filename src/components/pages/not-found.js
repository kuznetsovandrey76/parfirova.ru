import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom'

function NotFoundPage() {
    return (
        <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Container className='text-center'>
                <p className='m-0'>Страница не найдена</p>
                <Link to="/">Вернуться Домой =)</Link>
            </Container>
        </Container>
    );
}

export default NotFoundPage;