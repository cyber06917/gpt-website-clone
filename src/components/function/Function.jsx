import React from 'react'
import './function.css'

function Feature(props) {
  
  let mainHeader = "Chatbot";
  let paragraph = "from dfdf sadflsflasdfsa f sdafsdaf sd fsd fsd fsdf";
  return (
    <div className='feature'>
      <h1>
        {mainHeader}
      </h1>
      <p>
        {paragraph}
      </p>
    </div>
  )
}

export default Feature
