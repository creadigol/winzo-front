import React from 'react'
import './images.css';
import { Link } from 'react-router-dom';
import img1 from '../assets/image/boll-block1.png'
import img2 from '../assets/image/block2.png'
import img3 from '../assets/image/block3.png'
import img4 from '../assets/image/block4.png'
import img5 from '../assets/image/block5.png'
import img6 from '../assets/image/block6.png'
import img7 from '../assets/image/boll-block2.png'
import img8 from '../assets/image/block8.png'
import img9 from '../assets/image/block9.png'
import img10 from '../assets/image/block10.png'
import img11 from '../assets/image/block11.png'
import img12 from '../assets/image/block12.png'
import img13 from '../assets/image/block13.png'
import img14 from '../assets/image/block14.png'
import img15 from '../assets/image/block15.png'
import img16 from '../assets/image/block7.png'
import img17 from '../assets/image/block12.png'
import img18 from '../assets/image/block1.png'

function Images() {
    let data = [
        {
            id: 1,
            imgsrc: img1,
        },
        {
            id: 2,
            imgsrc: img2,
        },
        {
            id: 3,
            imgsrc: img3,
        },
        {
            id: 4,
            imgsrc: img4,
        },
        {
            id: 5,
            imgsrc: img5,
        },
        {
            id: 6,
            imgsrc: img6,
        },
        {
            id: 7,
            imgsrc: img7,
        },
        {
            id: 8,
            imgsrc: img8,
        },
        {
            id: 9,
            imgsrc: img9,
        },
        {
            id: 10,
            imgsrc: img10,
        },
        {
            id: 11,
            imgsrc: img11,
        },
        {
            id: 12,
            imgsrc: img12,
        },
        {
            id: 13,
            imgsrc: img13,
        },
        {
            id: 14,
            imgsrc: img14,
        },
        {
            id: 15,
            imgsrc: img15,
        },
        {
            id: 16,
            imgsrc: img16,
        },
        {
            id: 17,
            imgsrc: img17,
        },
        {
            id: 18,
            imgsrc: img18,
        },
    ]
    return (
        <>
            <div className="Gallery">
                {data.map((item, index) => {
                    return (
                        <div className='picks' key={index}>
                            <Link to="/Bracker"><img src={item.imgsrc} alt="Loading images..." className='imgs' /></Link>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Images
