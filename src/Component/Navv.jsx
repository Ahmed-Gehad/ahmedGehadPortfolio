import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import logo from '../imges/logo.jpg'
import { Link } from 'react-router';

// import Button
import Button from 'react-bootstrap/Button';
import { motion } from 'framer-motion';

function Navv() {
    return (

        <div className='navBar '>
            <Navbar expand="lg" className="">
                <Container>
                    <Navbar.Brand href="#home"> <img
                        src={logo}
                        width="100"
                        height="80"
                        className="d-inline-block align-top rounded-circle "
                        alt="Ahmed gehad"
                    /></Navbar.Brand>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
                        <Nav className="align-items-center">
                            <Nav.Link href="#Home" className='link me-3 text-white'>Home</Nav.Link>
                            <Nav.Link href="#about" className='link me-3 text-white'>About</Nav.Link>
                            <Nav.Link href="#Experience" className='link me-3 text-white'>Experience</Nav.Link>
                            <Nav.Link href="#Projects" className='link me-3 text-white'>Projects</Nav.Link>
                            <Nav.Link href="#Contact" className='link me-3 text-white'>Contact</Nav.Link>
                        </Nav>
                       
                            <motion.button
                                whileTap={{ scale: 0.65 }} className='motionBtn '>
                                <Button variant="success" to="ContactPage" className='ms-5'>Downlod CV</Button>
                            </motion.button>
                        

                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    )
}

export default Navv