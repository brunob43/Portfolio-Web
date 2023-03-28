import React from 'react';
import "./portfolio.css";
import IMG1 from "../../assets/IMG1.png"
import IMG2 from "../../assets/IMG2.png"

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container"></div>
    <article className='portfolio__item'>
    <div className='portfolio__item-image'>
    <img src={IMG1} alt="" />
    </div>
    <h3>This is a portfolio item title</h3>
    <a href="https://github.com" className='btn' target="_blank">Github</a>
    <a href="https://youtube.com" className='btn btn-primary' target="_blank">Live Demo</a>
    </article>

    <article className='portfolio__item'>
    <div className='portfolio__item-image'>
    <img src={IMG2} alt="" />
    </div>
    <h3>This is a portfolio item title</h3>
    <a href="https://github.com" className='btn' target="_blank">Github</a>
    <a href="https://youtube.com" className='btn btn-primary' target="_blank">Live Demo</a>
    </article>

    </section>
  )
}

export default Portfolio