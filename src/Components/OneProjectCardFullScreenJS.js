import '../Assets/Styles/Work.css'
import { Link } from 'react-router-dom'
import { FaGithub } from "react-icons/fa6";

const OneProjectCardFullScreenJS = ({project}) => {

    return (
        <div className='fullScreenProjectCardJS'>
            <div className="projectImage" >
                <img className='appImageFullscreen' src={project.image} alt='App preview' />
            </div>
            <div className="projectText">
                <h1 className="text-red-500">{project.projectname}</h1>
                <h2>{project.quickDescription}</h2>
                <p>{project.description}</p>
                {/* <p>{project.deployedURL}</p>
                <p>{project.githubUrl}</p> */}
                <div className='flex flex-row'>
                    <div className='pl-1'>
                        <Link to={project.deployedURL}>
                            view project
                        </Link>
                        <Link to={project.githubUrl}>
                    <FaGithub />
                    </Link>
                <span className='circleShadow'></span>
                    </div>
                    
                </div>
                

            </div>
        </div>
    )
}

export default OneProjectCardFullScreenJS