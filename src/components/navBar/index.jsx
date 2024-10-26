import React, { useState } from 'react';
import pdf from '../../images/Resume1.pdf'
import { FaAppStore, FaUser, FaCode } from 'react-icons/fa6';
import { FaHome, FaBars, FaTimes, FaAddressBook ,FaFileAlt} from 'react-icons/fa';
import './styles.scss';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = (e, target) => {
    e.preventDefault();

    const section = document.getElementById(target);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar_container">
          <a href="#home" className="logo" onClick={(e) => handleClick(e, 'home')}>
            <FaAppStore size={40} />
          </a>
        </div>
        <div className="nav_icon" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <FaTimes size={30} className="close_icon" />
          ) : (
            <FaBars size={30} />
          )}
        </div>
        <nav className={`nav ${isOpen ? 'open' : ''}`}>
          <a  className="nav_link" href="#home" onClick={(e) => handleClick(e, 'home')}>
            <FaHome />
            Home
          </a>
          <a
            className="nav_link"
            href="#about"
            onClick={(e) => handleClick(e, 'about')}
          >
            <FaUser />
            About
          </a>
          <a
            className="nav_link"
            href="#projects"
            onClick={(e) => handleClick(e, 'projects')}
          >
            <FaCode />
            Projects
          </a>
          <a
            className="nav_link"
            href="#contact"
            onClick={(e) => handleClick(e, 'contact')}>
            <FaAddressBook />
            Contact
          </a>
          <a href= {pdf} className="button" download="Resume1.pdf">
            <FaFileAlt/> Resume
          </a>
        </nav>
      </nav>
    </div>
  );
};

export default Navbar;
