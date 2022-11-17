import React from 'react';
import './Navigationbar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/Logo/logo.png'


const Navigationbar = () => {
    return (
        <div>
            <div>
               <Navbar  expand="lg">
                            <Container>
                                <Navbar.Brand href="/" className="" id='logo-font'><img src={logo} alt=""></img></Navbar.Brand>
                                <Navbar.Brand href="/" className='navbar-title fs-1' id='logo-font'>Divine Travels</Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="ms-auto">
                                    <NavLink className={`m-4 fw-bold fs-4  navbar-item  ${({ isActive }) => isActive ? "active": undefined}`} to="/">Home</NavLink>
                                    <NavLink className="m-4 fw-bold fs-4 navbar-item" to="/destinations">Destinations</NavLink>
                                    <NavLink className="m-4 fw-bold fs-4 navbar-item" to="/services">Services</NavLink>
                                    <NavLink className="m-4 fw-bold fs-4 navbar-item" to="/blog">Blog</NavLink>
                                </Nav>

                                </Navbar.Collapse>
                            </Container>
                </Navbar>
        
      
                                    
                                



        </div>
        </div>
    );
};

export default Navigationbar;