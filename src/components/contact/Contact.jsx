import React from 'react';
import "./contact.css";
import {MdOutlineEmail} from "react-icons/md"
import {BsGithub} from "react-icons/bs"
import {BsLinkedin} from "react-icons/bs"
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_l9aqm4k', 'template_tmc79f7', form.current, 'yqZfB7CKBrspn0AFM')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
  };

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
          <form ref={form} onSubmit={sendEmail}>
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