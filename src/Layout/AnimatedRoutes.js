

import { motion } from 'framer-motion';
const AnimatedRoutes = (OgComponent) => {

    return (
        <OgComponent >
            <motion.div
            className='slideIn'
            initial={{scaleY:0}}
            animate={{scaleY:0}}
            exit={{scaleY:1}}
            transition={{duration:0.1, ease:[0.22,1,0.36,1]}} />
            <motion.div 
            className='slideOut'
            initial={{scaleY:1}}
            animate={{scaleY:0}}
            exit={{scaleY:0}}
            transition={{duration:0.1, ease:[0.22,1,0.36,1]}}/>

      
        </OgComponent>
    )
}

export default AnimatedRoutes