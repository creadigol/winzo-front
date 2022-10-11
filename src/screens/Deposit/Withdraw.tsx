import React from "react";
import { Row , Col , Form } from "react-bootstrap";

const Withdraw = () =>{
    return(
        <>
            <div className="deposit_detail">
                <h5>Enter your amount</h5>
                <form>
                    <Row>
                        <Col lg={3} >
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Amount</Form.Label>
                                <Form.Control type="email" placeholder="Enter Amount" />
                                <span>Minimum Amount Should be  0.05BNB</span>
                            </Form.Group>
                        </Col>
                        <Col lg={3} >
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Balance</Form.Label>
                                <Form.Control type="email" placeholder="3.2" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <button className="mt-5" >Withdraw</button>
                </form>
            </div>
        </>
    );
}

export default Withdraw;