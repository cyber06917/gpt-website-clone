import React from 'react'
import './header.css'
import AI from '../../assets/images/ai.png'


function Header() {
  return (
    <div className='header'>
      <div className='header__left'>
        <h1>
          Let's Build Something amazing with GPT-3 OpenAI
        </h1>
        <p>
          Yet bed any for travellng assistance indulgence upleassing.
          Not thoughts all exercise blessing. Indulgence way everthing joy
          alteration boisterous the attachement. Party we years to order allow asked of.
        </p>
        <div className='header__left__get-started'>
          <input type="text" />
          <button>
            get started
          </button>
        </div>
        <div className='header__left__visitors'>
          <img src="" alt="" />
          <p></p>
        </div>
      </div>
      <div className='header__ai-image'>
          <img src={AI} alt="AI" />
      </div>
    </div>
  )
}

export default Header
