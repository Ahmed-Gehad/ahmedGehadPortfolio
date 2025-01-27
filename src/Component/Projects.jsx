"use client";
import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'


const projectsData = [
  {
    id: 1,
    title: "Khamsat",
    description: "khamsat is a website for selling and buying books online",
    image: '/imges/projects/khamsat.png',
    tag: ["All", "HTML,CSS"],
    gitUrl: "https://github.com/Ahmed-Gehad/khamsat-app",
    previewUrl: "https://khamsat-app.vercel.app/"
  },
  {
    id: 2,
    title: "Bondi",
    description: "bondi is a website for selling and buying games online",
    image: './imges/projects/bondi.png',
    tag: ["All", "HTML,CSS"],
    gitUrl: "https://github.com/Ahmed-Gehad/bondi",
    previewUrl: "https://ahmed-gehad.github.io/bondi/"
  },
  {
    id: 3,
    title: "Restaurant",
    description: "restaurant is a website for selling and buying food online",
    image: 'imges/projects/restaurant.png',
    tag: ["All", "HTML,CSS"],
    gitUrl: "https://github.com/Ahmed-Gehad/restaurant",
    previewUrl: "https://restaurant-ashy-iota.vercel.app/"
  },
  {
    id: 4,
    title: "Criativo",
    description: "portfolio is a website for marketing and selling online",
    image: 'src\imges\projects\criativo.png',
    tag: ["All", "Bootstrap"],
    gitUrl: "https://github.com/Ahmed-Gehad/criativo-app",
    previewUrl: "https://criativo-app-delta.vercel.app/"
  },
  {
    id: 5,
    title: "Botiga",
    description: "portfolio is a website for buying and selling makeup online",
    image: '../imges/projects/Botigaa.png',
    tag: ["All", "Bootstrap"],
    gitUrl: "https://github.com/Ahmed-Gehad/Botiga",
    previewUrl: "https://botiga-dun.vercel.app"
  },
  {
    id: 6,
    title: "Rosebud",
    description: "portfolio is a website for buying and selling flowers online",
    image: '../imges/projects/rosebud.png',
    tag: ["All", "Bootstrap"],
    gitUrl: "https://github.com/Ahmed-Gehad/rosebud",
    previewUrl: "https://rosebud-rose.vercel.app"
  },
  {
    id: 7,
    title: "Time Zone",
    description: "portfolio is a website for buying and selling watch online",
    image: '/imges/projects/time-zone.png',
    tag: ["All", "Bootstrap"],
    gitUrl: "https://github.com/Ahmed-Gehad/Time-Zone",
    previewUrl: "https://time-zone-lime.vercel.app"
  },
  {
    id: 8,
    title: "Stopwatch",
    description: "stopwatch is a website for stopwatch app",
    image: '../imges/projects/stopwatch.png',
    tag: ["All", "JS"],
    gitUrl: "https://github.com/Ahmed-Gehad/stopwatch",
    previewUrl: "https://stopwatch-rust-delta.vercel.app"
  },
  {
    id: 9,
    title: "Mexant",
    description: "mexant is a website for buying and selling online",
    image: '../imges/projects/mexant.png',
    tag: ["All", "React"],
    gitUrl: "https://github.com/Ahmed-Gehad/mexant-app",
    previewUrl: "https://mexant-app-ten.vercel.app"
  },
  {
    id: 10,
    title: "New Home",
    description: "new-home is a website for buying and selling Bulding online",
    image: '../imges/projects/new-home.png',
    tag: ["All", "React"],
    gitUrl: "https://github.com/Ahmed-Gehad/new-home",
    previewUrl: "https://new-home-e7gk.vercel.app/"
  },
  {
    id: 11,
    title: "Portfolio",
    description: "portfolio is a website for show my projects",
    image: '../imges/projects/portfolio.png',
    tag: ["All", "React"],
    gitUrl: "https://github.com/Ahmed-Gehad/ahmedGehadPortfolio",
    previewUrl: "https://ahmed-gehad-portfolio-3rvd.vercel.app/"
  }
]

const Projects = () => {
  const [tag, setTag] = useState("All")

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) => 
    project.tag.includes(tag)
);

  return (
    <div className='projects text-white my-5 px-4' id='projects'>
      <Container>
        <Row>
          <Col lg={12} className='text-center '>
            <h1 className='text-orange fw-bold'>My Projects</h1>
            <div className="line my-4 mx-auto"></div>
          </Col>
          <Col lg={12} xs={12} className='text-center my-4'>
            <ProjectTag
               onClick={handleTagChange} 
               name="All"
               isSelected={tag === "All"}
            />
            <ProjectTag
               onClick={handleTagChange} 
               name="HTML,CSS"
               isSelected={tag === "HTML,CSS"}
            />
             <ProjectTag
               onClick={handleTagChange} 
               name="Bootstrap"
               isSelected={tag === "Bootstrap"}
            />
            <ProjectTag
               onClick={handleTagChange} 
               name="JS"
               isSelected={tag === "JS"}
            />
            <ProjectTag
               onClick={handleTagChange} 
               name="React"
               isSelected={tag === "React"}
            />
          </Col>
          <Col lg={3} xs={12} className='my-4'>
            <div className='d-flex justify-content-between '>
              {filteredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  imgUrl={project.image}
                  tags={project}
                  gitUrl={project.gitUrl}
                  previewUrl={project.previewUrl}
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