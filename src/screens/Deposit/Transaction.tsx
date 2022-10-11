import React from "react";
import { Col, Row, Table } from "react-bootstrap";

const Transaction = () =>{
    return(
        <>
            <div className="deposit_detail">
                <h5>Transaction History</h5>
                <Row>
                    <Col lg={6} >
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>TxID</th>
                                    <th>Date</th>
                                    <th>Status</th>
                                    <th>Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>0x124787i78c7kajdsu78y</td>
                                    <td>22/09/2022</td>
                                    <td>Deposit</td>
                                    <td>+0.75 BNB</td>
                                </tr>
                                <tr>
                                    <td>0x124787i78c7kajdsu78y</td>
                                    <td>22/09/2022</td>
                                    <td>Deposit</td>
                                    <td>+0.75 BNB</td>
                                </tr>
                                <tr>
                                    <td>0x124787i78c7kajdsu78y</td>
                                    <td>22/09/2022</td>
                                    <td>Deposit</td>
                                    <td>+0.75 BNB</td>
                                </tr>
                                <tr>
                                    <td>0x124787i78c7kajdsu78y</td>
                                    <td>22/09/2022</td>
                                    <td>Deposit</td>
                                    <td>+0.75 BNB</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </div>
        </>
    );
}

export default Transaction;