import React from 'react';
import { Container, Breadcrumb } from 'react-bootstrap';
import BootstrapLink from '../shared/bootstrap-link';
import { routes } from '../../constants/routes';

function ContestsPage() {
  return (
    <Container fluid>
      <Breadcrumb>
        <Breadcrumb.Item>
          <BootstrapLink href={routes.HOME} text='Главная' />
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Конкурсы</Breadcrumb.Item>
      </Breadcrumb>
    </Container>
  );
}

export default ContestsPage;
