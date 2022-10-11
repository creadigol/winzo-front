import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './Bracker.css'
import img from '../assets/image/boll-block2.png';
import Navbars from '../components/Navbars';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
function Bracker() {
    
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div className="page-wrapper">
            {/* <Navbars /> */}
            <Container className='py-5'>
                <Row>
                    <Col lg={3} className='Game-page'><img src={img} alt="" /></Col>
                    <Col lg={6} className='Game-page'><h1 className='head'>Brick Bracker</h1>
                        <ul className='px-3 menu'>
                            <li>Exercise your skills, reflexes and accuracy in brick breaker game.</li>
                            <li>On each wave new bricks are appearing at the top and you need to destroy them as much as you can. For every destroyed brick you will get +1 score.</li>
                            <li>You can also collect stars and use that stars to unlock new balls that can be used for destroying bricks.</li>
                            <li>As game progresses it becomes harder and harder.</li>
                        </ul>
                    </Col>
                    <Col lg={3} className='Game-page'><Button className='play1-btn' onClick={handleShow}>Play Games</Button></Col>
                    <Col lg={6} className="offset-lg-3">
                        <h3 className='heads'>Select Game Mode</h3>
                        <div className="d-flex gap-4 play-buttons">
                            <Button className='btn-1'>Play with Friends</Button>
                            <Button className='btn-1'>Play Global</Button>
                            <Button className='btn-1'>Play Demo</Button>
                        </div>
                        <div className="btn-main-box">
                            <Button className='play1-btn' onClick={handleShow}>Play Game</Button>
                            <Link to='/'><Button className='cancel'>Back</Button></Link>
                        </div>
                    </Col>
                </Row>
                {/* MODAL PAGE */}

                <Modal show={show} onHide={handleClose} className="modal-page-3">
                    <Modal.Body>
                        <div className="price-box text-center">
                            <h5>Select Your Challenge Price</h5>
                            <div className="button-box">
                                <Button>0.05 BNB</Button>
                                <Button>0.10 BNB</Button>
                                <Button>0.15 BNB</Button>
                                <Button>0.30 BNB</Button>
                                <Button>0.50 BNB</Button>
                            </div>
                            <div className="search-box">
                                <h5>Search Friend</h5>
                                <input type="text" placeholder='Enter Username' />
                            </div>
                            <Button className='start-btn'>Start Game</Button>
                        </div>
                    </Modal.Body>
                </Modal>

            </Container>
            </div>
        </>
    )
}

export default Bracker;

