import React from 'react'
import ReactProjects from '../Assets/JSON/reactprojects.json'
import '../Assets/Styles/Work.css'
import OneProjectCardMobile from './OneProjectCardMobile.js'
import OneProjectCardFullscreen from './OneProjectCardFullscreen'

function ReactCards() {
  return (
    <>
    <div className='reactCards md:hidden'>
      {ReactProjects.map(project => {
        return <OneProjectCardMobile 
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
    <div className='reactCardsFullscreen hidden md:grid'>
    {ReactProjects.map(project => {
        return <OneProjectCardFullscreen 
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
    </>
  )
}

export default ReactCards