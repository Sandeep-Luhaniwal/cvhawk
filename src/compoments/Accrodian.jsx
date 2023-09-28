import React from 'react'
import { Col, Row } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';

const Accrodian = () => {
    return (
        <>
            <section className='bg_main'>
            <div className="myContainer px-4 py-40 py-sm-80 py-md-160">
                <h2 className='text-center ff_primary fs_lg fw_medium mb-0 pb-4'>Frequently Asked Questions</h2>
                <Row className='justify-content-center'>
                    <Col lg={9}>
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0" className='py-4'>
                                <Accordion.Header>
                                    <h3 className='color_dark ff_primary fw_regular fs_2md mb-0'>Q1. How does the CVhawk work?</h3></Accordion.Header>
                                <Accordion.Body>
                                    <p className='color_black ff_primary fw_regular fs_sm mb-0 pt-3'>Absolutely! We understand that your CV is a dynamic document that may require updates and modifications over time. Once you've saved your CV using our CVhawk, you can easily edit and make changes whenever needed.</p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1" className='py-4'>
                                <Accordion.Header><h3 className='color_dark ff_primary fw_regular fs_2md mb-0'>Q2. Is the CVhawk completely free to use?</h3></Accordion.Header>
                                <Accordion.Body>
                                    <p className='color_black ff_primary fw_regular fs_sm mb-0 pt-3'>Absolutely! We understand that your CV is a dynamic document that may require updates and modifications over time. Once you've saved your CV using our CVhawk, you can easily edit and make changes whenever needed.</p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2" className='py-4'>
                                <Accordion.Header><h3 className='color_dark ff_primary fw_regular fs_2md mb-0'>Q3. Can I edit my CV after I've saved it?</h3></Accordion.Header>
                                <Accordion.Body>
                                    <p className='color_black ff_primary fw_regular fs_sm mb-0 pt-3'>Absolutely! We understand that your CV is a dynamic document that may require updates and modifications over time. Once you've saved your CV using our CVhawk, you can easily edit and make changes whenever needed.</p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3" className='py-4'>
                                <Accordion.Header><h3 className='color_dark ff_primary fw_regular fs_2md mb-0'>Q4. Can I import my existing CV into the builder?</h3></Accordion.Header>
                                <Accordion.Body>
                                    <p className='color_black ff_primary fw_regular fs_sm mb-0 pt-3'>Absolutely! We understand that your CV is a dynamic document that may require updates and modifications over time. Once you've saved your CV using our CVhawk, you can easily edit and make changes whenever needed.</p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4" className='py-4'>
                                <Accordion.Header><h3 className='color_dark ff_primary fw_regular fs_2md mb-0'>Q5. Is my personal information safe and secure?</h3></Accordion.Header>
                                <Accordion.Body>
                                    <p className='color_black ff_primary fw_regular fs_sm mb-0 pt-3'>Absolutely! We understand that your CV is a dynamic document that may require updates and modifications over time. Once you've saved your CV using our CVhawk, you can easily edit and make changes whenever needed.</p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="5" className='py-4'>
                                <Accordion.Header><h3 className='color_dark ff_primary fw_regular fs_2md mb-0'>Q6. What kind of templates are available in the CV builder?</h3></Accordion.Header>
                                <Accordion.Body>
                                    <p className='color_black ff_primary fw_regular fs_sm mb-0 pt-3'>Absolutely! We understand that your CV is a dynamic document that may require updates and modifications over time. Once you've saved your CV using our CVhawk, you can easily edit and make changes whenever needed.</p>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                </Row>
                </div>
            </section>
        </>
    )
}

export default Accrodian