import { motion } from "framer-motion";

const Contact = () => {

    const AnimationSettings = {
        transition: { duration: 0.5 },
        initial: { opacity: 0, y: -20 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 }
      };
    
  return (
    <motion.div
    {...AnimationSettings}>
        <h1>This is the contact page</h1>
    </motion.div>
  )
}

export default Contact