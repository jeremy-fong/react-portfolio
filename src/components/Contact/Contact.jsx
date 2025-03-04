import React from 'react';
import {TfiEmail} from 'react-icons/tfi';
import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';
import './contact.css';

export default function Contact() {
  return (
    <section id='contact'>
      <h5>
        Wanna Talk?
      </h5>
      <h2>
        Contact Me
      </h2>
      <div  className='container contactContainer'>
          <article className='contactOption'>
          <a href='mailto:jeremyfong9@yahoo.com'><TfiEmail className='contactIcon'/></a>
            <h4>Email</h4>
            <h5>jeremyfong9@yahoo.com</h5>
            <a href='mailto:jeremyfong9@yahoo.com'>Send An Email</a>
          </article>
            <article className='contactOption'>
            <a href='mailto:jeremyfong9@yahoo.com'><TfiEmail className='contactIcon'/></a>
              <h4>Email</h4>
              <h5>jeremyfong9@gmail.com</h5>
              <a href='mailto:jeremyfong9@gmail.com'>Send An Email</a>
            </article>
            <article className='contactOption'>
            <a href='https://github.com/jeremy-fong' target='blank'><FaGithub className='contactIcon'/></a>
              <h4>Github</h4>
              <h5>jeremy-fong</h5>
              <a href='https://github.com/jeremy-fong' target='blank'>Visit My Profile</a>
            </article>
            <article className='contactOption'>
            <a href='https://www.linkedin.com/in/jeremy-fong-928b59148/' target='blank'><BsLinkedin className='contactIcon'/></a>
              <h4>Linkedin</h4>
              <h5>Jeremy Fong</h5>
              <a href='https://www.linkedin.com/in/jeremy-fong-928b59148/' target='blank'>Go to Linkedin</a>
            </article>
      </div>
    </section>
  );
}