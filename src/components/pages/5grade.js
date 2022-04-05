import React from 'react';
import { WordSvg, ExcelSvg, PpointSvg } from '../../assets/svg';

import { Container } from 'react-bootstrap';

function FiveGradePage() {

    return (
        <Container fluid className='mt-2 mb-5 text-center'>
            <p>5 класс</p>
            <a href='#' className='d-block mb-2'>
                <img src={WordSvg} className='me-2' style={{ width: '30px' }} />
                <span>Урок 1</span>
            </a>
            <a href='#' className='d-block mb-2'>
                <img src={ExcelSvg} className='me-2' style={{ width: '30px' }} />
                <span>Урок 2</span>
            </a>
            <a href='#' className='d-block mb-2'>
                <img src={PpointSvg} className='me-2' style={{ width: '30px' }} />
                <span>Урок 3</span>
            </a>
        </Container>
    );
}

export default FiveGradePage;