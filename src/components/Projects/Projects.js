import React from 'react';
import img1 from '../../assets/tech-blog-ss.jpg'
import img2 from '../../assets/e-com-backend-ss.jpg'
import img3 from '../../assets/employee-manager-ss.jpg'
import img4 from '../../assets/jate-ss.jpg'
import img5 from '../../assets/note-taker-Ss.jpg'
import img6 from '../../assets/happy-trails-ss1.jpg'
import './projects.css';

const data = [
  {
    id: 1,
    img: img1,
    title: 'Tech Blog',
    github: 'https://github.com/jeremy-fong/tech-blog',
  },
  {
    id: 2,
    img: img2,
    title: 'E Commerce Backend',
    github: 'https://github.com/jeremy-fong/E-commerce-back-end',
  },
  {
    id: 3,
    img: img3,
    title: 'Employee Tracker',
    github: 'https://github.com/jeremy-fong/employee-tracker',
  },
  {
    id: 4,
    img: img4,
    title: 'Text Editor',
    github: 'https://github.com/jeremy-fong/text-editor',
  },
  {
    id: 5,
    img: img5,
    title: 'Note Taker',
    github: 'https://github.com/jeremy-fong/note-taker',
  },
  {
    id: 6,
    img: img6,
    title: 'Happy Trails',
    github: 'https://github.com/jeremy-fong/hiking-guide',
  },
]

export default function Blog() {
  return (
    <section id='projects'>
      <h5>
        My Recent Work
      </h5>
      <h2>
        Projects
      </h2>
      <div className='container projectsContainer'>
        {
          data.map(({id, img, title, github}) => {
            return (
            <article key={id} className='projectsItem'>
              <div className='projectsImg'>
                <img key={img} src={img} alt={title} />
              </div>
              <h3>
                {title}
              </h3>
              <div className='projectsItemLink'>
                <a href={github} className='btn btn-primary' target='blank'>Github</a>
              </div>
            </article>
            )
          })
        }
      </div>
    </section>
  );
}