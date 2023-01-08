import React from 'react'
import './navbar.css'
import Logo from '../../assets/svg/logo.svg'

function Navbar() {
  return (
    <div className='gpt-navbar'>
      <div className='gpt-navbar__link'>
        <div className='gpt-navbar__link__logo'>
          <img src={Logo} alt="gpt-logo" />
        </div>
        <ul className='gpt-navbar__link__container'>
          <li><a href="Home">Home</a></li>
          <li><a href="What is GPT?">What is GPT?</a></li>
          <li><a href="Open AI">Open AI</a></li>
          <li><a href="Case Studies">Case Studies</a></li>
          <li><a href="Library">Library</a></li>
        </ul>
      </div>
      <div className='gpt-navbar__button'>
        <p>
          sign in
        </p>
        <button type='button'>
          Sign up
        </button>
      </div>
    </div>
  )
}

export default Navbar
