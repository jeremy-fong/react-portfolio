import React from 'react';
import './experience.css';
import {BsFillPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>
        What Skills I have
      </h5>
      <h2>
        Experience
      </h2>
      <div className='container experienceContainer'>
        <div className='experienceFrontend'>
          <h3>
            FrontEnd Development
          </h3>
          <div className='experienceContent'>
            <article className='experienceDetails'>
              <BsFillPatchCheckFill className='experienceIcon'/>
              <div>
                <h4>
                  HTML
                </h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experienceDetails'>
              <BsFillPatchCheckFill className='experienceIcon'/>
              <div>
                <h4>
                  CSS
                </h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experienceDetails'>
              <BsFillPatchCheckFill className='experienceIcon'/>
              <div>
                <h4>
                  JavaScript
                </h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experienceDetails'>
              <BsFillPatchCheckFill className='experienceIcon'/>
              <div>
                <h4>
                  Bootstrap
                </h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experienceDetails'>
              <BsFillPatchCheckFill className='experienceIcon'/>
              <div>
                <h4>
                  Foundation
                </h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experienceDetails'>
              <BsFillPatchCheckFill className='experienceIcon'/>
              <div>
                <h4>
                  React
                </h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>
        {/* Backend */}
        <div className='experienceBackend'>
        <h3>
            BackEnd Development
          </h3>
          <div className='experienceContent'>
            <article className='experienceDetails'>
              <BsFillPatchCheckFill className='experienceIcon'/>
              <div>
                <h4>
                  Node.js
                </h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experienceDetails'>
              <BsFillPatchCheckFill className='experienceIcon'/>
              <div>
                <h4>
                  MongoDB
                </h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experienceDetails'>
              <BsFillPatchCheckFill className='experienceIcon'/>
              <div>
                <h4>
                  MySQL
                </h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
      </section>
  )
}

export default Experience