import React from 'react';
import './navbar.css'
import {FaHome} from 'react-icons/fa';
import {FiUser} from 'react-icons/fi';
import {BiBook} from 'react-icons/bi';
import {FaToolbox} from 'react-icons/fa';
import {MdOutlineContactPhone} from 'react-icons/md';
import {useState} from 'react';


function Navbar() {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a
          href="#"
          onClick={() => setActiveNav('#')}
          className={activeNav === '#' ? 'active' : ''}
          title='Home'
        >
          <FaHome />
        </a>
        <a
          href="#about"
          onClick={() => setActiveNav('#about')}
          className={activeNav === '#about' ? 'active' : ''}
          title='About'
        >
          <FiUser />
        </a>
        <a
          href="#experience"
          onClick={() => setActiveNav('#experience')}
          className={activeNav === '#experience' ? 'active' : ''}
          title='Experience'
        >
          <BiBook />
        </a>
        <a
          href="#projects"
          onClick={() => setActiveNav('#projects')}
          className={activeNav === '#projects' ? 'active' : ''}
          title='Projects'
        >
          <FaToolbox />
        </a>
        <a
          href="#contact"
          onClick={() => setActiveNav('#contact')}
          className={activeNav === '#contact' ? 'active' : ''}
          title='Contact'
        >
          <MdOutlineContactPhone />
        </a>
    </nav>
  );
}

export default Navbar;