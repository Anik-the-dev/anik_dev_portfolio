import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import duds from '../../images/dudsproject .png'
import nikseo from '../../images/nikseoproject.png'
import niksmoto from '../../images/niksmotoproject.png'

const Portfolio = () => {
    const [projects, setProjects] = useState([])
    useEffect(() => {
        fetch('projectData.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])

    const navigate = useNavigate()

    const handleDetailedProject =(id)=>{
        if(id===1){
            navigate('/details1')
        }
        else if(id===2){
            navigate('/details2')
        }
        else if(id===3){
            navigate('/details3')
        }
 
    }
    return (
        <Container>
            <h2 className='custom-dark-color custom-font-weight-600 fs-1 text-center'>Have a look at my <span className='custom-primary-color'>React </span>Projects</h2>
            <div className='mt-5'>
                <div className='custom-grid my-5 py-5'>
                    {
                        projects.map(project => {
                            return (
                                <div className='d-flex flex-column '>
                                    <img src={project.image_main} alt='niksmoto project' className='img-fluid custom-card-img' />
                                    <div className='custom-height'>
                                        <p className='text-start mt-3 custom-font-weight-600'>{project.name}</p>
                                        <p className='text-start custom-font-weight-500'>{project.description}</p>
                                        <div className='d-flex align-items-center justify-content-between'>
                                            <p className='text-start custom-font-weight-600 text-success custom-cursor' onClick={()=>handleDetailedProject(project.id)}>Detailed Project</p>
                                            <p className='text-start custom-font-weight-600'><a href={project.live} className='custom-primary-color'>Go Live </a></p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className='custom-space-btn-section'>

            </div>
        </Container>
    );
};

export default Portfolio;