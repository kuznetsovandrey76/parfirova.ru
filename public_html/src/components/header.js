import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

function Header() {
  return (
    <Navbar collapseOnSelect expand='lg' bg='light' variant='light'>
      <Navbar.Brand href='/'>parfirova.ru</Navbar.Brand>
      <Navbar.Toggle aria-controls='responsive-navbar-nav' />
      <Navbar.Collapse id='responsive-navbar-nav'>
        <Nav className='mr-auto'>
          <Nav.Link href='#features'>О себе</Nav.Link>
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
            <NavDropdown.Item href='#action/3.1'>Русский язык</NavDropdown.Item>
            <NavDropdown.Item href='#action/3.2'>Литература</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href='#deets'>Фотогалерея</Nav.Link>
          <Nav.Link href='/about'>Контакты</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
