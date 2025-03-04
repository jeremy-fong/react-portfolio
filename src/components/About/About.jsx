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
              <small>1.5 years</small>
            </article>
            <article className='aboutCard'>
              <VscFolderActive className='aboutIcon'/>
              <h5>Projects</h5>
              <small>20+ completed</small>
           </article>
         </div>
         <p>
         I am a Full-Stack Web Developer with 1.5 years of experience, having completed my education at UC Davis's Coding Bootcamp. Over this time, I have successfully built and delivered 20+ projects, honing my skills in both front-end and back-end development.
         </p>
         <p>
         I am passionate about coding and continuously strive to expand my expertise and refine my abilities. I enjoy tackling new challenges, learning emerging technologies, and showcasing my skills through innovative projects.
         </p>
         <a href='#contact' className='btn btn-primary'>Contact Me</a>
        </div>
      </div>
    </section>
  );
}