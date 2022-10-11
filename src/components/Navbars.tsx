import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import menu from '../assets/image/Menu.png';
import face from '../assets/image/face.png';
import google from '../assets/image/google.png';
import meta from '../assets/image/Group.png';
import twit from '../assets/image/twitt.png';
import close from '../assets/image/Close.png';
import { Link } from 'react-router-dom';
import './Navbars.css'

function Navbars() {
    const [show, setShow] = useState(false);
    const closemenu = () => setShow(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // MODAL USESTATE START LOGIN
    const [showm, setShowm] = useState(false);

    const modalClose = () => setShowm(false);
    const modalShowlog = () => setShowm(true);
    // MODAL USESTATE END LOGIN
    // MODAL USESTATE START REGISTER
    const [showr, setShowr] = useState(false);

    const modalClosex = () => setShowr(false);
    const modalShowreg = () => setShowr(true);
    // MODAL USESTATE END REGISTER
    return (
        <>
            {/* HEADER-SECOND START */}
            {/* <div className="header-second">
                <Button onClick={handleShow} className='menubtn'>
                    <img src={menu} alt="menu" />
                </Button>

                <Offcanvas show={show} onHide={handleClose} >
                    <img src={close} alt="" onClick={closemenu} className='closebt' />
                    <Offcanvas.Body>
                        <Link className='link py-2' to="/">Home</Link>
                        <Nav.Link className='link py-2' href="#action2">Game</Nav.Link>
                        <Nav.Link className='link py-2' href="#action1">How to Play</Nav.Link>
                        <Nav.Link className='link py-2' href="#action2" onClick={modalShowlog}>Login</Nav.Link>
                        <Nav.Link className='link py-2' href="#action1" onClick={modalShowreg}>Register</Nav.Link>
                        <Nav.Link className='link py-2' href="#action2">Support</Nav.Link>
                    </Offcanvas.Body>
                </Offcanvas>
            </div> */}
            {/* HEADER-FIRST START */}
            <Container fluid className='first-header'>
                <Navbar expand="lg" className='first-navbar'>
                    <Container>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav className="me-auto" navbarScroll >
                                <Nav.Link href="#Game">Home</Nav.Link>
                                <Nav.Link href="#Game">Game</Nav.Link>
                                <Nav.Link href="#How to Play">How to Play</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Container>

            {/* MODAL-PAGE START LOGIN */}

            <Modal className='modal-main' show={showm} onHide={modalClose} >
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body className='modal-1'>
                    <h1 className='log-text pb-4'>Login</h1>
                    <input type="text" placeholder='Username' className='inpt' />
                    <input type="password" placeholder='Password' className='inpt mb-0' />
                    <p className='f-pass'>Forgot password?</p>
                    <div className="social-media-box text-center py-2">
                        <Button className='btnlog my-2'>Login</Button>
                        <p className='f-pass'>or login with</p>
                        <div className="social-img py-2 mb-2">
                            <Link to=''><img src={face} alt="facebook" /></Link>
                            <Link to=''><img src={google} alt="google" /></Link>
                            <Link to=''><img src={meta} alt="metamask" /></Link>
                            <Link to=''><img src={twit} alt="twitter" className='twit' /></Link>
                        </div>
                        <p className='f-pass'>Don’t have an account?</p>
                        <Button className='btn-reg'>Register Now</Button>
                    </div>
                </Modal.Body>
            </Modal>
            {/* LOGIN MODAL END */}
            {/* REGISTER MODAL START */}
            <Modal className='modal-main' show={showr} onHide={modalClosex}>
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body className='modal-1'>
                    <h1 className='reg-text pb-4'>Register</h1>
                    <input type="text" placeholder='Username' className='inpt' />
                    <input type="password" placeholder='Password' className='inpt' />
                    <input type="email" placeholder='Email' className='inpt' />
                    <input type="text" placeholder='Referral code' className='inpt mb-0' />
                    <div className="social-media-box text-center py-2">
                        <Button className='btn-reg my-2'>Register Now</Button>
                        <p className='f-pass mb-2'>or login with</p>
                        <div className="social-img">
                            <Link to=''><img src={face} alt="facebook" /></Link>
                            <Link to=''><img src={google} alt="google" /></Link>
                            <Link to=''><img src={meta} alt="metamask" /></Link>
                            <Link to=''><img src={twit} alt="twitter" className='twit' /></Link>
                        </div>
                    </div>
                </Modal.Body>

            </Modal>
            {/* REGISTER MODAL END */}
        </>
    )
}

export default Navbars;
