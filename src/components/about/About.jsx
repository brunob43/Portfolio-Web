import React from 'react';
import "./about.css";
import IMG4 from "../../assets/IMG4.png";
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
          <img src={IMG4} alt="About" />
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
          <small>2 Real Clients </small>
        </article>

        <article className='about__card'>
          <VscFolderLibrary className='about__icon'/>
          <h5>Projects</h5>
          <small>2 Projects Completed</small>
        </article>
      </div>
      <p>
      I am passionate about learning, especially what involves logic challenges and teamwork. For this reason, I decided to join the Web Development world and my background is as a Full Stack Dev with experience doing Full-Stack projects developed in the PERN stack with React.JS, Redux, PostgreSQL, Node.JS, HTML, CSS, Material UI, Express, JavaScript and Sequelize. In addition, I have experience working with agile methodologies, SCRUM and JIRA. Currently, i continue to educate myself with new technologies in both areas in order to further develop my skills and increase my knowledge.
      </p>
      <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
    </div>

    </section>
  )
}

export default About
//