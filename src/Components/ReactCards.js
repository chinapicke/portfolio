import React from 'react'
import ReactProjects from '../Assets/JSON/reactprojects.json'
import '../Assets/Styles/Work.css'
import OneProjectCard from './OneProjectCard.js'

function ReactCards() {
  return (
    <div className='reactCards'>
      {ReactProjects.map(project => {
        return <OneProjectCard 
        key={project.id} 
        // using below for shorter writing of destructuring vs
        // image={project.image}
        // projectname={project.projectname}
        // deployedURL={project.deployedURL}
        // description={project.description}
        // githubUrl={project.githubUrl}/>
        project={project} />
      })}

    </div>
  )
}

export default ReactCards