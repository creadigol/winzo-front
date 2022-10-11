import React from "react";
import "./Deposit.css";
import { Tab , Nav, Row, Col } from "react-bootstrap";
import Deposit from "./Deposit";
import Withdraw from "./Withdraw";
import Transaction from "./Transaction";

const DepositMain = () =>{
    return(
        <>
            <div className="page-wrapper deposit-page-wrapper">
                <div className="deposit_main">
                    <Tab.Container id="left-tabs-example" defaultActiveKey="deposit">
                        <Row>
                            <Col xl={2} lg={3} >
                                <div className="sidebar_nav">
                                    <Nav variant="pills" className="flex-column">
                                        <Nav.Item>
                                            <Nav.Link eventKey="deposit">Deposit</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="withdraw">Withdraw</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="transaction">Transaction</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </div>
                            </Col>
                            <Col xl={10} lg={9} >
                                <Tab.Content>
                                    <Tab.Pane eventKey="deposit"><Deposit /></Tab.Pane>
                                    <Tab.Pane eventKey="withdraw"><Withdraw /></Tab.Pane>
                                    <Tab.Pane eventKey="transaction"><Transaction /></Tab.Pane>
                                </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>
                </div>
            </div>
        </>
    );
}

export default DepositMain;