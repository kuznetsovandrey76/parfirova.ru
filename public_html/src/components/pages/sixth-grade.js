import React from 'react';
import { Container, Breadcrumb } from 'react-bootstrap';
import BootstrapLink from '../shared/bootstrap-link';
import { routes } from '../../constants/routes';

function sixthGradePage() {
  return (
    <Container fluid>
      <Breadcrumb>
        <Breadcrumb.Item>
          <BootstrapLink href={routes.HOME} text='Главная' />
        </Breadcrumb.Item>
        <Breadcrumb.Item active>6 класс</Breadcrumb.Item>
      </Breadcrumb>
    </Container>
  );
}

export default sixthGradePage;
