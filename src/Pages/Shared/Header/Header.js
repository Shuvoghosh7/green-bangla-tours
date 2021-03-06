import React from 'react';
import { signOut } from "firebase/auth";
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import logo2 from '../../../images/logo3.png'
import auth from '../../Firebase.init';
import './Header.css'
const Header = () => {
    const [user] = useAuthState(auth);
    return (
        <Navbar collapseOnSelect expand="lg" bg="success" variant="dark" className='sticky-top '>
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img style={{ height: '60px', borderRadius: '20px' }} src={logo2} alt="" />
                    <span>GREEN BANGLA TOURS</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    </Nav>
                    <Nav>
                        <Nav.Link as={Link} to="about">About Me</Nav.Link>
                        <Nav.Link as={Link} to="blogs">Blogs</Nav.Link>
                        <Nav.Link as={Link} to="checkout">Checkout</Nav.Link>
                        {user ? <button onClick={() => signOut(auth)} className='sing-out my-1'>Sing out</button> : <Nav.Link as={Link} to="login">Login</Nav.Link>}

                        <Nav.Link eventKey={2} as={Link} to="singup">
                            <button className='buttons px-3'>Sing up</button>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;