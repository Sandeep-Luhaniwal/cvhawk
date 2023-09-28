import React from 'react'
import { Col, Row } from 'react-bootstrap'
import helperImag from '../assets/images/png/Calender.png'

const Help = () => {
    return (
        <>
            <section className='bg_main'>
                <div className="myContainer py-100 py-sm-130 py-md-160">
                    <Row className='align-items-center justify-content-center'>
                        <Col md={6} className='d-none d-md-block'>
                            <img src={helperImag} alt="calenderImg" className='w-100' />
                        </Col>
                        <Col md={6}>
                            <h2 className='ff_primary fw_medium fs_lg mb-0 color_dark'>We’ll help you</h2>
                            <p className='mb-0 pt-3 ff_primary color_black fw_regular fs_sm'>Once you've booked a session, a confirmation email will be sent to the provided email address, containing all the necessary details, including the date, time, and instructions for the session.</p>
                            <div className='d-md-none d-flex justify-content-center pt-5'>
                                <img src={helperImag} alt="calenderImg" className='w_100' />
                            </div>
                            <div className='mt-3 mt-md-2 pt-4 pt-md-5'>
                                <button className='inline-btn color_main ff_primary fs_sm fw_semiBold'>Book a Call</button>
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>
        </>
    )
}

export default Help