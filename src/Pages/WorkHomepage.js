// import { motion } from "framer-motion"
import '../Assets/Styles/Work.css'
import ReactCards from "../Components/ReactCards";
import VanillaCards from '../Components/VanillaCards'
import { useNavigate } from 'react-router-dom';



const WorkHomepage = () => {  
  // const AnimationSettings = {
  //   transition: { duration: 0.5 },
  //   initial: { opacity: 0, y: -20 },
  //   animate: { opacity: 1, y: 0 },
  //   exit: { opacity: 0, y: -20 }
  // };
const navigate = useNavigate()




  return (
    <div>
      <ReactCards />
      <VanillaCards />
      <div> 
        <button onClick={()=>navigate('/work')}>view all projects</button>
      </div>
    </div>
    // <motion.div
    //   {...AnimationSettings}
    //   className="WorkHomepagePage">
    //   <div className="projectCards">
    //     <ReactCards />
    //     <VanillaCards />
    //   </div>
    // </motion.div>
  )
}

export default WorkHomepage