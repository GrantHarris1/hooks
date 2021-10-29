import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


export default function Headline() {
    return (
        <header className='header text-center'>
            <title className='text-center'>Grant's Bait | Tackle</title>
            <Navbar bg="dark" text='light' expand="lg">
                <Container>
                    <Navbar.Brand href="#home" className='text-light'>Grant's Bait | Tackle</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">

                            <NavLink className='btn btn-outline-secondary' to="/home" activeClassName="selected">Products</NavLink>&nbsp;
                            <br />
                            <NavLink className='btn btn-outline-secondary' to="/cart" activeClassName="selected">Your Cart</NavLink>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <h1 className='text-center neonText '>Welcome to Grant's.</h1>
        </header>
    )
}
