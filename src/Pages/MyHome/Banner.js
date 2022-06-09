import React from 'react';
import { Link } from 'react-router-dom';
import anik from '../../images/anik_top2.png'

const Banner = () => {
    return (
        <div className='banner top-banner'>
            <div className='container'>
                <div className='d-block d-md-flex align-items-center justify-content-center '>
                    <div className='banner-content text-start pt-5'>
                        <div className='banner-text w-75'>
                            <h1 className='custom-font-weight-600' style={{ color: '#3d3d3d', fontSize: '3.5rem' }}>Front-end Developer | <span className='custom-secondary-color'>ReactJs.</span></h1>
                            <p className='fs-6 ' style={{ color: '#959596', fontSize: '3.5rem' }}>Secured Inventory for Dudsfashion admin only. Here Admins can analyze the growth of the business analyzing the previous data and also help to understand by statistics.Admins also can add, delete , increase and decrease items based on the production and sold.</p>
                        </div>
                        <div className='banner-btn my-3 d-md-flex align-items-center justify-content-start '>
                            <Link className='btn custom-primary-bg-color me-2 ' to='/login'>Login to Access</Link>
                            <Link className='btn custom-secondary-bg-color' to='/inventory'>Go Inventory</Link>
                        </div>
                    </div>
                    <div className=''>
                        <img src={anik} className='custom-image-size' alt='Anik'/>
                    </div>
                </div>



            </div>


        </div>
    );
};

export default Banner;