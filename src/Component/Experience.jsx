import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import skills from '../Component/data/skills.json'
import { getImageUrl } from './utils'


const Experience = () => {
  return (
    <div className='experience text-white px-4' id='Experience'>
        <Container>
            <Row>
            <Col lg={12} className='text-center '>
                        <h1 className='fw-bold mt-5'>Experience</h1>
                        <div className="darkline my-4 mx-auto"></div>
                    </Col>
                    <Col lg={6} className=''>
                    {skills.map((skill, id) => {
                        return 
                        <div key={id}>
                            <div>
                                <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                            </div>
                        </div>
                    })}
                    </Col>
                    <Col lg={6} className=''>
                    </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Experience