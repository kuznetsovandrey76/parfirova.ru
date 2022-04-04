import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { LinkContainer as Link } from 'react-router-bootstrap'

function Header() {
    return (
        <Navbar collapseOnSelect expand='md' variant='light' className='mb-3 header flex mx-5'>
            <Link to="/admin/home">
                <Navbar.Brand>Parfirova.ru</Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Link to="main" >
                        <Nav.Link>Главная</Nav.Link>
                    </Link>
                    <NavDropdown title="Достижения" id="basic-nav-dropdown">
                        {[
                            { to: '/courses', text: 'Курсы & Вебинары' },
                            { to: '/contests', text: 'Конкурсы' },
                            { to: '/achievements', text: 'Достижения учеников' },
                        ].map(({ to, text }) => {
                            return (
                                <Link to={to} key={to}>
                                    <NavDropdown.Item>{text}</NavDropdown.Item>
                                </Link>
                            )
                        })}
                    </NavDropdown>
                    <NavDropdown title="Ученикам" id="basic-nav-dropdown">
                        {[5, 6, 7, 8, 9, null, 10, 11].map((num) => {
                            if (!num) return <NavDropdown.Divider key={null} />
                            return (
                                <Link to={`${num}th-grade`} key={`${num}th-grade`}>
                                    <NavDropdown.Item>{`${num} класс`}</NavDropdown.Item>
                                </Link>
                            )
                        })}
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar >
    );
}

export default Header;