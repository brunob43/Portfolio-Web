import React from 'react';
import "./portfolio.css";
import IMG1 from "../../assets/IMG1.png"
import IMG from "../../assets/IMG.png"

const data = [
 {
  id: 1,
  image: IMG1,
  title: "Henry Game On",
  github: "https://github.com/brunob43?tab=repositories",
  demo: "https://www.youtube.com/watch?app=desktop&v=q5B-WcHeS04&feature=youtu.be"
 },
 {
  id: 2,
  image: IMG,
  title: "Earth App",
  github: "https://github.com/brunob43?tab=repositories",
  demo: "https://youtube.com"
 }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
      {
        data.map(({id, image, title, github, demo}) => {
        return (
          <article key={id} className='portfolio__item'>
           <div className='portfolio__item-image'>
              <img src={image} alt={title} />
           </div>
         <h3>{title}</h3>
           <div className="portfolio__item-cta"> 
              <a href={github} className='btn'>Github</a>
              <a href={demo} className='btn btn-primary'>Live Demo</a>
          </div>
         </article>
      )
    })
   }

 
      </div>
    </section>
  )
}

export default Portfolio

//-----------