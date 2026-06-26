import "./contact.css"
import  { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { span } from "motion/react-client";


const Contact = () => {
  const ref = useRef();

  const[success,setSuccess] = useState(false);

  const[error,setError] = useState(false);

  const sendEmail = (e)=>{
    e.preventDefaukt();

     emailjs
      .sendForm(import.meta.env.VITE_SERVICE_ID,
         import.meta.env.VITE_TEMPLATE_ID, 
         e.target, {
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
    <div className='contact'>
      <div className="cSection">
        <form ref={ref} onSubmit={sendEmail} >
          <h1 className="cTitle">Let's keep in touch</h1>
          <div className="formItem">
            <label>Name</label>
            <input type="text" name="user_username" placeholder="John doe"/>
          </div>
          <div className="formItem">
            <label>Email</label>
            <input type="email" name="user_email" placeholder="John@gmail.com"/>
          </div>
          <div className="formItem">
            <label>Message</label>
            <textarea rows={10} name="user_message" placeholder="write your message..."></textarea>
          </div>

          <button className="formButton">Send</button>
          {success && <span>Your message has been sent!</span>}
          {error && <span>Something went wrong!</span>}
          

        </form>
      </div>
      <div className="cSection">SVG</div>
    </div>
  )
}

export default Contact