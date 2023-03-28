import React from 'react';
import "./contact.css";
import {MdOutlineEmail} from "react-icons/md"
import {BsGithub} from "react-icons/bs"
import {BsLinkedin} from "react-icons/bs"

const Contact = () => {
  return (
    <section id='contact'>
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>

        <div className="container contact__container">
          <div className="contact__options">
            <article className="contact__option">
              <MdOutlineEmail className='contact__option-icon'/>
              <h4>Email</h4>
              <h5>brunobuglioni43@gmail.com</h5>
              <a href="mailto:brunobuglioni43@gmail.com">Send a message</a>
            </article>

            <article className="contact__option">
              <BsGithub className='contact__option-icon'/>
              <h4>GitHub</h4>
              <h5>brunob43</h5>
              <a href="https://github.com/brunob43">Visit Me</a>
            </article>

            <article className="contact__option">
              <BsLinkedin className='contact__option-icon'/>
              <h4>Linkedin</h4>
              <h5>Bruno Buglioni</h5>
              <a href="https://www.linkedin.com/in/brunobuglioni/">Visit Me</a>
            </article>
          </div>
          {/* End of contact Options */}
          <form action="">
            <input type="text" name="name" placeholder='Your Full Name' required />
            <input type="email" name="email" placeholder='Your Email' required />
            <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
            <button type='submite'className='btn btn-primary'>Send Message</button>
          </form>
        </div>
    </section>
  )
}

export default Contact