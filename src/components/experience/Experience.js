import React from 'react';
import "./experience.css";
import {BsFillPatchCheckFill} from "react-icons/bs";

const Experience = () => {
  return (
    <section id='experience'>
      <h5>The Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
         <h3>Frontend Development</h3>
         <div className="experience__content">
           <article className='experience__detail'>
             <BsFillPatchCheckFill className='experience__detail-icon'/>
               <div>
                <h4>HTML</h4>
                <small className='text-light'>1 Year of experience</small>
               </div>
           </article>

           <article className='experience__detail'>
             <BsFillPatchCheckFill className='experience__detail-icon'/>
             <div>
               <h4>CSS</h4>
               <small className='text-light'>1 Year of experience</small>
             </div>
           </article>

           <article className='experience__detail'>
             <BsFillPatchCheckFill className='experience__detail-icon'/>
             <div>
             <h4>JavaScript</h4>
             <small className='text-light'>1 Year of experience</small>
             </div>
           </article>

           <article className='experience__detail'>
             <BsFillPatchCheckFill className='experience__detail-icon'/>
             <div>
             <h4>TypeScript</h4>
             <small className='text-light'>In Progess</small>
             </div>
           </article>

           <article className='experience__detail'>
             <BsFillPatchCheckFill className='experience__detail-icon'/>
             <div>
             <h4>React</h4>
             <small className='text-light'>1 Year of experience</small>
             </div>
           </article>

           <article className='experience__detail'>
             <BsFillPatchCheckFill className='experience__detail-icon'/>
             <div>
             <h4>Redux</h4>
             <small className='text-light'>1 Year of experience</small>
             </div>
           </article>

         </div>
        </div>        

     {/* ------------back------------------------------- */}

        <div className="experience__backend">
        <h3>Backend Development</h3>
         <div className="experience__content">
           <article className='experience__detail'>
             <BsFillPatchCheckFill className='experience__detail-icon'/>
             <div>
             <h4>JavaScript</h4>
             <small className='text-light'>1 Year of experience</small>
             </div>
           </article>

           <article className='experience__detail'>
             <BsFillPatchCheckFill className='experience__detail-icon'/>
             <div>
             <h4>NodeJs</h4>
             <small className='text-light'>1 Year of experience</small>
             </div>
           </article>

           <article className='experience__detail'>
             <BsFillPatchCheckFill className='experience__detail-icon'/>
             <div>
             <h4>Express</h4>
             <small className='text-light'>1 Year of experience</small>
             </div>
           </article>

           <article className='experience__detail'>
             <BsFillPatchCheckFill className='experience__detail-icon'/>
            <div>
            <h4>SQL</h4>
             <small className='text-light'>1 Year of experience</small>
            </div>
           </article>

           <article className='experience__detail'>
             <BsFillPatchCheckFill className='experience__detail-icon'/>
             <div>
             <h4>PosgressSQL</h4>
             <small className='text-light'>1 Year of experience</small>
             </div>
           </article>

           <article className='experience__detail'>
             <BsFillPatchCheckFill className='experience__detail-icon'/>
             <div>
             <h4>Sequelize</h4>
             <small className='text-light'>1 Year of experience</small>
             </div>
           </article>

         </div>
        </div>    
        </div>
      
    </section>
  )
}

export default Experience

//