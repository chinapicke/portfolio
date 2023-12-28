import '../Assets/Styles/Work.css'
import { Link } from 'react-router-dom'
import { FaGithub } from "react-icons/fa6";
import Fade from 'react-reveal/Fade'


const OneProjectCardFullScreenJS = ({ project }) => {

    return (
        <Fade top distance='20%' duration={1500}>

        <div className='fullScreenProjectCardJS'>
            <div className="projectImage" >
                <img className='appImageFullscreen' src={project.image} alt='App preview' />
            </div>
            <div className="projectText" id={project.projectname}>
                <h1 className="projectName">{project.projectname}</h1>
                <h2 className='projectShortDescription'>{project.quickDescription}</h2>
                <p>{project.description}</p>
                <div
                    className="linksGrid grid grid-cols-2 "           >
                    <div>
                        <Link to={project.deployedURL}>
                            <button className="workLinks">view project</button>
                        </Link>
                        <span className='circleShadow' />
                    </div>
                    <div>
                        <Link to={project.githubUrl}>
                            <FaGithub className="workLinks" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        </Fade>
    )
}

export default OneProjectCardFullScreenJS