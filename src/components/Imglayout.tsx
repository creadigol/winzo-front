import React from 'react'
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import './Imglayouts.css'
import img1 from '../assets/image/boll-block1.png'
import img2 from '../assets/image/block11.png'
import img3 from '../assets/image/block13.png'
import img4 from '../assets/image/block9.png'
import img5 from '../assets/image/block12.png'
import img6 from '../assets/image/boll-block2.png'
import img7 from '../assets/image/block4.png'
import img8 from '../assets/image/block5.png'
import img9 from '../assets/image/block14.png'
import img10 from '../assets/image/block13.png'
import img11 from '../assets/image/ring.png'
import img12 from '../assets/image/block10.png'
import img13 from '../assets/image/block15.png'
import img14 from '../assets/image/block2.png'
import img15 from '../assets/image/block8.png'
import img16 from '../assets/image/block9.png'
import img17 from '../assets/image/block12.png'
import img18 from '../assets/image/block7.png'
function Imglayout() {
    return (
        <>
            <Container fluid className='image-layouts-pages'>
                <div className="image-layouts-main">
                    <div className="img-grid">
                        <div className="grid-item">
                            <img src={img1} alt="" className='one' />
                        </div>
                        <div className="grid-item">
                            <img src={img2} alt="" />
                        </div>
                        <div className="grid-item">
                            <img src={img3} alt="" />
                        </div>
                        <div className="grid-item">
                            <img src={img4} alt="" />
                        </div>
                        <div className="grid-item">
                            <img src={img5} alt="" />
                        </div>
                        <div className="grid-item">
                            <img src={img7} alt="" />
                        </div>
                        <div className="grid-item">
                            <Link to='/Bracker'><img src={img6} alt="" /></Link>
                        </div>
                        <div className="grid-item">
                            <img src={img8} alt="" />
                        </div>
                        <div className="grid-item">
                            <img src={img9} alt="" />
                        </div>
                        <div className="grid-item">
                            <img src={img10} alt="" />
                        </div>
                        <div className="grid-item">
                            <img src={img11} alt="" />
                        </div>
                        <div className="grid-item">
                            <img src={img12} alt="" />
                        </div>
                        <div className="grid-item">
                            <img src={img13} alt="" />
                        </div>
                        <div className="grid-item">
                            <img src={img14} alt="" />
                        </div>
                        <div className="grid-item">
                            <img src={img15} alt="" />
                        </div>
                        <div className="grid-item">
                            <img src={img16} alt="" />
                        </div>
                        <div className="grid-item">
                            <img src={img17} alt="" />
                        </div>
                        <div className="grid-item">
                            <img src={img18} alt="" />
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Imglayout;
