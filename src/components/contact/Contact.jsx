import "./contact.css"
import  { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import { motion, useInView } from "motion/react";



const Contact = () => {
  const ref = useRef();
  const form = useRef();

  const[success,setSuccess] = useState(false);

  const[error,setError] = useState(false);


  const listVariants = {
    initial:{
      x:100,
      opacity:0

    },
    animate:{
      x:0,
      opacity:1,
      transition:{
        duration: 0.5,
        staggerChildren:0.2

      }

    }
  }

  const isInView = useInView(ref,{margin:'-200px'})

  const sendEmail = (e)=>{
    e.preventDefault();

     emailjs
      .sendForm(import.meta.env.VITE_SERVICE_ID,
         import.meta.env.VITE_TEMPLATE_ID, 
         form.current, {
        publicKey: import.meta.env.VITE_PUBLIC_KEY,
      })
      .then(
        () => {
          setSuccess(true);
          setError(false);
        },
        (error) => {
          console.log(error)
         setError(true);
         setSuccess(false);
        },
      );
  }

  return (
    <div className='contact' ref={form}  onSubmit={sendEmail}>
      <div className="cSection">
        <motion.form variants={listVariants} animate={isInView ?"animate":"initial"} ref={ref}  >
          <motion.h1 variants={listVariants} className="cTitle">Let's keep in touch</motion.h1>
          <motion.div variants={listVariants}  className="formItem">
            <label>Name</label>
            <input type="text" name="user_username" placeholder="John doe"/>
          </motion.div>
          <motion.div variants={listVariants}  className="formItem">
            <label>Email</label>
            <input type="email" name="user_email" placeholder="John@gmail.com"/>
          </motion.div>
          <motion.div variants={listVariants}  className="formItem">
            <label>Message</label>
            <textarea rows={10} name="user_message" placeholder="write your message..."></textarea>
          </motion.div>

          <motion.button variants={listVariants}  className="formButton">Send</motion.button>
          {success && <span>Your message has been sent!</span>}
          {error && <span>Something went wrong!</span>}
          

        </motion.form>
      </div>
      <div className="cSection">SVG</div>
    </div>
  )
}

export default Contact