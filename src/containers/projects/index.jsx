import React, { useState } from 'react';
import { FaGithub, FaGlobe } from 'react-icons/fa';
import pic from '../../images/truck.png';
import pic1 from '../../images/paint.png';
import pic3 from '../../images/portfolio.png'
import './styles.scss';

const projects = [
  {
    title: 'BrushBazaar',
    desc: 'A MERN stack platform for artists to sell their art and drawings online.',
    mockup: pic1,
    live: '   ',
    code: 'https://github.com/AditiSingh00/BrushBazaar',
  },
  {
    title: 'Pariwaahan',
    desc: 'MERN stack commercial vehicle booking system for easy vehicle reservations.',
    mockup: pic,
    live: '   ',
    code: 'https://github.com/AditiSingh00/Commercial_Vechicle_Booking_System',
  },

  {
    title: 'Portfolio',
    desc: 'A personal website built with React.js to showcase my projects and skills.',
    mockup: pic3,
    live: '  ',
    code: '  ',
  },
];

const Portfolio = () => {
  return (
    <div id="projects" className="portfolio-container ">
      <h1 className="project-title"> Projects</h1>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-item"
            data-aos="zoom-in-up"
            data-aos-duration="1000"
            data-aos-once="false"
          >
            <img src={project.mockup} alt={`${project.title} mockup`} />
            <h1
              className="project-title"
            >
              {project.title}
            </h1>
            <h4 className='desc'>
              {project.desc}
            </h4>
            <div
              className="project-links"
            >
              <a
                className="btn"
                href={project.code}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
                GitHub
              </a>
              <a
                className="btn"
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGlobe />
                Live
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
