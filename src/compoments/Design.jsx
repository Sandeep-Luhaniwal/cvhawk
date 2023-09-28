import React from 'react'
import { Col, Row } from 'react-bootstrap'
import DesignImg from '../assets/images/png/designed.png'
import { RightIcon } from './Icon'

const Design = () => {
    return (
        <>
            <section className='bg_secondary overflow-hidden'>
                <div className="myContainer py-40 py-sm-80 py-md-120">
                    <Row className='align-items-center'>
                        <Col lg={7} md={6}>
                            <h2 className='mb-0 color_dark ff_primary fs_lg fw_medium'>20+ <span className='color_primary'>Professionally designed</span> resume sections</h2>
                            <p className='mb-0 ff_primary fw_regular fs_sm pe-md-4 op-8 pt-3'>Express your professional history without limitations or worry about how your resume looks</p>
                            <ul className='mb-0 ps-0 d-flex flex-column gap-3 gap-md-2 gap-lg-3 pt-3 pt-lg-4'>
                                <li className='d-flex'><RightIcon /><p className='ps-2 mb-0 ff_primary op-9 fs_sm fw_regular color_black ms-1'>Professional sections like <b>Experience, Skills, Summary</b> and <b>Education</b></p></li>
                                <li className='d-flex'><RightIcon /><p className='ps-2 mb-0 ff_primary op-9 fs_sm fw_regular color_black ms-1'>Professional sections like <b>Strengths, Quotes, Books, Interests</b> and My <b>Time</b>.</p></li>
                                <li className='d-flex'><RightIcon /><p className='ps-2 mb-0 ff_primary op-9 fs_sm fw_regular color_black ms-1'>Other sections like <b>Certifications, Awards, Achievements, Language</b> and <b>Reference</b></p></li>
                            </ul>
                            <div className='d-md-none d-flex justify-content-center'>
                                <img src={DesignImg} alt="design" className='w_100' />
                            </div>
                            <div className='mt-md-3 pt-4'>
                                <button className='inline-btn color_main ff_primary fs_sm fw_semiBold'>Get Started</button>
                            </div>
                        </Col>
                        <Col lg={5} md={6} className='d-none d-md-block'>
                            <img src={DesignImg} alt="design" className='w-100 imgscale' />
                        </Col>
                    </Row>
                </div>
            </section>
        </>
    )
}

export default Design