import React , { useState } from "react";
import { Tab , Nav } from "react-bootstrap";

const SelectPrice = () =>{
    return(
        <>
            <div className="select_price_main">
                <h5>Select Your Challenge Price</h5>
                <div className="select_amount">
                    <Tab.Container id="left-tabs-example" defaultActiveKey="0.05">
                        <Nav variant="pills" >
                            <Nav.Item>
                                <Nav.Link eventKey="0.05">0.05 BNB</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="0.10">0.10 BNB</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="0.15">0.15 BNB</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="0.30">0.30 BNB</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="0.50">0.50 BNB</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Tab.Container>
                </div>
            </div>
            <div className="search_friend">
                <h5>Select Friend</h5>
                <input type="text" placeholder="Enter Username" />
            </div>
            <button className="green-btn" >Start Game</button>
        </>
    );
}

export default SelectPrice;