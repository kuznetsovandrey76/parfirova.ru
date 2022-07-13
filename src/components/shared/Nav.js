import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import urls from './nav-urls';

import './nav.css';

export default function Services() {
  const [popupUrls, setPopupUrls] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const clickHandler = (items) => {
    setPopupUrls(items);
    setIsOpen(true);
  };

  useEffect(() => {
    const listener = (e) => {
      setIsOpen(!!e.path[1].getAttribute('data-items'));
    };
    document.body.addEventListener('click', listener);
    document.body.addEventListener('touchstart', listener);
    return () => {
      document.body.removeEventListener('click', listener);
      document.body.removeEventListener('touchstart', listener);
    };
  }, []);

  const LinkBlock = ({ logo, title, to, items }) => {
    return (
      <Link
        to={!items && to}
        key={title}
        data-items={items ? 'true' : ''}
        className='services-item'
        onClick={() => clickHandler(items)}
      >
        <img src={logo} className='services-item__image' />
        <p className='services-item__text'>{title}</p>
      </Link>
    );
  };

  return (
    <>
      <div className='services-list'>{urls.map((url) => LinkBlock(url))}</div>
      <div className={`${isOpen ? 'open' : 'hide'} services-list-popup`}>
        {popupUrls && popupUrls.map((item) => LinkBlock(item))}
      </div>
    </>
  );
}
