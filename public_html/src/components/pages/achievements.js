import React from 'react';
import { Container, Breadcrumb } from 'react-bootstrap';
import BootstrapLink from '../shared/bootstrap-link';
import { routes } from '../../constants/routes';

function AchievementsPage() {
  return (
    <Container fluid>
      <Breadcrumb>
        <Breadcrumb.Item>
          <BootstrapLink href={routes.HOME} text='Главная' />
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Достижения учеников</Breadcrumb.Item>
      </Breadcrumb>
    </Container>
  );
}

export default AchievementsPage;
