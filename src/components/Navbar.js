import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="danger" variant="dark">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        src="https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        width="30"
                        height="30"
                        className="d-inline-block align-top me-2 rounded-circle bg-warning"
                        alt="Logo"
                    />
                    {' Pizzita Blog'}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ms-auto">
        <Link to="/postPage" className='nav-link text-light fw-bold'>Publicaciones</Link>
        <Nav.Link href="#perfil" className='text-light fw-bold'>Mi Perfil</Nav.Link>
    </Nav>
</Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavigationBar;
