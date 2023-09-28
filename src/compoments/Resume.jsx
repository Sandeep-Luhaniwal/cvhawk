import React from 'react'
import { Col, Row } from 'react-bootstrap'
import ResumeImg from '../assets/images/png/Resume.png'
import lineImg from '../assets/images/png/line2.png'
import { RightIcon } from './Icon'

const Resume = () => {
    return (
        <>
            <section>
                <div className="myContainer py-100 py-sm-130 py-md-160">
                    <Row className='align-items-center'>
                        <Col md={6} className='order-1 order-md-0 pt-4 pt-md-0'>
                            <img src={ResumeImg} alt="" className='w-100' />
                        </Col>
                        <Col md={6} className='order-0'>
                            <h2 className='mb-0 color_dark ff_primary fs_lg fw_medium'>Resume trailoring based on the <span className='color_primary'>job you’re applying</span> for</h2>
                            <div className='imgBlock pt-1'>
                                <div className='d-flex justify-content-center'>
                                    <img src={lineImg} alt="" className='me-4' />
                                </div>
                            </div>
                            <p className='mb-0 ff_primary fw_regular fs_sm pe-md-4 op-8 pt-2'>Quickly ensure that your resume covers key skills and experience by pasting the job ad you’re applying for</p>
                            <ul className='mb-0 ps-0 d-flex flex-column gap-3 gap-md-2 gap-lg-3 pt-3 pt-lg-4'>
                                <li className='d-flex'><RightIcon /><p className='ps-2 mb-0 ff_primary op-9 fs_sm fw_regular color_black ms-1'>Skills and experience analysis</p></li>
                                <li className='d-flex'><RightIcon /><p className='ps-2 mb-0 ff_primary op-9 fs_sm fw_regular color_black ms-1'>Actionable Checklist of what else to add to your resume</p></li>
                                <li className='d-flex'><RightIcon /><p className='ps-2 mb-0 ff_primary op-9 fs_sm fw_regular color_black ms-1'>Instant comparison between your resume and the job posting</p></li>
                            </ul>
                        </Col>
                    </Row>
                </div>
            </section>
        </>
    )
}

export default Resume