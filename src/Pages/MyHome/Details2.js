
import React, { useEffect, useState } from 'react';
import { Col, Container, ListGroup, Row } from 'react-bootstrap';


const Details2 = () => {
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

    const productDetails = products.find(p => p.id === 2)
    // const { name, description, live, client, server, tools, image_main, image_1, image_2, image_3, image_4, image_5, image_6 } = productDetails

    return (
        <Container>

            <h1 className='mt-5 fw-bold fs-3 text-md-start text-center' style={{ color: "#3d3d3d" }}>Project: {productDetails?.name}</h1>

            <Row className='mx-auto my-5 d-flex justify-content-between align-items-center text-center gap-3'>
                <Col sm='6' className=' text-center'>
                    <div className='login-text '>
                        <img className='img-fluid p-3 rounded border' src={productDetails?.image_main} alt='project' />

                    </div>

                </Col>

                <Col sm>
                    <div className='w-75 mx-auto border-0' >
                        <div className='text-start fw-bold p-3 fs-4' style={{ color: "#FF5959" }}>
                            Project: {productDetails?.name}
                        </div>
                        <div className='text-start  p-3'><span className='fw-bold'>Description: </span>{productDetails?.description}
                            <ul>
                                <li>Use RequireAuth and Use RequireAdmin for unAuthorized Access.</li>
                                <li>Use React Query for fetching Apis and UI's state management easier.</li>
                                <li>Using React Hooks for use same code multiple times.</li>
                                <li>Use Bootstrap for UI design.</li>
                                <li>Use Admin Access Functionality for limiting features.</li>
                                
                            </ul>
                        </div>
                        <div className='text-start  p-3'>
                            <span className='fw-bold'>Tools: </span>{productDetails?.tools}
                        </div>
                        <div className='d-flex justify-content-start p-3 align-item-center'>
                            <a className='me-3 btn text-light' href={productDetails?.live} style={{ backgroundColor: "#FF5959" }}>Live Site</a>
                            <a className='me-3 btn text-dark' href={productDetails?.client} style={{ backgroundColor: "#ff891bd3" }}>Client Repo</a>
                            <a className='me-3 btn text-light' href={productDetails?.server} style={{ backgroundColor: "#3d3d3d" }}>Server Repo</a>
                        </div>
                    </div>

                </Col>
            </Row >



            <div className='mt-5'>
                <h2 className='text-center mt-5 pt-5'>Projects Screenshot</h2>
                <hr className='w-50 mx-auto'></hr>
                <div className='d-flex justify-content-center p-3 align-item-center w-100 my-2 custom-grid-screenshot'>
                    <img src={productDetails?.image_2} alt='project'  className='me-5 rounded border custom-screenshot-width' />
                    <img src={productDetails?.image_3} alt='project'  className='me-5 rounded border custom-screenshot-width' />
                </div>

                <div className='d-flex justify-content-center p-3 align-item-center w-100 my-2 custom-grid-screenshot'>
                    <img src={productDetails?.image_4} alt='project'  className='me-5 rounded border custom-screenshot-width' />
                    <img src={productDetails?.image_9} alt='project'  className='me-5 rounded border custom-screenshot-width' />
                </div>

                <div className='d-flex justify-content-center p-3 align-item-center w-100 my-2 custom-grid-screenshot'>
                    <img src={productDetails?.image_5} alt='project'  className='me-5 rounded border custom-screenshot-width' />
                    <img src={productDetails?.image_6} alt='project'  className='me-5 rounded border custom-screenshot-width' />
                </div>
                <div className='d-flex justify-content-center p-3 align-item-center w-100 my-2 custom-grid-screenshot'>
                    <img src={productDetails?.image_7} alt='project'  className='me-5 rounded border custom-screenshot-width' />
                    <img src={productDetails?.image_8} alt='project'  className='me-5 rounded border custom-screenshot-width' />
                </div>


            </div>

            <div className='custom-space-btn-section'>

            </div>

        </Container >

    );
};

export default Details2;