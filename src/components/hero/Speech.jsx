import { TypeAnimation } from 'react-type-animation';
import { motion, stagger } from "motion/react"

const Speech = () => {
    return (
        <motion.div 
        animate={{opacity:[0,1]}} 
        transition={{duration:1}} 
        className="bubbleContainer" >
            <div className="bubble">
                <TypeAnimation
                    sequence={[
                        1000,
                        "I build scalable web apps",
                        1500,
                        "Frontend + Backend Solutions",
                        1500,
                        "Clean UI • Fast APIs",
                        1500,
                        "Open to projects & internships",
                        1500,
                    ]}
                    wrapper="span"
                    speed={40}
                    deletionSpeed={60}
                    repeat={Infinity}
                />
            </div>
            <img src="/hero.png" alt="" />
        </motion.div>
    )
}

export default Speech