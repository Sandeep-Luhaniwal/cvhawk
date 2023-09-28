import React, { useEffect, useState } from 'react'
import reloder_img from '../assets/images/png/FooterLogo.png'

function Preloder() {
    const [loder, setloader] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setloader(false);
        }, 2500);
    }, []);
    if (loder === true) {
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "initial";
    }
    return (
        <>
            {loder ? (
                <section className="bg-black top-0 z-1000 start-0 position-fixed w-100 h-100 d-flex justify-content-center align-items-center"
                >
                    <div className="d-flex justify-conent-center">
                        <div className=" position-relative d-flex justify-content-center align-items-center">
                            <img className="Preloader_img animation_preloader mx-auto " src={reloder_img} alt="" />
                        </div>
                    </div>
                </section>
            ) : (
                ""
            )}
        </>
    );
}

export default Preloder
