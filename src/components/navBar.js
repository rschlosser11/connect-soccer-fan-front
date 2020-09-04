import React from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import ball from '../img/soccer-ball.png'

export default function NavBar(props) {
    const handleLogout = () => {
        props.handleLogout();
        props.history.push('/')
    }

    return(
        <Navbar bg='light' expand='lg'>
            <Navbar.Brand>
                <Link className='nav-link' to='/'>
                    <img 
                        src={ball}
                        width='30'
                        height='30'
                        className='d-inline-block align-top'
                        alt='soccer ball' 
                    />
                    Soccer Fan Connect
                </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='mr-auto justify-content-end' style={{ width: "100%" }}>
                    <LinkContainer className='nav-link' to='/teams'><NavItem>Teams</NavItem></LinkContainer>
                    <LinkContainer className='nav-link' to='/fixtures'><NavItem>Fixtures</NavItem></LinkContainer>
                    {!!props.user ? <LinkContainer className='nav-link' to='/logout' onClick={handleLogout}><NavItem>Logout</NavItem></LinkContainer> : <LinkContainer className='nav-link' to='/signup' ><NavItem>Sign Up/Login</NavItem></LinkContainer>}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

