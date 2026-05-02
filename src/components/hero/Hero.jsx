import { animate } from "motion"
import "./hero.css"
import Speech from "./Speech"
import { motion, stagger } from "motion/react"


const awardVariants = {
  initial: {
    x: -100,
    opacity: 0
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.2,
    }
  }
}

const followVariants = {
  initial: {
    y: -100,
    opacity: 0
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.2,
    }
  }
}

const Hero = () => {
  return (
    <div className='hero'>

      {/* LEFT SECTION */}
      <div className="hSection left">
        <motion.h1
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="hTitle">
          Hey There,
          <br />
          <span>I'm Ayan!</span>
        </motion.h1>

        <motion.div
          variants={awardVariants}
          initial="initial"
          animate="animate"
          className="hIntro">
          <motion.h2 variants={awardVariants} className="hSubtitle">Web Developer</motion.h2>

          <motion.p variants={awardVariants} className="hDesc">
            I build responsive and dynamic web applications using modern technologies
            like React, JavaScript and MySQL.
          </motion.p>
        </motion.div>


        {/* TECH STACK */}
        <motion.div
          variants={awardVariants}
          initial="initial"
          animate="animate"
          className="awards">
          <motion.h2 variants={awardVariants} >Tech Stack</motion.h2>
          <motion.p variants={awardVariants} >Technologies I work with</motion.p>

          <motion.div variants={awardVariants} className="awardList">
            <motion.img variants={awardVariants} src="./html.png" alt="HTML" />
            <motion.img variants={awardVariants} src="./css.png" alt="CSS" />
            <motion.img variants={awardVariants} src="./js.png" alt="JavaScript" />
            <motion.img variants={awardVariants} src="./react1.png" alt="React" />
          </motion.div>
        </motion.div>

        {/* SCROLL INDICATOR */}
        <motion.a animate={{ y: [0, 5], opacity: [0, 1, 0] }}
          transition={{
            repeat: Infinity,
            duration: 3,
            ease: "easeInOut"

          }} href="#services" className="scroll">
          <svg width="40" height="40" viewBox="0 0 24 40" fill="none">
            <rect
              x="2" y="2"
              width="20" height="36"
              rx="10"
              stroke="white"
              strokeWidth="2"
            />

            <motion.circle cx="12" cy="10" r="2" fill="white"
              animate={{ y: [0, 5] }}
              transition={{
                repeat: Infinity,
                duration: 4,
                ease: "easeInOut"

              }}
            >


            </motion.circle>
          </svg>
        </motion.a>
      </div>

      {/* RIGHT SECTION */}
      <div className="hSection right">

        {/* SOCIAL LINKS */}
        <motion.div variants={followVariants} initial="initial" animate="animate" className="follow">
          <motion.a  variants={followVariants}  href="https://github.com/" target="_blank">
            <motion.img variants={followVariants}  src="/github.png" alt="GitHub" />
          </motion.a>
          <motion.a variants={followVariants}  href="https://linkedin.com/" target="_blank">
            <motion.img variants={followVariants}  src="/linkedin.png" alt="LinkedIn" />
          </motion.a>
          <motion.a variants={followVariants}  href="https://instagram.com/" target="_blank">
            <motion.img variants={followVariants}  src="/instagram.png" alt="Instagram" />
          </motion.a>
          <motion.div className="followTextContainer">
            <motion.div className="followText">FOLLOW ME</motion.div>
          </motion.div>
        </motion.div>

        {/* SPEECH BUBBLE */}
        <Speech />

        {/* PROFILE CARD */}
        <motion.div  
         animate={{opacity:[0,1]}} 
        transition={{duration:1}} 
        className="certificate">
          <img src="/certificate.png" alt="" />
          FULL STACK
          <br />
          WEB DEVELOPER
          <br />
          REACT • PHP • MYSQL

          {/* CONTACT BUTTON */}
          
        </motion.div>
        <motion.a href="/#contact" 
          animate={{
            x:[200,0],
            opacity:[0,1]
          }}
          transition={{
            duration:2
          }}
          
          className="contactList">
            <motion.div  
            animate={{rotate:[0,360]}}
            transition={{
              duration:10,
              repeat:Infinity,
              ease:"linear"

            }}
            className="contactButton">
              <svg viewBox="0 0 200 200" width="150" height="150">

                <circle cx="100" cy="100" r="90" fill="pink" />

                <path
                  id="innerCirclePath"
                  fill="none"
                  d="M 100, 100 m -60,0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120, 0"
                />

                <text className="circleText">
                  <textPath href="#innerCirclePath">
                    Hire Me •
                  </textPath>
                </text>

                <text className="circleText">
                  <textPath href="#innerCirclePath" startOffset="44%">
                    Contact Me •
                  </textPath>
                </text>



              </svg>
              <div className="arrow">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" stroke="black" class="bi bi-arrow-up-right" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z" />
                </svg>
              </div>
            </motion.div>

          </motion.a>

      </div>
      <div className="bg">
        {/* 3d */}
        <div className="hImg">
          <img src="/hero.png" alt="" />
        </div>
      </div>


    </div>
  )
}

export default Hero