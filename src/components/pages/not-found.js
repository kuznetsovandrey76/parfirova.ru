import React from 'react';
import { Container, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom'

function NotFoundPage() {
    return (
        <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px' }}>

            <Container className='text-center'>
                <p className='m-0'>Страница не найдена</p>
                <Container className='my-2'>
                    <Spinner animation="border" variant="danger" />
                </Container>
                <Link to="/">Вернуться Домой =)</Link>
            </Container>
        </Container>
    );
}

export default NotFoundPage;