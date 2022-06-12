import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import acv from '../../images/anik_middle2.png'
import resume from '../../myFiles/resume.pdf'


const Achievements = () => {
    return (
        <div className=' my-5 mx-auto' style={{ backgroundColor: '#F47C7C', paddingBottom: '120px', paddingTop: '120px' }}>
            <Container className=' ' >
                <Row className='align-items-center '>
                    <Col sm className=''>
                        <div className=''>
                            <img className='  img-fluid' src={acv} alt='acv'></img>


                        </div>

                    </Col>
                    <Col sm className=''>
                        <h1 className='pt-5 fw-bolder fs-1 text-center text-sm-start' style={{ color: '#fff' }}>Who Am I?</h1>
                        <hr className='fw-bolder w-100' style={{ color: '#fff' }} />
                        <p className='text-center text-sm-start p-2 p-sm-0' style={{ color: '#000' }}>I am Anik Acharjee a enthusiastic web developer built up a diverse range of skills over the very last year. The quality and mindset I have built ensure to fit any working culture quickly. Over the last year I have worked with various envour of front-end development where I have built dozens of small-mid sized projects. The technology I have used is ReactJs for frontend and mongodb for backend. </p>
                        <p className='text-center text-sm-start p-2 p-sm-0' style={{ color: '#000' }}>I have completed my graduation in CSE from a renowned engineering university of Bangladesh. Hope I will have great time if I will be selected for your company.
                        </p>
                        <div className='banner-btn my-3 d-flex flex-wrap  align-items-center justify-content-center justify-content-md-start '>
                            <a className='btn custom-btn me-2 bg-dark' href={resume} download>My Resume</a>
                            <Link className='btn custom-btn custom-btn-outline flex-btn bg-light' to='/blog'>Blog</Link>
                        </div>







                    </Col>
                </Row>


            </Container>

        </div>
    );
};

export default Achievements;