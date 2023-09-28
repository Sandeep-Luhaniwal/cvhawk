import React from 'react'
import image1 from '../assets/images/png/header_1.png'
import image2 from '../assets/images/png/header_2.png'
import image3 from '../assets/images/png/header_3.png'
import image4 from '../assets/images/png/header_4.png'
import Slider from 'react-slick'

const Headerslider = () => {
    var settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 2500,
        autoplaySpeed: 0,
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        pouseonhover: true,
        cssEase: 'linear',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },

            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 320,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]

    };
    return (
        <>
            <Slider {...settings} className='d-md-none'>
                <div className=' flex justify-center items-center px-3'>
                    <img className='imgShadow w-100' src={image1} alt="bitcoin" />
                </div>
                <div className=' flex justify-center items-center px-3'>
                    <img className='imgShadow w-100' src={image2} alt="bitcoin" />
                </div>
                <div className=' flex justify-center items-center px-3'>
                    <img className='imgShadow w-100' src={image3} alt="bitcoin" />
                </div>
                <div className=' flex justify-center items-center px-3'>
                    <img className='imgShadow w-100' src={image4} alt="bitcoin" />
                </div>
            </Slider>
        </>
    )
}

export default Headerslider