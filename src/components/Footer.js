import React from 'react';
import { Container } from 'react-bootstrap';

function Footer() {
    return (
        <Container className="text-center">
            ©{new Date().getFullYear()} Парфирова Ирина Андреевна
        </Container>
    );
}

export default Footer;