import React from 'react'
import './app.css'
import { Article, Brand, CTA, Feature, Navbar } from './components';
import {Header} from './containers';

export const App = () => {
  return (
    <div className='app'>
      <div className='app__gradient-bg'>
        <Navbar/>
        <Header/>
      </div>
        <Article/>
        <Brand/>
        <CTA/>
        <Feature/>
    </div>
  )
}

export default App;
