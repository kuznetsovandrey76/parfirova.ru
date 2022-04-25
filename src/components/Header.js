import React, { useState, useEffect } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { LinkContainer as Link } from 'react-router-bootstrap';
import { checkAuth } from './helpers';
import { LoginSvg } from '../assets/svg';

function Header() {
  return (
    <Navbar collapseOnSelect expand='md' variant='light' className='mb-3 header flex mx-5'>
      <Link to='/'>
        <Navbar.Brand>Parfirova.ru</Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='me-auto'>
          <Link to='/'>
            <Nav.Link>Главная</Nav.Link>
          </Link>
          <NavDropdown title='Достижения' id='basic-nav-dropdown'>
            {[
              { to: '/courses', text: 'Курсы & Вебинары' },
              { to: '/contests', text: 'Конкурсы' },
              { to: '/achievements', text: 'Достижения учеников' },
            ].map(({ to, text }) => {
              return (
                <Link to={to} key={to}>
                  <NavDropdown.Item>{text}</NavDropdown.Item>
                </Link>
              );
            })}
          </NavDropdown>
          <NavDropdown title='Ученикам' id='basic-nav-dropdown'>
            {[5, 6, 7, 8, 9, null, 10, 11].map((num) => {
              if (!num) return <NavDropdown.Divider key={null} />;
              return (
                <Link to={`${num}th-grade`} key={`${num}th-grade`}>
                  <NavDropdown.Item>{`${num} класс`}</NavDropdown.Item>
                </Link>
              );
            })}
          </NavDropdown>
          <NavDropdown title='Галерея' id='basic-nav-dropdown'>
            {[
              { to: '/eighteen-school', text: '18 Школа' },
              { to: '/gallery', text: 'Test' },
            ].map(({ to, text }) => {
              return (
                <Link to={to} key={to}>
                  <NavDropdown.Item>{text}</NavDropdown.Item>
                </Link>
              );
            })}
          </NavDropdown>
          {/* <Link to='/gallery'>
            <Nav.Link>Галерея</Nav.Link>
          </Link> */}
          {/* {isAuth && (
            <>
              <NavDropdown title='Admin' id='basic-nav-dropdown'>
                {[
                  { to: '/posts', text: 'Посты' },
                  { to: '/lessons', text: 'Уроки' },
                ].map(({ to, text }) => {
                  return (
                    <Link to={to} key={to}>
                      <NavDropdown.Item>{text}</NavDropdown.Item>
                    </Link>
                  );
                })}
              </NavDropdown>
            </>
          )} */}
          <Link to='/admin'>
            <img src={LoginSvg} className='me-2 cursor-pointer d-block login-svg' />
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
