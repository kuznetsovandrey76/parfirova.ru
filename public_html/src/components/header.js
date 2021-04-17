import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import BootstrapLink from './shared/bootstrap-link';
import { routes } from '../constants/routes';

function Header() {
  return (
    <Navbar collapseOnSelect expand='md' bg='light' variant='light' className='mb-3'>
      <Navbar.Brand className='d-sm-block d-md-none'>Parfirova.ru</Navbar.Brand>
      <Navbar.Toggle className='ml-auto' aria-controls='responsive-navbar-nav' />
      <Navbar.Collapse id='responsive-navbar-nav'>
        <Nav>
          <Nav.Link eventKey={0}>
            <BootstrapLink href={routes.HOME} text='Главная' />
          </Nav.Link>
          <Nav.Link eventKey={1}>
            <BootstrapLink href={routes.ABOUT} text='О себе' />
          </Nav.Link>
          <NavDropdown title='Достижения' id='collasible-nav-dropdown'>
            <NavDropdown.Item eventKey={2}>
              <BootstrapLink href={routes.COURSES} text='Курсы & Вебинары' />
            </NavDropdown.Item>
            <NavDropdown.Item eventKey={3}>
              <BootstrapLink href={routes.CONTESTS} text='Конкурсы' />
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item eventKey={4}>
              <BootstrapLink href={routes.ACHIEVEMENTS} text='Достижения учеников' />
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title='Ученикам' id='collasible-nav-dropdown'>
            <NavDropdown.Item eventKey={5}>
              <BootstrapLink href={routes.FIFTH_GRADE} text='5 классы' />
            </NavDropdown.Item>
            <NavDropdown.Item eventKey={6}>
              <BootstrapLink href={routes.SIXTH_GRADE} text='6 классы' />
            </NavDropdown.Item>
            <NavDropdown.Item eventKey={7}>
              <BootstrapLink href={routes.SEVENTH_GRADE} text='7 классы' />
            </NavDropdown.Item>
            <NavDropdown.Item eventKey={8}>
              <BootstrapLink href={routes.EIGHTH_GRADE} text='8 классы' />
            </NavDropdown.Item>
            <NavDropdown.Item eventKey={9}>
              <BootstrapLink href={routes.NINTH_GRADE} text='9 классы' />
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title='Методическая копилка' id='collasible-nav-dropdown'>
            <NavDropdown.Item eventKey={10}>
              <BootstrapLink href={routes.RUSSIAN} text='Русский язык' />
            </NavDropdown.Item>
            <NavDropdown.Item eventKey={11}>
              <BootstrapLink href={routes.LITERATURE} text='Литература' />
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link eventKey={12}>
            <BootstrapLink href={routes.GALLERY} text='Фотогалерея' />
          </Nav.Link>
          <Nav.Link eventKey={13}>
            <BootstrapLink href={routes.CONTACTS} text='Контакты' />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
