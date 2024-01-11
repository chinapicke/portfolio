import '../Assets/Styles/Work.css'
import { Link } from 'react-router-dom'
import { FaGithub } from "react-icons/fa6";


const OneProjectCardFullScreenJS = ({ project }) => {

    return (

        <div className='fullScreenProjectCardJS'>

            <Link to={project.deployedURL} target="_blank" className="projectImage">
                <img className='appImageFullscreen' src={project.image} alt='App preview' />
            </Link>
            <div className="projectText" id={project.projectname}>
                <h1 className="projectName">{project.projectname}</h1>
                <h2 className='projectShortDescription'>{project.quickDescription}</h2>
                <p>{project.description}</p>
                <div
                    className="linksGrid "           >
                    <div className='flex flex-row'>
                     
                         {
                            project.components.map((item)=>{
                                return(
                                    <p className='mx-2'>{item}</p>
                                )
                            })
                        }
                    </div>
                    <div>
                        <Link to={project.githubUrl} className="flex justify-center">
                            <FaGithub className="workLinks" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OneProjectCardFullScreenJS