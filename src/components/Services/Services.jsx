import React from 'react';
import "./services.css";
import  {BiCheck} from "react-icons/bi"

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
      <article className='service'>
        <div className="service__head">
          <h3>FrontEnd</h3>
        </div>
        <ul className='service__list'>
          <li>
          <BiCheck className='service__list-icon' /> 
          <p>Working with HTML</p>
          </li>

          <li>
          <BiCheck className='service__list-icon' /> 
          <p>Working with CSS and Frameworks</p>
          </li>

          <li>
          <BiCheck className='service__list-icon' /> 
          <p>Working with React</p>
          </li>

          <li>
          <BiCheck className='service__list-icon' /> 
          <p>Working with Redux</p>
          </li>

          <li>
          <BiCheck className='service__list-icon' /> 
          <p>Working with JavaScript</p>
          </li>

        </ul>
      </article>

     {/* -------------------- END OF FRONT---------- */}
     <article className='service'>
        <div className="service__head">
          <h3>BackEnd</h3>
        </div>
        <ul className='service__list'>
          <li>
          <BiCheck className='service__list-icon' /> 
          <p>Working with NodeJs</p>
          </li>

          <li>
          <BiCheck className='service__list-icon' /> 
          <p>Working with Express</p>
          </li>

          <li>
          <BiCheck className='service__list-icon' /> 
          <p>Working with JavaScript</p>
          </li>

        </ul>
      </article>

     {/* -------------------- END OF BACK---------- */}
     <article className='service'>
        <div className="service__head">
          <h3>Data Base</h3>
        </div>
        <ul className='service__list'>
          <li>
          <BiCheck className='service__list-icon' /> 
          <p>Working with Sequeliza</p>
          </li>

          <li>
          <BiCheck className='service__list-icon' /> 
          <p>Working with PostgressSQL</p>
          </li>

          <li>
          <BiCheck className='service__list-icon' /> 
          <p>Working with SQL</p>
          </li>

          

        </ul>
      </article>

     {/* -------------------- END OF DBB---------- */}
      </div>
    </section>
  )
}

export default Services
//----