import React from 'react'
import './navbar.css'
import Logo from '../../assets/svg/logo.svg'

function Navbar() {
  return (
    <div className='nav'>
      <div className='nav__gpt-logo'>
          <img src={Logo} alt="gpt-logo" />
      </div>
      <div className='nav__link'>
          <a href="#Home">Home</a>
          <a href="#Home">What is GPT?</a>
          <a href="#Home">Open AI</a>
          <a href="#Home">Case Studies</a>
          <a href="#Home">Library</a>
      </div>
    </div>
  )
}

export default Navbar
