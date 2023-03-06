import React from 'react';
import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';

const HeaderSocial = () => {
  return (
    <div className='headerSocial'>
        <a href='https://www.linkedin.com/in/jeremy-fong-928b59148/' target='blank'><BsLinkedin/></a>
        <a href='https://github.com/jeremy-fong' target='blank'><FaGithub/></a>
    </div>
  )
}

export default HeaderSocial