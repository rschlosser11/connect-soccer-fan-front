import React from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

export default function NavBar() {
    return(
        <Navbar bg='light' expand='lg'>
            <Navbar.Brand>
                <Link className='nav-link' to='/'>Soccer Fan Connect</Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className="mr-auto">
                    <LinkContainer className='nav-link' to='/teams'><NavItem>Teams</NavItem></LinkContainer>
                    <LinkContainer className='nav-link' to='/fixtures'><NavItem>Fixtures</NavItem></LinkContainer>
                    <LinkContainer className='nav-link' to='/login'><NavItem>Login</NavItem></LinkContainer>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}