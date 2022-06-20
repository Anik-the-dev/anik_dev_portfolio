import React from 'react';
import resume from '../myFiles/resume.pdf'

const Footer = () => {
    return (
        <div className='w-100 bg-dark custom-footer'>
            <div className='d-flex align-items-center justify-content-around pt-5 text-light flex-wrap'>
                <div className='mt-5'>
                <p className=' fs-3 '>niksdev.</p>
                <p className=' fs-5'>&copy; All Rights Reserved!- niksdev 2022</p>
                </div>
                <div>
                    <p className=' fs-5 mt-5 ms-5 me-2'>Here is my Resume. You can download it.</p>
                    <a className='btn custom-btn me-2 text-light rounded px-3 ms-5' href={resume} download>Download Resume</a>
                </div>
            </div>

        </div>
    );
};

export default Footer;