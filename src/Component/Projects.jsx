import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ProjectCard from './ProjectCard'


const projectsData = [
  {
    id: 1,
    title: "khamsat",
    description: "khamsat is a website for selling and buying books online",
    image: '/imges/projects/khamsat.png',
    tag: ["All", "HTML,CSS"]
  },
  {
    id: 2,
    title: "bondi",
    description: "bondi is a website for selling and buying games online",
    image: './imges/projects/bondi.png',
    tag: ["All", "HTML,CSS"]
  },
  {
    id: 3,
    title: "restaurant",
    description: "restaurant is a website for selling and buying food online",
    image: 'imges/projects/restaurant.png',
    tag: ["All", "HTML,CSS"]
  },
  {
    id: 4,
    title: "criativo",
    description: "portfolio is a website for marketing and selling online",
    image: 'src\imges\projects\criativo.png',
    tag: ["All", "HTML,CSS", "Bootstrap"]
  },
  {
    id: 5,
    title: "Botiga",
    description: "portfolio is a website for buying and selling makeup online",
    image: '../imges/projects/Botigaa.png',
    tag: ["All", "HTML,CSS", "Bootstrap"]
  },
  {
    id: 6,
    title: "rosebud",
    description: "portfolio is a website for buying and selling flowers online",
    image: '../imges/projects/rosebud.png',
    tag: ["All", "HTML,CSS", "Bootstrap"]
  },
  {
    id: 7,
    title: "time-zone",
    description: "portfolio is a website for buying and selling watch online",
    image: '/imges/projects/time-zone.png',
    tag: ["All", "HTML,CSS", "Bootstrap"]
  },
  {
    id: 8,
    title: "stopwatch",
    description: "stopwatch is a website for stopwatch app",
    image: '../imges/projects/stopwatch.png',
    tag: ["All", "HTML,CSS", "JS"]
  },
  {
    id: 9,
    title: "mexant",
    description: "mexant is a website for buying and selling online",
    image: '../imges/projects/mexant.png',
    tag: ["All", "HTML,CSS", "Bootstrap", "React"]
  },
  {
    id: 10,
    title: "new-home",
    description: "new-home is a website for buying and selling Bulding online",
    image: '../imges/projects/new-home.png',
    tag: ["All", "HTML,CSS", "Bootstrap", "React"]
  },
  {
    id: 11,
    title: "portfolio",
    description: "portfolio is a website for show my projects",
    image: '../imges/projects/portfolio.png',
    tag: ["All", "HTML,CSS", "Bootstrap", "React"]
  }
]

const Projects = () => {
  return (
    <div className='projects text-white my-5 px-4' id='projects'>
      <Container>
        <Row>
          <Col lg={12} className='text-center '>
            <h1 className='text-orange fw-bold'>My Projects</h1>
            <div className="line my-4 mx-auto"></div>
          </Col>
          <Col lg={12}>
            <div className='grid md:grid-cols-3 gap-8 md:gap-12'>
              {projectsData.map((project) => (
                <ProjectCard
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  imgUrl={project.image}
                  tags={project}
                />
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Projects