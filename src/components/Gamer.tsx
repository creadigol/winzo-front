import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import img1 from '../assets/image/boll-block1.png';
import img2 from '../assets/image/block11.png';
import img3 from '../assets/image/block13.png';
import img4 from '../assets/image/block9.png';
import img5 from '../assets/image/block6.png';
import img6 from '../assets/image/boll-block2.png';
import img7 from '../assets/image/block4.png';
import img8 from '../assets/image/block5.png';
import img9 from '../assets/image/block14.png';
import img10 from '../assets/image/block1.png';
import img11 from '../assets/image/ring.png';
import img12 from '../assets/image/block10.png';
import img13 from '../assets/image/block15.png';
import img14 from '../assets/image/block2.png';
import img15 from '../assets/image/block8.png';
import img16 from '../assets/image/block9.png';
import img17 from '../assets/image/block6.png';
import img18 from '../assets/image/block7.png';
import { Link } from 'react-router-dom';
function Gamer() {
    return (
        <>
            <Container fluid className='px-5 mb-5 img-parent'>
                <Row>

                    <Col lg={4} md={{ span: 6 }} sm={12}>
                        <div className="collem-1">
                            <img src={img1} alt="" />
                        </div>
                        <div className="img-box">
                            <div className="one">
                                <img src={img2} alt="" />
                                <img src={img3} alt="" />
                            </div>
                            <div className="two">
                                <img src={img4} alt="" />
                                <img src={img5} alt="" />
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} md={{ span: 6 }} sm={12} className='mt-lg-4 mt-md-4'>
                        <div className="img-box">
                            <div className="one">
                                <Link to="/Bracker"><img src={img6} alt="" /></Link>
                                <img src={img7} alt="" />
                                <img src={img8} alt="" />
                                <img src={img9} alt="" />
                            </div>
                            <div className="two">
                                <img src={img10} alt="" />
                                <img src={img11} alt="" />
                                <img src={img12} alt="" />
                                <img src={img13} alt="" />
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} xm={{ span: 6, offset: 3 }} sm={12} className='mt-lg-4 mt-md-4'>
                        <div className="box-image">
                            <div className="top">
                                <div className="img-box">
                                    <div className="one">
                                        <img src={img14} alt="" />
                                        <img src={img15} alt="" />
                                    </div>
                                    <div className="two">
                                        <img src={img16} alt="" />
                                        <img src={img17} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="bottom">
                                <img src={img18} alt="" className='bottom-img' />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Gamer;
