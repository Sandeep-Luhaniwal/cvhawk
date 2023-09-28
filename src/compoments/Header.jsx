import React from 'react'
import image1 from '../assets/images/png/header_1.png'
import image2 from '../assets/images/png/header_2.png'
import image3 from '../assets/images/png/header_3.png'
import image4 from '../assets/images/png/header_4.png'
import image5 from '../assets/images/png/header_5.png'
import image6 from '../assets/images/png/header_6.png'
import image7 from '../assets/images/png/header_7.png'
import image8 from '../assets/images/png/header_8.png'
import Headerslider from './Headerslider'

const Header = () => {
  return (
    <div>
      <section className='mt-95 position-relative overflow-hidden'>
        <div className='shadow1'></div>
        <div className='d-none d-md-block'>
          <img src={image1} alt="" className=' position-absolute image1' />
          <img src={image2} alt="" className=' position-absolute image2' />
          <img src={image3} alt="" className=' position-absolute image3' />
          <img src={image4} alt="" className=' position-absolute image4' />
        </div>
        <img src={image5} alt="" className=' position-absolute image5' />
        <img src={image6} alt="" className=' position-absolute image6' />
        <img src={image7} alt="" className=' position-absolute image7' />
        <img src={image8} alt="" className=' position-absolute image8' />
        <div className="myContainer position-relative z-3">
          <div className="headerHight d-flex justify-content-center align-items-center">
            <div className="d-flex flex-column pb-5">
              <h1 className='mb-0 ff_primary fs_xl fw_semiBold color_black text-center'>Unlock Your Potential with a <span className='d-md-block'>Professional <span className=' position-relative textLine d-block d-sm-inline'>CV Builder</span></span></h1>
              <p className='text-center pt-2 op-7 ff_primary fs_sm color_black fw_regular'>Our user-friendly platform guides you through the process, allowing you <span className='d-md-block'>to customize every section to align with your unique career goals.</span></p>
              <div className='d-flex justify-content-center gap-sm-3 gap-2'>
                <div className=''>
                  <button className='inline-btn color_main ff_primary fs_sm fw_semiBold'>Get Started</button>
                </div>
                <div className=''>
                  <button className='inline-btn3 ff_primary color_primary fs_sm fw_semiBold'>Get Started</button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      <Headerslider />
    </div>
  )
}

export default Header