import React from 'react'
import mainLogo from '../assets/images/png/FooterLogo.png'
import { Col, Row } from 'react-bootstrap'
import { CallIcon, FacbookIcon, InstagramIcon, MessageIcon, TwitterIcon } from './Icon'

const Footer = () => {
    return (
        <>
            <section className='bg_footer pb-md-70 pb-sm-70 pb-30'>
                <div className="myContainer">
                    <Row className=' justify-content-between'>
                        <Col md={4}>
                            <img src={mainLogo} alt="mainlogo" />
                            <p className='ff_primary fs_sm fw_regular mb-0 pb-2 color_main'>Sit urna ornare sed quam molestie sit placerat convallis. Ac condimentum mollis malesuada placerat in placerat id facilisis.</p>
                            <div className='d-none d-sm-block'>
                                <div className='d-flex gap-32 pt-4 '>
                                    <TwitterIcon />
                                    <FacbookIcon />
                                    <InstagramIcon />
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} md={7} className='pt-md-5'>
                            <div className='pt-md-3 d-flex justify-content-between pt-4 mt-1 mt-sm-0'>
                                <ul className='mb-0 ps-0 d-flex flex-column gap-20 '>
                                    <li className='ff_primary fs_sm fw_medium color_main'>Quick Links</li>
                                    <li><a href="#" className='ff_primary fs_sm fw_regular op-9 color_main'>Home</a></li>
                                    <li><a href="#" className='ff_primary fs_sm fw_regular op-9 color_main'>About</a></li>
                                    <li><a href="#" className='ff_primary fs_sm fw_regular op-9 color_main'>We’ll help you</a></li>
                                    <li><a href="#" className='ff_primary fs_sm fw_regular op-9 color_main'>Testimonials</a></li>
                                </ul>
                                <ul className='mb-0 ps-0 d-flex flex-column gap-20 '>
                                    <li className='ff_primary fs_sm fw_medium color_main'>Support</li>
                                    <li><a href="#" className='ff_primary fs_sm fw_regular op-9 color_main'><CallIcon /><span className='ps-1'>+012 345 67890</span></a></li>
                                    <li><a href="#" className='ff_primary fs_sm fw_regular op-9 color_main'><MessageIcon /><span className='ps-1'>Cvhawk@gmail.com</span></a></li>
                                </ul>
                                <ul className='mb-0 ps-0 d-flex flex-column gap-20 d-none d-sm-block '>
                                    <li className='ff_primary fs_sm fw_medium color_main'>Legal</li>
                                    <li><a href="#" className='ff_primary fs_sm fw_regular op-9 color_main'>Privacy Policy</a></li>
                                    <li><a href="#" className='ff_primary fs_sm fw_regular op-9 color_main'>Terms & conditions</a></li>
                                </ul>
                            </div>
                            <ul className='mb-0 ps-0 d-flex flex-column gap-20 pt-4 mt-1 d-sm-none'>
                                <li className='ff_primary fs_sm fw_medium color_main'>Legal</li>
                                <li><a href="#" className='ff_primary fs_sm fw_regular op-9 color_main'>Privacy Policy</a></li>
                                <li><a href="#" className='ff_primary fs_sm fw_regular op-9 color_main'>Terms & conditions</a></li>
                            </ul>
                            <div className='d-flex gap-32 pt-4 mt-1 d-sm-none'>
                                <TwitterIcon />
                                <FacbookIcon />
                                <InstagramIcon />
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>
            <section className='bg_footer bordertop'>
                <div className='py-3 md:my-1'>
                    <p className='ff_primary fs_xs fw_regular color_main my-0 text-center'>Copyright@CVhawk2023</p>
                </div>
            </section>
        </>
    )
}

export default Footer