import React from 'react';
import './about.css';
import img from '../../assets/profile-pic.jpg';
import {FaAward} from 'react-icons/fa'
import {VscFolderActive} from 'react-icons/vsc'

export default function About() {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className='container aboutContainer'>
        <div className='aboutMe'>
          <div className='aboutImg'>
            <img src={img} alt='profile pic' />
          </div>
        </div>
        <div className='aboutContent'>
          <div className='aboutCard'>
            <article className='aboutCard'>
              <FaAward className='aboutIcon'/>
              <h5>Experience</h5>
              <small>6 Months</small>
            </article>
            <article className='aboutCard'>
              <VscFolderActive className='aboutIcon'/>
              <h5>Projects</h5>
              <small>20+ completed</small>
           </article>
         </div>
         <p>
          I am on my way to completing the UC Davis Coding Bootcamp. I have around 6 months worth of coding experience and once finished with the bootcamp I will be a Fullstack Web Developer. While completing the bootcamp I have worked on and finished 20+ projects. I have been enjoying learning about coding so far and am eager to learn and showcase my skills even further.
         </p>
         <a href='#contact' className='btn btn-primary'>Contact Me</a>
        </div>
      </div>
    </section>
  );
}