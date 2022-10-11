import React from 'react';
import './brickgame.css';
import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import logo from '../assets/image/boll-block2.png'
function Brickgame() {
    return (
        <>
            <div className="page-wrapper">
            <Container>
                <Navbar expand="lg">
                    <Container fluid>
                        <Navbar.Brand>
                            <Link to=''>
                                <img src={logo} alt="" className='logo-img' />
                            </Link>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <h1 className='logo-text'>Brick Breaker</h1>
                            </Nav>
                            <Form className="d-flex">
                                <Form.Control
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                />
                                <Button variant="outline-success">Search</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Container>
            </div>
        </>
    )
}

export default Brickgame;
