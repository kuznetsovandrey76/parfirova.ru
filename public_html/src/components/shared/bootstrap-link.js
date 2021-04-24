import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import PropTypes from 'prop-types';

BootstrapLink.propTypes = {
  href: PropTypes.string,
  text: PropTypes.string,
  block: PropTypes.bool,
};

function BootstrapLink(props) {
  return (
    <LinkContainer to={props.href} className={`link ${props.block ? 'd-block' : ''}`}>
      <span className='pointer'>{props.text}</span>
    </LinkContainer>
  );
}

export default BootstrapLink;
