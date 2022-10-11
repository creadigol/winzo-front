import React from 'react';
import { Container, Row } from 'react-bootstrap';
import game from "../../assets/image/boll-block2.png";
import "./GameRunning.css";
import info from "../../assets/image/info.png";
import win from "../../assets/image/win_prize.png";
import user from "../../assets/image/user.png";

const Gamerunning = () =>{
    return(
        <>
            <div className="page-wrapper">
                <Container>
                    <Row>
                        <div className="gamerunning_detail">
                            <div className="gamerunning_left" >
                                <img src={game} alt="gameimg" />
                                <h2>Brick Breaker</h2>
                            </div>
                            <div className="gamerunning_right">
                                <button className="green-btn" >Score : 1250</button>
                                <button className="green-btn blue-btn" >Challenge Price: 0.05BNB</button>
                                <button className="green-btn orange-btn" >End Game</button>
                                <div className="gamerunning_win_info" >
                                    <div className="game_info" >
                                        <img src={info} alt="info" />
                                        <div className="game_info_detail">
                                            <h4>How to Play?</h4>
                                            <ul>
                                                <li>Touch the screen to move the paddle.</li>
                                                <li>Find the best positions and angles to hit the balls.</li>
                                                <li>Break as many bricks as possible before they hit the bottom.</li>
                                                <li>Collect stars to unlock additional balls.</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="win_prize">
                                        <img src={win} alt="win" />
                                        <div className="win_prize_list">
                                            <h4>Top Players</h4>
                                            <div className="win_prize_section">
                                                <div className="win_prize_leftside" >
                                                    <span>1.</span>
                                                    <h5><img src={user} alt="user" />Chirag</h5>
                                                </div>
                                                <h6>0.2 BNB</h6>
                                            </div>
                                            <div className="win_prize_section">
                                                <div className="win_prize_leftside" >
                                                    <span>1.</span>
                                                    <h5><img src={user} alt="user" />Chirag</h5>
                                                </div>
                                                <h6>0.2 BNB</h6>
                                            </div>
                                            <div className="win_prize_section">
                                                <div className="win_prize_leftside" >
                                                    <span>1.</span>
                                                    <h5><img src={user} alt="user" />Chirag</h5>
                                                </div>
                                                <h6>0.2 BNB</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default Gamerunning;