import { Link } from 'react-router-dom'
import { FaGithub } from "react-icons/fa6";
import '../Assets/Styles/Work.css'
// import Fade from "react-awesome-reveal"


const OneProjectCardFullscreen = ({ project }) => {
    return (
        // <Fade top distance='20%' duration={1500}>
        <div className='fullScreenProjectCard'>
            <Link to={project.deployedURL} className="projectImage">
                <img className='appImageFullscreen' src={project.image} alt='App preview' />
            </Link>
            <div className="projectText"  id={project.projectname}>
            <h1 className="projectName">{project.projectname}</h1>
                <h2 className='projectShortDescription'>{project.quickDescription}</h2>
                <p>{project.description}</p>
                
                <div
                    className="linksGrid"           >
                    {/* <div>
                        <Link to={project.deployedURL}>
                            <button className="workLinks">view project</button>
                        </Link>
                        <span className='circleShadow' />
                    </div> */}
                    <div className='flex flex-row'>
                        {
                            project.components.map((item)=>{
                                return(
                                    <p className='mx-2'>{item}</p>
                                )
                            })
                        }

                    </div>
                    <div className='flex justify-center'>
                        <Link to={project.githubUrl}>
                            <FaGithub className="workLinks" />
                        </Link>
                    </div>
                </div>
                

            </div>
        </div>
        // </Fade>
    )
}

export default OneProjectCardFullscreen
