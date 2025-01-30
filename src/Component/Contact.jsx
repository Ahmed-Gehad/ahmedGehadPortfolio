import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import InfoContact from './InfoContact'
import MassageContact from './MassageContact'

const Contact = () => {
    return (
        <div className='Contact text-white py-5' id='Contact'>
            <Container>
                <Row>
                    <Col lg={12} className='text-center '>
                        <h1 className='text-orange fw-bold'>Get in touch</h1>
                        <div className="darkline my-4 mx-auto"></div>
                    </Col>

                    <Col lg={6} className='pt-5'>
                        <InfoContact />
                    </Col>

                    <Col lg={6} className='pt-5'>
                        <MassageContact />
                    </Col>

                </Row>
            </Container>
        </div>
    )
}

export default Contact