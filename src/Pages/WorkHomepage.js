import { motion } from "framer-motion"
import '../Assets/Styles/Work.css'
import ReactCards from "../Components/ReactCards";
import VanillaCards from '../Components/VanillaCards'



const WorkHomepage = () => {  
  const AnimationSettings = {
    transition: { duration: 0.5 },
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };




  return (
    <div>
      <ReactCards />
      <VanillaCards />
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