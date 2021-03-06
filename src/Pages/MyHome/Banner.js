import React from 'react';
import { Link } from 'react-router-dom';
import anik from '../../images/anik_top2.png'

const Banner = () => {
    return (
        <div className='banner top-banner'>
            <div className='container'>
                <div className='d-block d-md-flex align-items-center justify-content-center'>
                    <div className='banner-content text-center text-md-start pt-5 custom-mobile-banner'>
                        <div className='banner-text w-75 custom-banner-text'>
                            <h1 className='custom-font-weight-600' style={{ color: '#3d3d3d'}}>Hi, I'm <span className='custom-primary-color'>Anik</span> Acharjee.</h1>
                            <h2 className='custom-secondary-color custom-font-weight-600'>Front-end ReactJs Developer.</h2>
                            <p className='fs-6 ' style={{ color: '#959596' }}>I'm Anik Acharjee a passionate frontend engineer working on projects using Javascript, React, Express, Mongo, Firebase, and Bootstrap technology over the last year. Side by side I am exploring NextJs and Typescript. The quality and mindset I have built ensure to fit any working culture quickly.</p>
                        </div>
                        <div className='banner-btn my-3 d-md-flex align-items-center justify-content-start '>
                            <Link className='btn custom-btn me-2 ' to='/about'>About Me</Link>
                            <Link className='btn custom-btn custom-btn-outline' to='/contact'>Contact Me</Link>
                        </div>
                    </div>
                    <div className='custom-mobile-image'>
                        <img src={anik} className='custom-image-size' alt='Anik'/>
                    </div>
                </div>



            </div>

            <div className='custom-space-btn-section'>

            </div>


        </div>
    );
};

export default Banner;