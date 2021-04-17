import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container, Breadcrumb } from 'react-bootstrap';
import { setUser } from '../../ducks/literature-duck';
import { currentSubject } from '../../selectors/literature-view';
import BootstrapLink from '../shared/bootstrap-link';
import { routes } from '../../constants/routes';

const propTypes = {
  subject: PropTypes.string,
};

function mapDispatchToProps(dispatch) {
  return {
    setUser(name) {
      dispatch(setUser(name));
    },
  };
}

function mapStateToProps(state) {
  return {
    subject: currentSubject(state),
  };
}

function LiteraturePage({ subject }) {
  console.log(subject);
  return (
    <Container fluid>
      <Breadcrumb>
        <Breadcrumb.Item>
          <BootstrapLink href={routes.HOME} text='Главная' />
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Литература</Breadcrumb.Item>
      </Breadcrumb>
    </Container>
  );
}

LiteraturePage.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(LiteraturePage);
