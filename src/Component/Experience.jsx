import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'




const Experience = () => {
    return (
        <div className='experience text-white px-4' id='Experience'>
            <Container>
                <Row>
                    <Col lg={12} className='text-center '>
                        <h1 className='fw-bold mt-5'>Experience</h1>
                        <div className="darkline my-4 mx-auto"></div>
                    </Col>
                    <Col lg={5} >
                        <div className='d-flex  text-center align-items-center justify-content-between mx-5 my-4' >
                            <div className='me-4 html'>
                                <i class="fa-brands fa-html5 fs-1 mb-2"></i>
                                <p>HTML</p>
                            </div>
                            <div className='me-4 css'>
                                <i class="fa-brands fa-css3-alt fs-1 mb-2"></i>
                                <p>CSS</p>
                            </div>
                            <div className='react'>
                                <i class="fa-brands fa-react fs-1 mb-2"></i>
                                <p>REACT</p>
                            </div>
                        </div>

                        <div className='d-flex  text-center align-items-center justify-content-between mx-5 my-3'>
                            <div className='me-3 github'>
                                <i class="fa-brands fa-github fs-1 mb-2"></i>
                                <p>Github</p>
                            </div>
                            <div className='me-3 bootstrap'>
                                <i class="fa-brands fa-bootstrap fs-1 mb-2"></i>
                                <p>Bootstrap</p>
                            </div>
                            <div className='figma'>
                            <i class="fa-brands fa-figma fs-1 mb-2"></i>
                                <p>Figma</p>
                            </div>

                        </div>

                    </Col>
                    <Col lg={6} className=''>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Experience