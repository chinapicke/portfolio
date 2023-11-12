import React from 'react'
import { useState } from 'react'
function OneProjectCard ({project}) {

  // const [flip, setFlip] = useState(false)


  return (
    <div 
      // className={`card ${flip ? 'flip' : ''}`}>
      // onMouseEnter={() => setFlip(!flip)}>  
      className='card'>


      <div className="front" >
        <img className='appImage' src={project.image} alt='App preview' />
        <h1 className="text-red-500">{project.projectname}</h1>
        <p>{project.description}</p>
      </div>
      <div className="back"
      >
        <h1>{project.deployedURL}</h1>
        <p>{project.githubUrl}</p>
      </div>
    </div>

  )
}

export default OneProjectCard