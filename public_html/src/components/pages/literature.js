import React from 'react';
import PropTypes from 'prop-types';

import { Container } from 'react-bootstrap';
import { connect } from 'react-redux';

import { setUser } from '../../ducks/literature-duck';
import { currentSubject } from '../../selectors/literature-view';

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
  return <Container fluid>Литература</Container>;
}

LiteraturePage.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(LiteraturePage);
