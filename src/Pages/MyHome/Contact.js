import React, { useState } from 'react';
import { Card, Col, Container, Form, FormControl, Row } from 'react-bootstrap';
import anik2 from '../../images/anik_middle2.png'

const Contact = () => {
    // declare the states......
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    return (
        <Container>

            <Row className='mx-auto my-5 d-flex justify-content-between align-items-start text-center gap-3'>
                <Col sm='6' className=' text-center'>
                    <div className='login-text my-4'>
                        <img className='img-fluid p-3 w-75' src={anik2} alt='Anik' />



                    </div>
                </Col>

                <Col sm>
                    <h2 className='text-start custom-font-weight-600 custom-primary-color'>Contact Me For Any Query.</h2>
                    <Card className='p-5 mt-5 w-75'>
                        <h2 className='fs-5'>Send Your Details Here.</h2>

                        <form action="https://formsubmit.co/a250dc70983962361bf0d04422882f31" method="POST">

                            <Form.Control className='mt-3' onBlur={(e) => setName(e.target.value)} type="text" name="name" placeholder="Name" required />

                            <Form.Control className='mt-3' onBlur={(e) => setEmail(e.target.value)} type="email" name="email" placeholder="Email" required />


                            <FormControl className='mt-3' onBlur={(e) => setPass(e.target.value)} type="text" name="details" placeholder="Your Query Here" required />


                            <input type="submit" value="Submit" className="btn btn-primary text-light w-100 p-2 mt-3" style={{ backgroundColor: "#FF5959", border: 'none' }}></input>
                        </form>


                    </Card>
                </Col>
            </Row>

        </Container>
    );
};

export default Contact;