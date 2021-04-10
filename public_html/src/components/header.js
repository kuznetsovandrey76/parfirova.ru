import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import BootstrapLink from './shared/bootstrap-link';
import { routes } from '../constants/routes';

function Header() {
  return (
    <Navbar collapseOnSelect expand='lg' bg='light' variant='light' className='mb-3'>
      <Navbar.Brand>
        <BootstrapLink href={routes.HOME} text='parfirova.ru' />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='responsive-navbar-nav' />
      <Navbar.Collapse id='responsive-navbar-nav'>
        <Nav className='mr-auto'>
          <Nav.Link>
            <BootstrapLink href={routes.ABOUT} text='О себе' />
          </Nav.Link>
          <NavDropdown title='Достижения' id='collasible-nav-dropdown'>
            <NavDropdown.Item href='#action/3.1'>Курсы / Вебинары</NavDropdown.Item>
            <NavDropdown.Item href='#action/3.2'>Конкурсы</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href='#action/3.3'>Достижения учеников</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <NavDropdown title='Ученикам' id='collasible-nav-dropdown'>
            <NavDropdown.Item href='#action/3.1'>5 классы</NavDropdown.Item>
            <NavDropdown.Item href='#action/3.2'>6 классы</NavDropdown.Item>
            <NavDropdown.Item href='#action/3.3'>7 классы</NavDropdown.Item>
            <NavDropdown.Item href='#action/3.3'>8 классы</NavDropdown.Item>
            <NavDropdown.Item href='#action/3.3'>9 классы</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title='Методическая копилка' id='collasible-nav-dropdown'>
            <NavDropdown.Item>
              <BootstrapLink href={routes.RUSSIAN} text='Русский язык' />
            </NavDropdown.Item>
            <NavDropdown.Item>
              <BootstrapLink href={routes.LITERATURE} text='Литература' />
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link>
            <BootstrapLink href={routes.GALLERY} text='Фотогалерея' />
          </Nav.Link>
          <Nav.Link>
            <BootstrapLink href={routes.CONTACTS} text='Контакты' />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
