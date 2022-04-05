import React from 'react';
import { Container } from 'react-bootstrap';

function Footer() {
    return (
        <Container className="text-center my-2">
            ©{new Date().getFullYear()} Парфирова Ирина Андреевна
        </Container>
    );
}

export default Footer;