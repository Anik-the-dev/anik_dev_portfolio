import React, { useEffect, useState } from 'react';
import { Col, Container, ListGroup, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import DisplayDetail from './DisplayDetail';


const Details = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch(`projectData.json`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }

        })
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const productDetails = products.find(p => p.id === 1)
    const { name, description, live, client, server, tools, image_main, image_1, image_2, image_3, image_4, image_5, image_6 } = productDetails

    return (
        <Container>

            <h1 className='mt-5 fw-bold fs-3 text-md-start text-center' style={{ color: "#3d3d3d" }}>Project: {name}</h1>

            <Row className='mx-auto my-5 d-flex justify-content-between align-items-center text-center gap-3'>
                <Col sm='6' className=' text-center'>
                    <div className='login-text '>
                        <img className='img-fluid p-3 rounded border' src={image_main} alt='project' />

                    </div>

                </Col>

                <Col sm>
                    <div className='w-75 mx-auto border-0' >
                        <div className='text-start fw-bold p-3 fs-4' style={{ color: "#FF5959" }}>
                            Project: {name}
                        </div>
                        <div className='text-start  p-3'><span className='fw-bold'>Description: </span>{description}</div>
                        <div className='text-start  p-3'>
                            <span className='fw-bold'>Tools: </span>{tools}
                        </div>
                        <div className='d-flex justify-content-start p-3 align-item-center'>
                            <a className='me-3 btn text-light' href={live} style={{ backgroundColor: "#FF5959" }}>Live Site</a>
                            <a className='me-3 btn text-dark' href={client} style={{ backgroundColor: "#ff891bd3" }}>Client Repo</a>
                            <a className='me-3 btn text-light' href={server} style={{ backgroundColor: "#3d3d3d" }}>Server Repo</a>



                        </div>




                    </div>

                </Col>
            </Row >

            <div className='custom-space-btn-section'>

            </div>

        </Container >

    );
};

export default Details;