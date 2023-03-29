import React from 'react';
import "./footer.css";
import {BsGithub} from "react-icons/bs"
import {BsLinkedin} from "react-icons/bs"

const Footer = () => {
  return (
    <footer>
      <a href="#Footer" className='footer__logo'>BRUNoX DEV</a>

      <ul className='permalinks'>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href="https://www.linkedin.com/in/brunobuglioni/"><BsLinkedin/></a>
        <a href="https://github.com/brunob43"><BsGithub/></a>
      </div>
      <div className='footer__copyright'>
        <small>&copy; BRUNoX DEV. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
//