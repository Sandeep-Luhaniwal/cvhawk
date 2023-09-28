import React from 'react'
import { Row, Col } from 'react-bootstrap'
import powerfullImg from '../assets/images/png/Powerfull_people.png'
import lineImg from '../assets/images/png/line.png'

const Powerfull = () => {
  return (
      <>
          <section className='bg_secondary'>
              <div className="myContainer py-40 py-md-90 py-lg-80">
                  <Row className='justify-content-center align-items-center'>
                      <Col lg={6} md={7} >
                          <h2 className='mb-0 color_dark ff_primary fs_lg fw_medium'>Powerful Tools to Create <span className='d-block color_primary'>Your Standout CV</span></h2>
                          <div className='d-none d-md-block'>
                              <img src={lineImg} alt="" />
                         </div>
                          <p className='mb-0 ff_primary fw_regular fs_sm pe-md-4 op-8'>Customize your CV to reflect your <b>unique personality</b> and professional brand. Choose from a wide range of <b>professionally designed</b> templates and layouts, allowing you to find the <b>perfect style</b> that aligns with your industry and career goals.</p>
                      </Col>
                      <Col lg={6} md={5} xs={9} className='pt-4 pt-md-0'>
                          <img src={powerfullImg} alt="powerfull" className='w-100' />
                      </Col>
                  </Row>
              </div>
          </section>
    </>
  )
}

export default Powerfull