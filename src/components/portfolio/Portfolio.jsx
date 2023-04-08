import React from 'react';
import "./portfolio.css";
import IMG1 from "../../assets/IMG1.png"
import IMG from "../../assets/IMG.png"
import DB from "../../assets/DB.png"

const data = [
 {
  id: 1,
  image: IMG1,
  title: "Henry Game On",
  topic: "Agile and Scrum methodologies were used to approach a project that consists of a videogames website made by us, where students can learn code by playing and interacting to develop both technical skills and soft skills. It also has a Docs section where students can consult with available documentation and generate their own Docs to share with the community. AI technology (ChatGPT) was used, the presence of a chatbot throughout the site allows students to ask questions at any time about any topic they need.",
  github: "https://github.com/brunob43?tab=repositories",
  demo: "https://www.youtube.com/watch?app=desktop&v=q5B-WcHeS04&feature=youtu.be",
  tech: "Tech: JS, Css, React, Redux, Express, Sequelize - PostgresSQL, Jira, Chakra."
 },
 {
  id: 2,
  image: IMG,
  title: "Earth App",
  topic: "Individual project for Henry, with the theme of Countries; I focused on developing a simple, fast and solid backend code that would allow the frontend to offer a wide variety of options to navigate through all the countries of the world.",
  github: "https://github.com/brunob43/Pi-Countries",
  demo: "https://pi-countries-delta.vercel.app/",
  tech: "Tech: JS, Css, React, Redux, Express, Sequelize - PostgresSQL."
 },
 {
  id: 3,
  image: DB,
  title: "DB Pasteleria",
  topic: "E-Commerce(In progess)",
  github: "",
  demo: "",
  tech: "Tech: TypeScript, Css, React, Next.js."
 }

]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
      {
        data.map(({id, image, title, github, demo, topic, tech}) => {
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
              <p>{topic}</p>
              <h5>{tech}</h5>
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