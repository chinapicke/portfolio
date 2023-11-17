import { motion } from "framer-motion";
import { useState } from "react";

const Contact = () => {
  const [contactInput, setContactInput] = useState({
    fullName:'',
    email:'',
    subject:'',
    message:''
  })

    const AnimationSettings = {
        transition: { duration: 0.5 },
        initial: { opacity: 0, y: -20 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 }
      };

      const onSubmit = (e) =>{
        e.preventDefault()
        console.log(contactInput)
      }

      const handleChange = e =>{
          const name = e.target.name;
          const value = e.target.value;

          setContactInput(current =>({
            ...current,
            [name]:value
          }))
          console.log(contactInput)
      }
    
  return (
    <motion.div
    {...AnimationSettings}>
        <div className="contactInnerContainer">
          <h1>Get in touch with me.</h1>
          <form>
            <label htmlFor="name">Your Name</label>
            <input 
            type='text'
            id='name'
            name='fullName'
            onChange={handleChange} />
            <label htmlFor="email">Your Email</label>
            <input 
            type='email'
            id='email'
            name='email'
            onChange={handleChange} />
            <label htmlFor="subject">Subject</label>
            <input 
            type='text'
            id='subject'
            name='subject'
            onChange={handleChange} />
            <label htmlFor="message">Message</label>
            <input 
            type='text'
            id='message'
            name='message'
            onChange={handleChange} />
            <button onClick={onSubmit}>Submit</button>
          </form>
        </div>
    </motion.div>
  )
}

export default Contact