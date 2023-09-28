import * as React from "react";
import { useEffect, useState, useRef } from "react";
import Slider from "react-slick";
import { CustomIcon, MakeIcon, TemplateIcon, ThemeIcon } from "./Icon";

const Slidercontent = () => {
    const [nav1, setNav1] = useState();
    const [nav2, setNav2] = useState();
    const slider1 = useRef(null);
    const slider2 = useRef(null);

    //i dont seem to need this
    useEffect(() => {
        setNav2(slider2.current);
        setNav1(slider1.current);
    }, []);
    var settings = {
        dots: true,
        autoplay: false,
        speed: 3000,
        autoplaySpeed: 1000,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        pouseonhover: true,
        cssEase: 'linear',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },

            {
                breakpoint: 680,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 426,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
        ]

    };

    return (
        <div>
            <Slider {...settings}
                asNavFor={nav1}
                ref={slider2}
                swipeToSlide={true}
                focusOnSelect={true}
                className=""
            >
                <div className="px-2">
                    <div className="sliderCard d-flex justify-content-center align-items-center flex-column">
                        <ThemeIcon />
                        <h3 className="pt-3 mb-0 ff_primary fw_medium fs_md">Theme</h3>
                    </div>
                </div>
                <div className="px-2">
                    <div className="sliderCard d-flex justify-content-center align-items-center flex-column">
                        <ThemeIcon />
                        <h3 className="pt-3 mb-0 ff_primary fw_medium fs_md">Make copies</h3>
                    </div>
                </div>

                <div className="px-2">
                    <div className="sliderCard d-flex justify-content-center align-items-center flex-column">
                        <CustomIcon />
                        <h3 className="pt-3 mb-0 ff_primary fw_medium fs_md">Customize</h3>
                    </div>

                </div>
                <div className="px-2">
                    <div className="sliderCard d-flex justify-content-center align-items-center flex-column">
                        <MakeIcon />
                        <h3 className="pt-3 mb-0 ff_primary fw_medium fs_md">Copies</h3>
                    </div>
                </div>
                <div className="px-2">
                    <div className="sliderCard d-flex justify-content-center align-items-center flex-column">
                        <TemplateIcon />
                        <h3 className="pt-3 mb-0 ff_primary fw_medium fs_md">Templates</h3>
                    </div>
                </div>
            </Slider>

            <Slider className="pt-5 px-3 z-n1" asNavFor={nav2} ref={slider1}
                arrows={false}
            >
                <div>
                    <p className="ff_primary mb-0 fs_sm fw_regular">Theme's robust features allow you to showcase your skills, accomplishments, and experiences in a captivating way. From customizing the layout to selecting the perfect color scheme, every detail can be tailored to match your style and industry. </p>
                </div>
                <div>
                    <p className="ff_primary mb-0 fs_sm fw_regular">Theme's robust features allow you to showcase your skills, accomplishments, and experiences in a captivating way. From customizing the layout to selecting the perfect color scheme, every detail can be tailored to match your style and industry. </p>
                </div>
                <div>
                    <p className='mb-0 ff_primary fw_regular fs_sm pe-md-4 op-8'>Customize your CV to reflect your <b>unique personality</b> and professional brand. Choose from a wide range of <b>professionally designed</b> templates and layouts, allowing you to find the <b>perfect style</b> that aligns with your industry and career goals.</p>
                </div>
                <div>
                    <p className="ff_primary mb-0 fs_sm fw_regular">Theme's robust features allow you to showcase your skills, accomplishments, and experiences in a captivating way. From customizing the layout to selecting the perfect color scheme, every detail can be tailored to match your style and industry. </p>
                </div>
                <div>
                    <p className="ff_primary mb-0 fs_sm fw_regular">Theme's robust features allow you to showcase your skills, accomplishments, and experiences in a captivating way. From customizing the layout to selecting the perfect color scheme, every detail can be tailored to match your style and industry. </p>
                </div>
                <div>
                    <p className='mb-0 ff_primary fw_regular fs_sm pe-md-4 op-8'>Customize your CV to reflect your <b>unique personality</b> and professional brand. Choose from a wide range of <b>professionally designed</b> templates and layouts, allowing you to find the <b>perfect style</b> that aligns with your industry and career goals.</p>
                </div>

            </Slider>


        </div>
    );
};


export default Slidercontent
