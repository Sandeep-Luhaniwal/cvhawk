import React, { useState } from 'react'
import { CrossIcon, MenuIcon, } from './Icon'
import { Link } from 'react-router-dom';
import MainLogo from '../assets/images/png/Main_logo.png'

const Nav = () => {
    const [menu, setMenu] = useState(false);
    return (
        <>
            <nav className='position-fixed z-100 w-100 top-0 bg_main'>
                <div className='myContainer '>
                    <div className='d-flex justify-content-between align-items-center'>
                        <div className='gap-4 d-flex  opcity align-items-center'>
                            <img src={MainLogo} alt="mainlogo" className='w-100 max-w-157' />
                        </div>
                        <div className={`${menu ? 'show-nav' : 'nav-fix'}`}>
                            <div className='d-md-none crossIconset'
                                onClick={() => setMenu(false)}>
                                <Link><CrossIcon /></Link>
                            </div>
                            <div className='d-flex gap-40 align-items-center'>
                                <img src={MainLogo} alt="mainlogo" className='w-100 max-w-157 d-sm-none' />
                                <a onClick={() => setMenu(false)} className='ff_primary fs_sm color_black fw_regular text' href='#travels'>Home</a>
                                <a onClick={() => setMenu(false)} className='ff_primary fs_sm color_black fw_regular text' href='#feature'>About</a>
                                <a onClick={() => setMenu(false)} className='ff_primary fs_sm color_black fw_regular text' href='#passanger'>We’ll help you</a>
                                <a onClick={() => setMenu(false)} className='ff_primary fs_sm color_black fw_regular text' href='#order'>Testimonials</a>
                                <div className='d-sm-none'>
                                    <button onClick={() => setMenu(false)} className='inline-btn ff_primary fs_sm color_btn fw_semiBold'>
                                        Get in Touch
                                    </button>
                                </div>
                            </div>
                           
                        </div> 
                        <div className='d-none d-md-block'>
                            <button onClick={() => setMenu(false)} className='inline-btn ff_primary fs_sm color_btn fw_semiBold'>
                                Get in Touch
                            </button>
                        </div>
                        <div className='d-md-none d-flex gap-3 align-items-center'>
                            <div className='d-none d-sm-block d-md-none'>
                                <button onClick={() => setMenu(false)} className='inline-btn ff_primary fs_sm color_btn fw_semiBold'>
                                    Get in Touch
                                </button>
                            </div>
                            <Link onClick={() => setMenu(true)}>
                                <MenuIcon /></Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Nav