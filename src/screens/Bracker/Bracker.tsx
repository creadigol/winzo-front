import React , { useState } from "react";
import { Container , Row , Col , Button , Modal } from "react-bootstrap";
import { Link } from 'react-router-dom';
import "./Bracker.css";
import img from '../../assets/image/boll-block2.png';
import SelectPrice from "./SelectPrice";
import UserJoin from "./UserJoin";

const Bracker = () =>{

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show1, setShow1] = useState(false);
    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);

    return(
        <>
            <div className="page-wrapper">
                <Container className='py-5'>
                    <Row>
                        <Col lg={3} >
                            <div className='Game-page' >
                                <img src={img} alt="" />
                            </div>
                        </Col>
                        <Col lg={9} >
                            <div className="bracker_detail">
                                <div className="bracker_title" >
                                    <h1>Brick Bracker</h1>
                                    <button className="green-btn" >Play Game</button>
                                </div>
                                <ul>
                                    <li>Exercise your skills, reflexes and accuracy in brick breaker game.</li>
                                    <li>On each wave new bricks are appearing at the top and you need to destroy them as much as you can. For every destroyed brick you will get +1 score.</li>
                                    <li>You can also collect stars and use that stars to unlock new balls that can be used for destroying bricks.</li>
                                    <li>As game progresses it becomes harder and harder.</li>
                                </ul>
                            </div>
                            <div className="select_game_mode">
                                <h3>Select Game Mode</h3>
                                <button className="blue-outline-btn" >Play Game</button>
                                <button className="blue-outline-btn" >Play Demo</button>
                            </div>
                        </Col>
                        <Col lg={12} >
                            <div className="play_game_btn">
                                <button className="green-btn" onClick={handleShow} >Play Game</button>
                                {/* <button className="green-btn" onClick={handleShow1} >Play Game</button> */}
                                <button className="green-btn orange-btn" >Back</button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <Modal show={show} onHide={handleClose} className="select_price">
                <Modal.Body>
                    <SelectPrice />
                </Modal.Body>
            </Modal>

            <Modal show={show1} onHide={handleClose1} className="select_price">
                <Modal.Body>
                    <UserJoin />
                </Modal.Body>
            </Modal>
        </>
    );
}

export default Bracker;