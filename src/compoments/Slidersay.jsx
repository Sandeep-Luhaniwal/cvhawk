import React from 'react'
import arrow from '../assets/images/png/Image6.png'
import { Col, Row } from 'react-bootstrap'
import Team1 from '../assets/images/png/Image1.png'
import Team2 from '../assets/images/png/Image2.png'
import Team3 from '../assets/images/png/Image3.png'
import Team4 from '../assets/images/png/Image4.png'
import Team5 from '../assets/images/png/Image5.png'
import Star from '../assets/images/svg/Star.svg'
import Slider from 'react-slick'


const Slidersay = () => {
    var settings = {
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        pouseonhover: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
        ]

    };
    return (
        <>
            <section className='bg_btn overflow-hidden' >
                <div className="myContainer py-60 py-md-80 px-2 px-sm-4">
                    <h2 className='text-center ff_primary fs_lg fw_medium mb-0 pb-4 pb-lg-5'>What our Clients Says</h2>
                    <Slider {...settings} className='px-1 px-sm-5 px-xl-0'>
                        <Row className='justify-content-center d-flex'>
                            <Col sm={6} lg={4} className='pt-4'>
                                <div className='Slidercard position-relative'>
                                    <img src={arrow} alt="arrow" className='position-absolute arrowImg' />
                                    <p className='ff_primary color_black fs_sm fw_regular mb-0'>Sit urna ornare sed quam molestie sit placerat convallis. Ac condimentum mollis malesuada placerat in placerat</p>
                                </div>
                                <div className='pt-32 d-flex ms-3'>
                                    <img src={Team1} alt="team1" className='team' />
                                    <div className='ps-2 ms-1'>
                                        <h3 className='mb-0 ff_primary fs_2sm fw_regular color_dark'>Darrell Steward</h3>
                                        <ul className='d-flex mb-0 ps-0'>
                                            <li><img src={Star} alt="star" /></li>
                                            <li><img src={Star} alt="star" /></li>
                                            <li><img src={Star} alt="star" /></li>
                                            <li><img src={Star} alt="star" /></li>
                                            <li><img src={Star} alt="star" /></li>
                                        </ul>
                                    </div>
                                </div>
                            </Col>
                            <Col sm={6} lg={4} className='d-none d-sm-block'>
                                <div className='Slidercard position-relative'>
                                    <img src={arrow} alt="arrow" className='position-absolute arrowImg' />
                                    <p className='ff_primary color_black fs_sm fw_regular mb-0'>Magna ipsum erat magna nulla auctor. Phasellus consectetur aliquam vel at non faucibus viverra.</p>
                                </div>
                                <div className='pt-32 d-flex ms-3'>
                                    <img src={Team2} alt="team1" className='team' />
                                    <div className='ps-2 ms-1'>
                                        <h3 className='mb-0 ff_primary fs_2sm fw_regular color_dark'>Savannah Nguyen</h3>
                                        <ul className='d-flex mb-0 ps-0'>
                                            <li><img src={Star} alt="star" /></li>
                                            <li><img src={Star} alt="star" /></li>
                                            <li><img src={Star} alt="star" /></li>
                                            <li><img src={Star} alt="star" /></li>
                                            <li><img src={Star} alt="star" /></li>
                                        </ul>
                                    </div>
                                </div>
                            </Col>
                            <Col md={6} lg={4} className='pt-5 d-none d-md-block'>
                                <div className='Slidercard position-relative'>
                                    <img src={arrow} alt="arrow" className='position-absolute arrowImg' />
                                    <p className='ff_primary color_black fs_sm fw_regular mb-0'>Morbi leo ullamcorper in et viverra. Neque elit scelerisque purus praesent nulla ut a id.</p>
                                </div>
                                <div className='pt-32 d-flex ms-3'>
                                    <img src={Team3} alt="team1" className='team' />
                                    <div className='ps-2 ms-1'>
                                        <h3 className='mb-0 ff_primary fs_2sm fw_regular color_dark'>Esther Howard</h3>
                                        <ul className='d-flex mb-0 ps-0'>
                                            <li><img src={Star} alt="star" /></li>
                                            <li><img src={Star} alt="star" /></li>
                                            <li><img src={Star} alt="star" /></li>
                                            <li><img src={Star} alt="star" /></li>
                                            <li><img src={Star} alt="star" /></li>
                                        </ul>
                                    </div>
                                </div>
                            </Col>
                            <Col md={6} lg={4} className='pt-3 mt-1 d-none d-md-block'>
                                <div className='Slidercard position-relative'>
                                    <img src={arrow} alt="arrow" className='position-absolute arrowImg' />
                                    <p className='ff_primary color_black fs_sm fw_regular mb-0'>Urna ac eu cras pellentesque scelerisque et. Vestibulum sed felis leo leo massa elementum sit praesent eu.</p>
                                </div>
                                <div className='pt-32 d-flex ms-3'>
                                    <img src={Team4} alt="team1" className='team' />
                                    <div className='ps-2 ms-1'>
                                        <h3 className='mb-0 ff_primary fs_2sm fw_regular color_dark'>Jenny Wilson</h3>
                                        <ul className='d-flex mb-0 ps-0'>
                                            <li><img src={Star} alt="star" /></li>
                                            <li><img src={Star} alt="star" /></li>
                                            <li><img src={Star} alt="star" /></li>
                                            <li><img src={Star} alt="star" /></li>
                                            <li><img src={Star} alt="star" /></li>
                                        </ul>
                                    </div>
                                </div>
                            </Col>
                            <Col md={4} className='pt-4 mt-3 d-none d-lg-block'>
                                <div className='Slidercard position-relative'>
                                    <img src={arrow} alt="arrow" className='position-absolute arrowImg' />
                                    <p className='ff_primary color_black fs_sm fw_regular mb-0'>Nibh in commodo faucibus tincidunt. Adipiscing lobortis est elit neque sem scelerisque tellus magna urna.</p>
                                </div>
                                <div className='pt-32 d-flex ms-3'>
                                    <img src={Team5} alt="team5" className='team' />
                                    <div className='ps-2 ms-1'>
                                        <h3 className='mb-0 ff_primary fs_2sm fw_regular color_dark'>Wade Warren</h3>
                                        <ul className='d-flex mb-0 ps-0'>
                                            <li><img src={Star} alt="star" /></li>
                                            <li><img src={Star} alt="star" /></li>
                                            <li><img src={Star} alt="star" /></li>
                                            <li><img src={Star} alt="star" /></li>
                                            <li><img src={Star} alt="star" /></li>
                                        </ul>
                                    </div>
                                </div>
                            </Col>
                        </Row >
                        <Row className='justify-content-center d-flex'>
                            <Col sm={6} lg={4} className='pt-4'>
                                <div className='Slidercard position-relative'>
                                    <img src={arrow} alt="arrow" className='position-absolute arrowImg' />
                                    <p className='ff_primary color_black fs_sm fw_regular mb-0'>Magna ipsum erat magna nulla auctor. Phasellus consectetur aliquam vel at non faucibus viverra.</p>
                                </div>
                                <div className='pt-32 d-flex ms-3'>
                                    <img src={Team2} alt="team1" className='team' />
                                    <div className='ps-2 ms-1'>
                                        <h3 className='mb-0 ff_primary fs_2sm fw_regular color_dark'>Savannah Nguyen</h3>
                                        <ul className='d-flex mb-0 ps-0'>
                                            <li><img src={Star} alt="star" /></li>
                                            <li><img src={Star} alt="star" /></li>
                                            <li><img src={Star} alt="star" /></li>
                                            <li><img src={Star} alt="star" /></li>
                                            <li><img src={Star} alt="star" /></li>
                                        </ul>
                                    </div>
                                </div>
                            </Col>
                            <Col sm={6} lg={4} className=' d-none d-sm-block'>
                                <div className='Slidercard position-relative'>
                                    <img src={arrow} alt="arrow" className='position-absolute arrowImg' />
                                    <p className='ff_primary color_black fs_sm fw_regular mb-0'>Sit urna ornare sed quam molestie sit placerat convallis. Ac condimentum mollis malesuada placerat in placerat</p>
                                </div>
                                <div className='pt-32 d-flex ms-3'>
                                    <img src={Team1} alt="team1" className='team' />
                                    <div className='ps-2 ms-1'>
                                        <h3 className='mb-0 ff_primary fs_2sm fw_regular color_dark'>Darrell Steward</h3>
                                        <ul className='d-flex mb-0 ps-0'>
                                            <li><img src={Star} alt="star" /></li>
                                            <li><img src={Star} alt="star" /></li>
                                            <li><img src={Star} alt="star" /></li>
                                            <li><img src={Star} alt="star" /></li>
                                            <li><img src={Star} alt="star" /></li>
                                        </ul>
                                    </div>
                                </div>
                            </Col>
                            <Col md={6} lg={4} className='pt-5 d-none d-md-block'>
                                <div className='Slidercard position-relative'>
                                    <img src={arrow} alt="arrow" className='position-absolute arrowImg' />
                                    <p className='ff_primary color_black fs_sm fw_regular mb-0'>Morbi leo ullamcorper in et viverra. Neque elit scelerisque purus praesent nulla ut a id.</p>
                                </div>
                                <div className='pt-32 d-flex ms-3'>
                                    <img src={Team3} alt="team1" className='team' />
                                    <div className='ps-2 ms-1'>
                                        <h3 className='mb-0 ff_primary fs_2sm fw_regular color_dark'>Esther Howard</h3>
                                        <ul className='d-flex mb-0 ps-0'>
                                            <li><img src={Star} alt="star" /></li>
                                            <li><img src={Star} alt="star" /></li>
                                            <li><img src={Star} alt="star" /></li>
                                            <li><img src={Star} alt="star" /></li>
                                            <li><img src={Star} alt="star" /></li>
                                        </ul>
                                    </div>
                                </div>
                            </Col>
                            <Col md={6} lg={4} className='pt-3 mt-1 d-none d-md-block'>
                                <div className='Slidercard position-relative'>
                                    <img src={arrow} alt="arrow" className='position-absolute arrowImg' />
                                    <p className='ff_primary color_black fs_sm fw_regular mb-0'>Urna ac eu cras pellentesque scelerisque et. Vestibulum sed felis leo leo massa elementum sit praesent eu.</p>
                                </div>
                                <div className='pt-32 d-flex ms-3'>
                                    <img src={Team4} alt="team1" className='team' />
                                    <div className='ps-2 ms-1'>
                                        <h3 className='mb-0 ff_primary fs_2sm fw_regular color_dark'>Jenny Wilson</h3>
                                        <ul className='d-flex mb-0 ps-0'>
                                            <li><img src={Star} alt="star" /></li>
                                            <li><img src={Star} alt="star" /></li>
                                            <li><img src={Star} alt="star" /></li>
                                            <li><img src={Star} alt="star" /></li>
                                            <li><img src={Star} alt="star" /></li>
                                        </ul>
                                    </div>
                                </div>
                            </Col>
                            <Col md={4} className='pt-4 mt-3 d-none d-lg-block'>
                                <div className='Slidercard position-relative'>
                                    <img src={arrow} alt="arrow" className='position-absolute arrowImg' />
                                    <p className='ff_primary color_black fs_sm fw_regular mb-0'>Nibh in commodo faucibus tincidunt. Adipiscing lobortis est elit neque sem scelerisque tellus magna urna.</p>
                                </div>
                                <div className='pt-32 d-flex ms-3'>
                                    <img src={Team5} alt="team5" className='team' />
                                    <div className='ps-2 ms-1'>
                                        <h3 className='mb-0 ff_primary fs_2sm fw_regular color_dark'>Wade Warren</h3>
                                        <ul className='d-flex mb-0 ps-0'>
                                            <li><img src={Star} alt="star" /></li>
                                            <li><img src={Star} alt="star" /></li>
                                            <li><img src={Star} alt="star" /></li>
                                            <li><img src={Star} alt="star" /></li>
                                            <li><img src={Star} alt="star" /></li>
                                        </ul>
                                    </div>
                                </div>
                            </Col>
                        </Row >
                    </Slider>
                </div>
            </section >
        </>
    )
}

export default Slidersay