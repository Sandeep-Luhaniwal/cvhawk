import React from 'react'
import themeslider from '../assets/images/png/Theme_img.png'
import { Col, Row } from 'react-bootstrap'
import Slidercontent from './Slidercontent'

const Themeslider = () => {
  return (
      <>
          <section>
              <div className="myContainer py-40 py-sm-80 py-md-160">
                  <Row>
                      <Col md={6} className='pb-3 pb-md-0'>
                          <img src={themeslider} alt="theme"  className='w-100'/>
                      </Col>
                      <Col md={6} className='pt-5 pt-md-0'>
                      <Slidercontent/>
                      </Col>
                  </Row>
          </div>
          </section> 
    </>
  )
}

export default Themeslider