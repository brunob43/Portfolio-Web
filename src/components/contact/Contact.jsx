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
          <div className="contact__option">
            <article className="contact__option">
              <MdOutlineEmail/>
              <h4>Email</h4>
              <h5>brunobuglioni43@gmail.com</h5>
              <a href="mailto:brunobuglioni43@gmail.com">Send a message</a>
            </article>

            <article className="contact__option">
              <BsGithub/>
              <h4>GitHub</h4>
              <h5>brunob43</h5>
              <a href="https://github.com/brunob43">Visit Me</a>
            </article>

            <article className="contact__option">
              <BsLinkedin/>
              <h4>Linkedin</h4>
              <h5>Bruno Buglioni</h5>
              <a href="https://www.linkedin.com/in/brunobuglioni/">Visit Me</a>
            </article>
          </div>
          {/* End of contact Options */}
          <form action="">
            <input type="text" />
          </form>
        </div>
    </section>
  )
}

export default Contact