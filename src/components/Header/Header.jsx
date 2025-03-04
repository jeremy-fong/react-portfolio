import React from 'react';
import img from '../../assets/profilePic2Transparent.png';
import HeaderSocial from './HeaderSocial';
import './header.css'

const Header = () => {
  return (
    <header>
        <div className='container headerContainer'>
            <h5>Hello I'm</h5>
            <h1>Jeremy Fong</h1>
            <h5 className='text-light'>Fullstack Web Developer</h5>
            <div className='cta'>
                <a href='#contact' className='btn btn-primary'>Contact Me</a>
            </div>
            <HeaderSocial />
            <div className='me'>
                <img src={img} alt='Profile pic' />
            </div>
        </div>
    </header>
  )
}

export default Header