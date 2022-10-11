import React, { Component } from "react";
import Slider from "react-slick";

import slide1 from "../../assets/image/slide1.png";
import slide2 from "../../assets/image/slide2.png";
import slide3 from "../../assets/image/slide3.png";

const Carousel = () =>{

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                }
            },
        ]
    };

    return(
        <>
            <div className="carousel_main">
                <Slider {...settings}>
                    <div>
                        <img src={slide1} alt="slide1" />
                    </div>
                    <div>
                        <img src={slide2} alt="slide1" />
                    </div>
                    <div>
                        <img src={slide3} alt="slide1" />
                    </div>
                    <div>
                        <img src={slide1} alt="slide1" />
                    </div>
                    <div>
                        <img src={slide2} alt="slide1" />
                    </div>
                    <div>
                        <img src={slide3} alt="slide1" />
                    </div>
                </Slider>
            </div>
        </>
    );
}

export default Carousel;