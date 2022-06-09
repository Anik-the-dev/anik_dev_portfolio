import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Menu = () => {
    return (
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand href="#home" className='custom-font-weight-600 custom-letter-spacing fs-4'>niks<span className='custom-primary-color'>dev.</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                       
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Menu;