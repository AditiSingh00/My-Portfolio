import React from 'react';
import { useNavigate } from 'react-router-dom';
import pic from '../../images/hero-image.png';
import { Typewriter } from 'react-simple-typewriter'
import { FaSquareXTwitter, FaLinkedin, FaSquareGithub } from 'react-icons/fa6';
import './styles.scss';

function Home() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/contact');
  };

  return (
    <section id='home' className="container">
      <div className="content">
        <h1 className="title">I'm <strong className="pink" > Aditi</strong></h1>
        <p className="description">
        <Typewriter
          words={[
            'MERN Stack Developer.',
            'Data Analyst Enthusiast.',
            'I like building cool things.',
            'Leetcode noob.',
            'GitHub fanatic.',
            '',
          ]}
          loop={false}
          cursor
          cursorStyle=""
          typeSpeed={100}
          deleteSpeed={70}
          delaySpeed={500}
        /> <br />
        </p>
        <span>
          <a
            className="icon"
            href="https://x.com/codes_aditi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaSquareXTwitter size={50} />
          </a>
          <a
            className="icon"
            href="https://www.linkedin.com/in/aditisingh6/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={50} />
          </a>
          <a
            className="icon"
            href="https://github.com/AditiSingh00"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaSquareGithub size={50} />
          </a>
        </span>
        <p className="description1">
        showcase of my skills, projects, and journey in the
          world of coding. <br/>
          Enjoy your stay!
        </p>
        <button className="btn" onClick={handleNavigate}>
          Contact Me
        </button>
      </div>
      <img src={pic} alt="Image" className="pic" />
    </section>
  );
}

export default Home;
