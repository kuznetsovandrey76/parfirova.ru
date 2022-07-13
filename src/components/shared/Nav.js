import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import urls from './nav-urls';
import HelpSvg from '../../assets/svg/help.svg';

import './nav.css';

export default function Services() {
  const [popupUrls, setPopupUrls] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const clickHandler = (items) => {
    setPopupUrls(items);
    setIsOpen(true);
  };

  useEffect(() => {
    function listener(event) {
      let target = event.target;
      while (target.tagName !== 'A' && target.tagName !== 'BODY') {
        if (Boolean(target.getAttribute('data-nav-items'))) return setIsOpen(true);
        target = target.parentNode;
      }
      return setIsOpen(false);
    }
    document.body.addEventListener('click', listener);
    return () => document.body.removeEventListener('click', listener);
  }, []);

  const LinkBlock = ({ logo: svgFile, title, to, items }) => {
    if (!items) {
      return (
        <Link to={to} key={title} className='services-item'>
          {svgFile}
          <p className='services-item__text'>{title}</p>
        </Link>
      );
    }
    return (
      <Link
        to={false}
        key={title}
        data-nav-items
        className='services-item'
        onClick={() => clickHandler(items)}
      >
        {svgFile}
        <p data-nav-items className='services-item__text'>
          {title}
        </p>
      </Link>
    );
  };

  return (
    <>
      <div className='help-icon'>
        <HelpSvg />
      </div>
      <div className='services-list'>{urls.map((url) => LinkBlock(url))}</div>
      <div data-nav-items className={`${isOpen ? 'open' : 'hide'} services-list-popup`}>
        {popupUrls && popupUrls.map((item) => LinkBlock(item))}
      </div>
    </>
  );
}
