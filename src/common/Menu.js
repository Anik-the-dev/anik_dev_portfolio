import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import resume from '../myFiles/resume.pdf'



const Menu = () => {
    return (
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand href="#home" className='custom-font-weight-600 custom-letter-spacing fs-4'>niks<span className='custom-primary-color'>dev.</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link ><Link className='menuitem' to='/'>Home</Link></Nav.Link>
                        <Nav.Link><Link className='menuitem' to='/about'>About</Link></Nav.Link>
                        <Nav.Link><Link className='menuitem' to='/projects'>Projects</Link></Nav.Link>
                        <Nav.Link><Link className='menuitem' to='/contact'>Contact</Link></Nav.Link>
                        <Nav.Link className='btn custom-btn me-2 text-light rounded px-3 mx-3' href={resume} download>Download Resume</Nav.Link>
                       
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Menu;