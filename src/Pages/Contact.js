import { motion } from "framer-motion";
import { useState } from "react";
import '../Assets/Styles/Contact.css'

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
        <div className="contactInnerContainer mt-10">
          <div className="sideTitleLabel">
            <h1>CONTACT</h1>
          </div>
          <div>
          <h1 className="formSubheading">Get in touch with me.</h1>
          <form className="flex flex-col items-center contactInputForm">
            <input 
            type='text'
            id='name'
            name='fullName'
            placeholder="Your Name"
            onChange={handleChange} 
            className=" focus:outline-none"/>
            <input 
            type='email'
            id='email'
            name='email'
            placeholder="Your Email"
            onChange={handleChange} 
            className=" focus:outline-none"/>
            <input 
            type='text'
            id='subject'
            name='subject'
            placeholder="Subject"
            onChange={handleChange} 
            className=" focus:outline-none"/>
            <input 
            type='text'
            id='message'
            name='message'
            placeholder="Message"
            onChange={handleChange} 
            className=" focus:outline-none"/>
            <button className='submitBtn' onClick={onSubmit}>Submit</button>
          </form>
          </div>
        </div>
    </motion.div>
  )
}

export default Contact