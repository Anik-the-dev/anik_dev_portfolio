import React from 'react';
import { Container } from 'react-bootstrap';

const Blog = () => {
    return (
        <Container>
            <div className='border rounded mt-4' style={{height:'80vh' , paddingTop:"15%"}}>
                <p className='text-center' style={{fontSize:'5rem'}}>Coming <span className='custom-primary-color' >Soon!</span></p>
            </div>
            
        </Container>
    );
};

export default Blog;