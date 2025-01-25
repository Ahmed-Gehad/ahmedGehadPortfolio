import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import { TypeAnimation } from 'react-type-animation';

// import Button
import Button from 'react-bootstrap/Button';
import { motion } from 'framer-motion';

//import imge
import me from '../imges/me.jpg'

const Landing = () => {
    return (
        <div className='Landing px-4'>
            <Container>
                <Row className='d-flex  align-items-center pt-5'>
                    <Col lg={6} className='mt-5 pt-5'>
                        <h1 >Hi, I'm Ahmed Gehad
                        </h1>
                        <h2 className='py-3'>
                            <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                  
                                    'Front-end Developer',
                                    1000, 
                                    'Front-end Disigner',
                                    1000,
                                   
                                
                                ]}
                                wrapper="span"
                                speed={30}
                                style={{ fontSize: '1em', display: 'inline-block' }}
                                repeat={Infinity}
                            />
                        </h2>
                        <p className='lead'>with 2+ years of experience
                            <br />
                            using React and Node.js.
                            <br />
                            Reach out if you'd like to learn more!
                        </p>

                        <motion.button
                            whileTap={{ scale: 0.65 }} className='motionBtn '>
                            <Button to="ContactPage" >Contact Me</Button>
                        </motion.button>
                    </Col>
                    <Col lg={6} className=' py-5'>
                        <img src={me} alt="" className='img  rounded-5' />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Landing