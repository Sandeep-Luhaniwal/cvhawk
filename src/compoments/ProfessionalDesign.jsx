import React from 'react'
import { Col, Row, Container } from 'react-bootstrap'
import { Calendar, Circle, Dot, Location, Star, Tick } from './Icons'

const ProfessionalDesign = () => {
    window.onload = () => {
        let sliderImagesBox = document.querySelectorAll('.cards-box');
        sliderImagesBox.forEach(el => {
            let imageNodes = el.querySelectorAll('.card:not(.hide)')
            let arrIndexes = []; // Index array
            (() => {
                // The loop that added values to the arrIndexes array for the first time
                let start = 0;
                while (imageNodes.length > start) {
                    arrIndexes.push(start++);
                }
            })();

            let setIndex = (arr) => {
                for (let i = 0; i < imageNodes.length; i++) {
                    imageNodes[i].dataset.slide = arr[i] // Set indexes
                }
            }
            el.addEventListener('click', () => {
                arrIndexes.unshift(arrIndexes.pop());
                setIndex(arrIndexes)
            })
            setIndex(arrIndexes) // The first indexes addition
        });
    };


    return (
        <>
            <section className='bg_secondary'>
                <Container className='pt-5 pb-5'>
                    <Row className='pt-5 pb-5'>
                        <Col lg={6}>
                            <div>
                                <h2 className='fs-40 ff-primary fw-500 fc-darkblack max-w-558'>20+ <span className='fc-primary'>Professionally designed </span>resume sections</h2>
                                <p className='fs-16 fw-400 fc-black ff-primary opacity-75 max-w-558 mt-2'>Express your professional history without limitations or worry about how your resume looks</p>
                            </div>

                            <div className='d-flex align-items-center gap-2 mt-3'>
                                <Tick />
                                <p className='mb-0 ff-primary fs-16 fw-400 fc-black'>Professional sections like <span className='fw-600'> Experience, Skills, Summary </span>and <span className='fw-600'> Education</span></p>
                            </div>

                            <div className='d-flex align-items-center gap-2 mt-2'>
                                <Tick />
                                <p className='mb-0 ff-primary fs-16 fw-400 fc-black'>Professional sections like <span className='fw-600'>Strengths, Quotes, Books, Interests </span> and <span className='fw-600'> My Time</span></p>
                            </div>

                            <div className='d-flex gap-2 mt-2'>
                                <Tick />
                                <p className='mb-0 ff-primary fs-16 fw-400 fc-black max-w-558'>Other sections like <span className='fw-600'>Certifications, Awards, Achievements, Language</span> and <span className='fw-600'> Reference</span></p>
                            </div>

                            <button className='headerbtn bg_primary ff-primary fs-16 fw-600 fc-white mt-5'>Get Started</button>
                        </Col>

                        <Col lg={6}>
                            <div className='d-flex justify-content-end'>
                                <div class="cards-box">
                                    <div class="card hide">
                                        <div class="content-placeholder">
                                            <div class="row">
                                                <div class="img">
                                                    <p>Experience</p>
                                                </div>
                                                <div class="img-text"></div>
                                            </div>
                                            <div class="text text--l"></div>
                                            <div class="text text--m"></div>
                                            <div class="text text--s"></div>
                                            <div class="btn"></div>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <div class="content-placeholder">
                                            <div>
                                                <p className='mb-0 fs-12 fw-400 ff-primary fc-black'>Experience</p>
                                                <div className='cardLine'></div>
                                                <p className='mb-0 fs-16 ff-primary fw-400 fc-grey'>Lead Water Fetcher</p>
                                                <p className='mb-0 ff-primary fc-green fs-12 fw-400'>River Nile</p>
                                                <div className='d-flex align-items-center gap-2 '>
                                                    <Calendar />
                                                    <p className='mb-0 fs-9 ff-primary fw-400 fc-lightgrey'>12/2019-Ongoing</p>
                                                    <div className='d-flex align-items-center gap-2'>
                                                        <Location/>
                                                        <p className='mb-0 fs-9 ff-primary fw-400 fc-lightgrey'>Cairo</p>
                                                    </div>
                                                </div>
                                                <p className='mb-0 ff-primary fs-12 fw-400 fc-black opacity-75'>River Nile is largest river and very nice</p>
                                                <div className='d-flex align-items-center gap-2'>
                                                    <span className='dot'></span>
                                                    <p className='mb-0 fs-12 ff-primary fw-400 fc-black'>Reduced Water Fetching time by 30%</p>
                                                </div>
                                                <div className='d-flex align-items-start gap-2'>
                                                    <span className='dot pe-1 mt-2'></span>
                                                    <p className='mb-0 fs-12 ff-primary fw-400 fc-black'>Introduced a technique that increased amount of water fetched per
                                                        fetching by 50%</p>
                                                </div>
                                                <div className='d-flex align-items-start gap-2'>
                                                    <span className='dot pe-1 mt-2'></span>
                                                    <p className='mb-0 fs-12 ff-primary fw-400 fc-black'>Developed & ran a training programme for new fetchers enabling
                                                        higher productivity per head</p>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <div class="content-placeholder">
                                            <div>
                                                <p className='mb-0 fs-12 fw-400 ff-primary fc-black'>Education</p>
                                                <div className='cardLine'></div>
                                                <p className='mb-0 fs-16 ff-primary fw-400 fc-grey'>Bachelor’s in
                                                    Watering</p>
                                                <p className='mb-0 ff-primary fc-green fs-12 fw-400'>University of Watering</p>
                                                <div className='d-flex align-items-center '>
                                                    <Star />
                                                    <p className='mb-0 mt-1 fs-12 ff-primary fw-300 fc-black'>1st Class Honours</p>
                                                </div>
                                                <div className='d-flex  gap-2 mt-4 ms-4'>
                                                    <span className='dot mt-2'></span>
                                                    <p className='mb-0 fs-12 ff-primary fw-300 fc-grey max-w-151'>Including 1st in Water
                                                        buckets & water guns</p>
                                                </div>
                                                <div className='d-flex align-items-start gap-2 ms-4'>
                                                    <span className='dot pe-1 mt-2'></span>
                                                    <p className='mb-0 fs-12 ff-primary fw-300 fc-grey max-w-151'>Top Scorer in rain simulation
                                                        project</p>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <div class="content-placeholder">
                                            <div className='mt-4'>
                                                <p className='mb-0 fs-12 fw-400 ff-primary fc-black'>Languages</p>
                                                <div className='cardLine'></div>
                                                <div className='d-flex align-items-center gap-5 mt-3 lineBottom'>
                                                    <p className='mb-0 ff-primary fs-16 fw-400 fc-grey'>English</p>
                                                    <div> <Circle /></div>
                                                </div>

                                                <div className='d-flex align-items-center gap-5 mt-3 lineBottom1 mb-5 pb-2 ms-3' id='urdu'>
                                                    <p className='mb-0 ff-primary fs-12 fw-400 fc-grey'>Urdu</p>
                                                    <div> <Circle /></div>
                                                </div>


                                            </div>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <div class="content-placeholder">
                                            <p className='mb-0 fs-12 fw-400 ff-primary fc-black mt-4'>Skills</p>
                                            <div className='cardLine'></div>
                                            <div className='d-flex align-items-center gap-5 mt-4' id='btns'>
                                                <button className='fs-10 ff-primary fw-400 fc-greyish'>WaterBots</button>
                                                <button className='fs-10 ff-primary fw-400 fc-greyish'>WaterFight</button>
                                            </div>
                                            <div id='btns' className='mt-2 mb-5'>
                                                <button className='fs-10 ff-primary fw-400 fc-greyish'>Water Fetch</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default ProfessionalDesign