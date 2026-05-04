import { useRef, useState } from "react";
import ComputerModelContainer from "./computer/ComputerModelContainer"
import Counter from "./Counter";
import RobotModelContainer from "./robot/RobotModelContainer"
import ServerModelContainer from "./server/ServerModelContainer"
import "./services.css"
import { motion, useInView } from "motion/react";


const textVariants = {
  initial:{
    x:-100,
    y:-100,
    opacity:0
  },
  animate:{
    x:0,
    y:0,
    opacity:1,
    transition: {
      duration: 1, 

    }
  }

}

const listVariants = {
  initial:{
    x:-100,
    
    opacity:0
  },
  animate:{
    x:0,
    opacity:1,
    transition: {
      duration: 1, 
      staggerChildren:0.5,

    }
  }

}




const services =[

   {
    id: 1,
    img: "/frontend.png",
    title: "Frontend Development",
    counter: 20,
  },
  {
    id: 2,
    img: "/backend.png",
    title: "Backend Development",
    counter: 15,
  },
  {
    id: 3,
    img: "/fullstack.png",
    title: "Full Stack Projects",
    counter: 10,
  },
];


const Services = () => {

  const ref = useRef(null);

 const inView = useInView(ref , {margin:"-100px"});

 const[currentServiceId,setCurrentServiceId] = useState(1);

  return (
    <div className='Services'>
      <div className="sSection left">
          <motion.h1 ref={ref}
          variants={textVariants} 
           
          animate = {inView? "animate" : "initial"}
          className="sTitle">
            What I Build
            </motion.h1>
          <motion.div 
          variants={listVariants}
          animate = {inView? "animate" : "initial"}
          className="serviceList">
                {services.map((service)=>(
                  <motion.div variants={listVariants} 
                            className="service" 
                            key={service.id} 
                            onClick={() =>setCurrentServiceId(service.id)}
                            
                  >
                    <div className="serviceIcon">
                      <img src={service.img} alt="" />
                    </div>

                    <div className="serviceInfo">
                      <h2>{service.title}</h2>
                      <h3>{service.counter} Projects</h3>
                    </div>
                  </motion.div>
                )

                )}
           
          </motion.div>
          <div className="counterList">
           <Counter from={0} to={12} text="Projects Built" />
           <Counter from={0} to={6} text="Technologies Used" />
          </div>
      </div>
      <div className="sSection right"> 

        {
        currentServiceId === 1 ? (<ComputerModelContainer/>) : currentServiceId ===2 ? (<ServerModelContainer />) : (<RobotModelContainer/>)
      }        


        {/* <ComputerModelContainer/> */}
        {/* <ServerModelContainer /> */}
        {/* <RobotModelContainer/> */}
      </div>
    </div>
  )
}

export default Services