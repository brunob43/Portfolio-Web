import React from 'react';
import "./about.css";
import BB1 from "../../assets/BB1.PNG";
import {FaAward} from "react-icons/fa";
import {FiUsers} from "react-icons/fi";
import {VscFolderLibrary} from "react-icons/vsc"

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

    <div className='container about__container'>
      <div className="about__me">
        <div className="about__me-image">
          <img src={BB1} alt="About Image" />
        </div>

      </div>

    <div className="about__content">
      <div className="about__cards">
        <article className='about__card'>
          <FaAward className='about__icon'/>
          <h5>Experience</h5>
          <small>1 Year Working</small>
        </article>

        <article className='about__card'>
          <FiUsers className='about__icon'/>
          <h5>Clients</h5>
          <small>3 Real Clients </small>
        </article>

        <article className='about__card'>
          <VscFolderLibrary className='about__icon'/>
          <h5>Projects</h5>
          <small>3 Projects Completed</small>
        </article>
      </div>
      <p>
        Soy Bruno Buglioni FullStack Developer .................. tecnologias que ulitizo son ....... 
      </p>
      <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
    </div>

    </section>
  )
}

export default About
