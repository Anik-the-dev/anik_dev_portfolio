import React from 'react';
import { Container } from 'react-bootstrap';
import duds from '../../images/dudsproject .png'
import nikseo from '../../images/nikseoproject.png'
import niksmoto from '../../images/niksmotoproject.png'

const Portfolio = () => {
    return (
        <Container>
            <h2 className='custom-dark-color custom-font-weight-600 fs-1 text-center'>Have a look at my <span className='custom-primary-color'>React </span>Projects</h2>
            <div className='mt-5'>
                <div className='custom-grid my-5'>

                    <div className='d-flex flex-column '>
                        <img src={duds} alt='niksmoto project' className='img-fluid custom-card-img' />
                        <div className='custom-height'>
                            <p className='text-start mt-3 custom-font-weight-600'>Duds Inventory.</p>
                            <p className='text-start custom-font-weight-500'>Secured Inventory for Dudsfashion admin only. Here Admins can analyze the growth of the business analyzing the previous data and also help to understand by statistics.</p>
                            <div className='d-flex align-items-center justify-content-between'>
                                <p className='text-start custom-font-weight-600'><a href='https://dudsfashion-auth.web.app/' className='text-success'>Detailed Project </a></p>
                                <p className='text-start custom-font-weight-600'><a href='https://dudsfashion-auth.web.app/' className='custom-primary-color'>Go Live </a></p>
                            </div>
                        </div>
                    </div>
                    

                    <div className='d-flex flex-column'>
                        <img src={niksmoto} alt='niksmoto project' className='img-fluid custom-card-img custom-border' />
                        <div className='custom-height'>
                            <p className='text-start mt-3 custom-font-weight-600'>Niks Moto.</p>
                            <p className='text-start custom-font-weight-500'>Secured Inventory for niksmoto admin only. Here Admins can analyze the growth of the business analyzing the previous data and also help to understand by statistics.</p>
                            <div className='d-flex align-items-center justify-content-between'>
                                <p className='text-start custom-font-weight-600'><a href='https://niksmoto.web.app/' className='text-success'>Detailed Project </a></p>
                                <p className='text-start custom-font-weight-600'><a href='https://niksmoto.web.app/' className='custom-primary-color'>Go Live </a></p>
                            </div>
                        </div>
                    </div>


                    <div className='d-flex flex-column '>
                        <img src={nikseo} alt='niksmoto project' className='img-fluid custom-card-img' />
                        <div className='custom-height'>
                            <p className='text-start mt-3 custom-font-weight-600'>Nik Seo.</p>
                            <p className='text-start custom-font-weight-500'>Secured Inventory for nikseo admin only. Here Admins can analyze the growth of the business analyzing the previous data and also help to understand by statistics.</p>
                            <div className='d-flex align-items-center justify-content-between'>
                                <p className='text-start custom-font-weight-600'><a href='https://nikseo22.web.app/' className='text-success'>Detailed Project </a></p>
                                <p className='text-start custom-font-weight-600'><a href='https://nikseo22.web.app/' className='custom-primary-color'>Go Live </a></p>
                            </div>
                        </div>
                    </div>

                  

                </div>
            </div>
        </Container>
    );
};

export default Portfolio;